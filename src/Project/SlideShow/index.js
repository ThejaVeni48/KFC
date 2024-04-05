import One, { Three, Two } from '../Carousel';

import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <div style={{width:"100%"}}>

    <Carousel>
      <Carousel.Item interval={3200} >
       {/* <One style={{width:"50%"}}/> */}
       <One/>
      </Carousel.Item>
      <Carousel.Item interval={200} >
        <Two/>
        {/* <Two style={{width:"50%"}}/> */}
       
      </Carousel.Item>
      <Carousel.Item  interval={500}>
        <Three/>
       {/* <Three style={{width:"50%"}}/> */}
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;