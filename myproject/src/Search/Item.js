import React , {useContext } from "react";
import Input from "../card/Input";
import styles from './Item.module.css'
import Form from "../card/Form";
import AuthCart from "../store/cart-context";

const Item = props => {
    const ctx = useContext(AuthCart);

    const addHandler = amount => { 
       ctx.addItem ({
        id : props.id,
        title : props.title,
        amount : amount ,
        price : props.price, 
        max : +props.count


       });
    };
    const xd = '2.jpg';
console.log(props.id);
    return (

        <li className={styles.meal}>
            <div>                    <h3 className={styles['meal h3']}>{props.title}</h3>
            <img className = {styles.searchimg}src={require(`../../../pictures/${props.pic}`)} />
                <p className={styles.description}> <em >{props.des}</em></p> 
                <h2 className={styles.price}>${props.price}</h2>
            </div>

            <div><Form onAddToCart ={addHandler}/></div>

           
        </li>

    )

}

export default Item;