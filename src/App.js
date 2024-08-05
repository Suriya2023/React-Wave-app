import './App.css';
import Navbar from './component/Navbar'
import Section from './component/Section';
import Header from './component/header';
import Joints from './component/joints';
import Gallerys_ from './component/gallery';
import Ratings from './component/Ratings';
import Teams from './component/Teams';
import Pricing from './component/Pricing';
import Buyers from './component/Buyers';
import Blog from './component/Blog';
import Touch from './component/Touch';
import Footer from './component/footer';
function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Section/>
   <Joints/>
   <Gallerys_/>
   <Ratings/>
   <Teams/>
   <Pricing/>
   <Buyers/>
   <Blog/>
   <Touch/>
   <Footer/>
   </>
  );
}

export default App;
