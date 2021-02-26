import React from 'react';

const AddMenu = ({colorToAdd, addColor, setColorToAdd, setAdding, initColor}) => {

    return (
        <div>
            <form onSubmit={addColor}>
                <label>Color:
                    <input
                    type='text'
                    name='color'
                    value={colorToAdd.color}
                    onChange={e => setColorToAdd({...colorToAdd, color: e.target.value})} />
                </label>

                <label>Hex Code:
                    <input
                    type='text'
                    name='hex'
                    value={colorToAdd.code.hex}
                    onChange={e => setColorToAdd({...colorToAdd, code: {hex: e.target.value}})} />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => {
            setAdding(false)
            setColorToAdd(initColor)
            }}>Cancel</button>
        </div>
    )
}

export default AddMenu;