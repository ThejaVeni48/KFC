import { useState } from "react";
import data from "../JSON/one.json";

const Search = () => {
    const [text, setText] = useState('');
    const [filterData, setFilterData] = useState(data.menu.category);

    const handleText = (e) => {
        const searchText = e.target.value;
        setText(searchText);

        const value = data.menu.category.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterData(value);
    }

    return (
             <>
            <input type="text" value={text} onChange={handleText} />
             {
                filterData.map((eachItem)=>(
                    <>
                    <li>{eachItem.name}</li>
                   
                        {
                            eachItem.items.map((item) => (
                               <>
                                   {item.name}
                                   <li key={item.id}>
                                </li>
                                <li><img src={item.image} width={30}/></li>
                               </>
                            ))
                        }
            
                    </>
                ))
             }
    

             </>
    )
}



       

export default Search;





