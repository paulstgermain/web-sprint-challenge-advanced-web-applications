import React, { useState } from "react";
import EditMenu from './EditMenu';
import AddMenu from './AddMenu';
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const [adding, setAdding] = useState(false);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();

    axiosWithAuth().put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      updateColors(colors.map(color => {
        if(color.id === res.data.id){
          return res.data;
        } else{
          return color;
        }
      }))
    })
    .catch(err => {
      console.log(err);
    })
  };

  const deleteColor = color => {
    axiosWithAuth().delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => {
      updateColors(colors.filter(color => color.id !== Number(res.data)));
    })
    .catch(err => {
      console.log(err);
    })
  };

  const addColor = e => {
    e.preventDefault();
    setAdding(true);

    axiosWithAuth().post('http://localhost:5000/api/colors', colorToAdd)
    .then(res => {
      updateColors(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <button onClick={() => setAdding(!adding)}>Add a New Color</button>
      {adding && <AddMenu colorToAdd={colorToAdd} addColor={addColor} setColorToAdd={setColorToAdd} setAdding={setAdding} initColor={initialColor} />}
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span data-testid='apiData'>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.