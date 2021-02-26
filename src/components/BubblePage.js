import React, { useEffect, useState } from "react";

import { fetchColors } from '../api/fetchColors';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // 🔽 Uses an imported API call to receive initial data, this setup allows for easier testing of our isolated API call

  useEffect(() => {
    fetchColors()
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
