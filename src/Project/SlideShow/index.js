import One, { Three, Two } from '../Carousel';

import Carousel from 'react-bootstrap/Carousel';


function Slideshow() {
  return (
    <div style={{width:"100%"}}>

    <Carousel>
      <Carousel.Item interval={3200} >
       <One/>
      </Carousel.Item>
      <Carousel.Item interval={200} >
        <Two/>
       
      </Carousel.Item>
      <Carousel.Item  interval={500}>
        <Three/>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slideshow