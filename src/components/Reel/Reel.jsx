import React, {useState, useEffect} from "react";
import './Reel.css'
import Item from "../Item/Item";
import banana from '../../assets/images/banana.png';
import cherry from '../../assets/images/cherry.png';
import lemon  from '../../assets/images/lemon.png';
import seven  from '../../assets/images/seven.png';

const Reel = () => {
    const imagesOfItems = [banana, cherry, lemon, seven];
    const [helperArray, setHelperArray] = useState([]); 

    function spinOneTime(array) {
        for ( let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        setHelperArray(array)
        return helperArray;
    }

    useEffect(()=> {
        spinOneTime(imagesOfItems); 
    }, [])

    const items = helperArray.map(item => {
        return (
            <Item img={item} key={item}/>
        )
    })

    return(
        <div className="reel">
            {items}
        </div>
    )
}

export default Reel;