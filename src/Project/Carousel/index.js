
import image1 from './image1.webp'
import image2 from './image2.webp'
import image3 from './image3.webp'

const One=()=>{


    return(
        <>
        
        <img src={image1}  style={{width:"100vw"}} alt="Image1"/>
        </>
    )
}


export default One 

export const Two =()=>{
        return(
            <>
            <img src={image2} style={{width:"100vw"}} alt="Image2"/>
            </>
        )
}

export const Three =()=>{
    return(
        <>
        <img src={image3} style={{width:"100vw"}} alt='image3'/>
        </>
    )
}
