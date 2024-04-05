import React, { useState } from 'react';
import data from '../JSON/menu.json';

const ShoppingCart = () => {
    const [setText] = useState('');
    const [filterData, setFilterData] = useState(data);
    const [cart, setCart] = useState([]);

    const handleText = (e) => {
        const searchText = e.target.value;
        setText(searchText);

        const value = data.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilterData(value);
    }
    const handleTexts = (item) => {
        let isPresent = false;
        cart.forEach((product)=>{
            if(item.id===product.id)
                isPresent = true;
        })
        if(isPresent)
            return;
        setCart([...cart, item])
        console.log(cart)
    }
    
    return(
     <>
     <h2>Length;{cart.length}</h2>
    {
        filterData.map((eachItem) => (
            <ul key={eachItem.id}>
                <li>{eachItem.name}</li>
                <li>
                    {
                        eachItem.age && eachItem.age.map((items) => (
                            <ul key={items.id}>
                                {
                                    items.year && Object.keys(items.year).map((key) => (
                                        <li key={key}>
                                            <h2>{items.year[key].dob}</h2>
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </li>
                <li>
                    <button onClick={() => handleTexts(eachItem)}>Add to cart</button>
                </li>
            </ul>
        ))
    }
    


    </>   
   )
}

export default ShoppingCart;
