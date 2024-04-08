import React, { useContext, useState } from 'react';
import data from '../JSON/one.json'
import styles from './index.module.css'
import  Card from 'react-bootstrap/Card';
import { CartContext } from '../Routes';




const Appoo = ({name}) => {
      let count = useContext(CartContext)
      console.log(count)

    const handleClick = (item)=>{
        count.handleClick(item)
    }
  
    const [text, setText] = useState('');
    const [filterData, setFilterData] = useState(data.menu.categories);
    
    const handleText = (e) => {
        const searchText = e.target.value;
        setText(searchText);

    const value = data.menu.categories.filter((category) => {
    const categoryName = category.name.toLowerCase();
            const itemNames = category.items.map(item => item.name.toLowerCase());
            return categoryName.includes(searchText.toLowerCase()) || itemNames.some(item => item.includes(searchText.toLowerCase()));
        });

        setFilterData(value);
    }
    
return (
        <>
         
                <div className={styles.right}>
                    <div className={styles.searchBar}>
                        <input type='text' value={text} onChange={handleText} placeholder='Search Our menu' />
                        <i></i>
                    </div>
                    <div className={styles.items}>
                        {
                            filterData.map((category, id) => (
                                <div key={category.name} style={{ width: "100%" }}>
                                    <h4 style={{ marginLeft: "18px" }}>{category.name}</h4>
                                    <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                                    {
    category.items.map((item) => (
        <div key={item.id}>
            <Card style={{ width: '15rem', margin: "20px" , height: "450px"}}>
                <Card.Img variant="top" src={item.image} width={120} />
                <Card.Body style={{ backgroundColor: "white" }}>
                    <Card.Title>{item.name}</Card.Title>
                    <p>{item.type}</p>
                    <Card.Title><span>&#8377;</span>{item.price}</Card.Title>
                </Card.Body>
                <button style={bbtn} onClick={() => handleClick(item)}>Add To Cart</button>
                

            </Card>
        </div>
    ))
}

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </>
    );
}
const bbtn =
    { border: "none", padding: "10px", backgroundColor: "#e4002b", marginLeft: "10px", margin: "20px 25px", width: "70%", borderRadius: "20px", color: "white" }


export default Appoo;

// import React, { useContext, useState, useEffect } from 'react';
// import data from '../JSON/one.json'
// import styles from './index.module.css'
// import Card from 'react-bootstrap/Card';
// import { CartContext } from '../Routes';

// const Appoo = ({name}) => {
//     let count = useContext(CartContext)

//     const handleClick = (item) => {
//         count.handleClick(item);
//         // Scroll to the item that was clicked
//         const itemId = `item-${item.id}`;
//         const element = document.getElementById(itemId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     const [text, setText] = useState('');
//     const [filterData, setFilterData] = useState(data.menu.categories);
    
//     const handleText = (e) => {
//         const searchText = e.target.value;
//         setText(searchText);

//         const value = data.menu.categories.filter((category) => {
//             const categoryName = category.name.toLowerCase();
//             const itemNames = category.items.map(item => item.name.toLowerCase());
//             return categoryName.includes(searchText.toLowerCase()) || itemNames.some(item => item.includes(searchText.toLowerCase()));
//         });

//         setFilterData(value);
//     }
    
//     return (
//         <>
//             <div className={styles.right}>
//                 <div className={styles.searchBar}>
//                     <input type='text' value={text} onChange={handleText} placeholder='Search Our menu' />
//                     <i></i>
//                 </div>
//                 <div className={styles.items}>
//                     {filterData.map((category) => (
//                         <div key={category.name}>
//                             <h4>{category.name}</h4>
//                             <div className={styles.itemList}>
//                                 {category.items.map((item) => (
//                                     <div key={item.id} id={`item-${item.id}`} className={styles.item}>
//                                         <Card style={{ width: '15rem', margin: "20px" , height: "450px"}}>
//                                             <Card.Img variant="top" src={item.image} width={120} />
//                                             <Card.Body style={{ backgroundColor: "white" }}>
//                                                 <Card.Title>{item.name}</Card.Title>
//                                                 <p>{item.type}</p>
//                                                 <Card.Title><span>&#8377;</span>{item.price}</Card.Title>
//                                             </Card.Body>
//                                             <button style={bbtn} onClick={() => handleClick(item)}>Add To Cart</button>
//                                         </Card>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// const bbtn = { border: "none", padding: "10px", backgroundColor: "#e4002b", marginLeft: "10px", margin: "20px 25px", width: "70%", borderRadius: "20px", color: "white" }

// export default Appoo;


