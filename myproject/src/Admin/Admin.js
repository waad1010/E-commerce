import React, { useState } from 'react'
import "./admin.css"
const Admin = () => {


    const [show, setShow] = useState(false);
    const [category, setCat] = useState('');


    const showH = () => {
        setShow(true);
        
    const handlecat = (e) => {
            setCat(e.target.value);
        }

    }


    return (
        <>
            <button id='btn' onClick={showH}>
                <div className='bb1'>Add Item </div>
                <div className='bb2'> + </div>
            </button>

            {show &&
                <form id="form">
                    <label> Category Name: </label>
                    <select className='catsel' type="text" value={category} required onChange={(e) => { handlecat(e) }} >
                        <option value="0">Lebanon</option>
                        <option value="1">Jordan</option>
                        <option value="2">Palestine</option>
                    </select>
                </form>
            }
        </>
    )
}

export default Admin
