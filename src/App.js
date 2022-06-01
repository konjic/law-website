import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  Routes ,
  Route, 
  Router,

} from "react-router-dom";
import Home from './Components/Pages/Home';
import Lawyers from './Components/Pages/Lawyers'
import Practice from './Components/Pages/Practice'
import WhyChooseUs from './Components/Pages/WhyChooseUs'
import Reviews from './Components/Pages/Reviews'
import Helmet from 'react-helmet';


function App() {
 
  
  return (
      <>
        
        <Navbar/>
          <Helmet>
            <title>VERY COOL LAW FIRM WEBSITE</title>
            
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" key="description" content="woooow" />
      <meta name="title" key="title" content='VERY COOL LAW FIRM WEBSITE' />
      <meta property="og:title" key="og:title" content='VERY COOL LAW FIRM WEBSITE' />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content="woooow"
      />
      <meta
        property="og:image"
        key="og:image"
        content="https://images.squarespace-cdn.com/content/v1/602334ccc83cc72486df6be3/1613162047924-M4ZJZ3N7HCMH4HXSUJ68/TMLF-0101+Brand+Identity_LOGO-black.png"
      />  
          </Helmet>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/practice' element={<Practice/>} />
            <Route path='/why-choose-us' element={<WhyChooseUs/>} />
            <Route path='/lawyers' element={<Lawyers/>} />
            <Route path='/reviews' element={<Reviews/>} />
          </Routes>
          
          
    </>
  );
}

export default App;
