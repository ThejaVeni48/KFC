import BasicExample from "../Categories";
import Footer from "../Footer/footer";
import Header from "../Header/header"
import OrderBtn from "../OrderBtn/order";
import IndividualIntervalsExample from "../SlideShow";

const Home = () => {
  return (
    <>
    <div >
      <header>
        <Header/>
        </header> 
    <main>
      <OrderBtn/>
      <IndividualIntervalsExample/>
      <BasicExample/>
      </main>
     <footer>
    <Footer/>
    </footer>
    </div>

   
    </>

   )
  }


export default Home; 
