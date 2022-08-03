import React from "react";
import IMG4 from "../pictures/4.jpg"
import IMG5 from "../pictures/5.avif"
import IMG6 from "../pictures/6.webp"
import IMG7 from "../pictures/7.jpg"
import IMG8 from "../pictures/8.jpg"
import IMG9 from "../pictures/9.webp"
import IMG10 from "../pictures/10.webp"
import IMG11 from "../pictures/11.jpg"
import IMG12 from "../pictures/12.jpg"
import { Link } from "react-router-dom";


 const AvCats = [{
    id : 0 , 
    title: "Dresses",
    img : IMG4,

 },

 {
    id : 1 , 
    title: "Tops",
    img : IMG5,

 }
,
{
    id : 2 , 
    title: "Buttoms",
    img : IMG6,

 }

 ,
{
    id : 3 , 
    title: "T-shirts",
    img : IMG6,

 }

 ,
{
    id : 4 , 
    title: "Dresses",
    img : IMG7,

 }
 ,
{
    id : 5 , 
    title: "Skirts",
    img : IMG8,

 },
 {
     id : 6 , 
     title: "Jumpsuits",
     img : IMG9,
 
  },
  {
      id : 7 , 
      title: "Shoes",
      img : IMG10,
  
   },
   {
       id : 8, 
       title: "Bags",
       img : IMG11,
   
    },
    {
        id : 9, 
        title: "Caps",
        img : IMG12,
    
     }

]

const Cats = () => {
    return (<>

        <p className="p1"> Shop By Category</p>
        <table className="table1">
            <tr>
                <td><Link to="./dress">
                    <div>
                        <img src={IMG4} className="IMG4"></img>
                        <label className="tablelabel"> Dresses</label>
                    </div>
                    </Link>
                </td>
                

                <td>
                    <div>
                        <img src={IMG5} className="IMG4"></img>
                        <label className="tablelabel"> Tops</label>
                    </div>
                </td>


                <td>
                    <div>
                        <img src={IMG6} className="IMG4"></img>
                        <label className="tablelabel"> Buttoms</label>
                    </div>
                </td>
            </tr>




            <tr>
                <td>
                    <div>
                        <img src={IMG7} className="IMG4"></img>
                        <label className="tablelabel"> T-shirts</label>
                    </div>
                </td>

                <td>
                    <div>
                        <img src={IMG8} className="IMG4"></img>
                        <label className="tablelabel">Skirts</label>
                    </div>
                </td>

                <td>
                    <div>
                        <img src={IMG9} className="IMG4"></img>
                        <label className="tablelabel">Jumpsuits</label>
                    </div>
                </td>
            </tr>




            <tr>
                <td>
                    <div>
                        <img src={IMG10} className="IMG4"></img>
                        <label className="tablelabel"> Shoes</label>
                    </div>
                </td>

                <td>
                    <div>
                        <img src={IMG11} className="IMG4"></img>
                        <label className="tablelabel">Bags</label>
                    </div>
                </td>

                <td>
                    <div>
                        <img src={IMG12} className="IMG4"></img>
                        <label className="tablelabel">Caps</label>
                    </div>
                </td>
            </tr>


        </table>

    </>);

}

export default Cats;