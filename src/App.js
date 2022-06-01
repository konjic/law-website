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
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Web3 developer beginner, blog posts about learning web3 development, cryptocurrency researches, NFTs, metaverse. Personal portfolio website. Building single page applications with React, NodeJS, NestJS, MongoDB, Express, Javascript, TypeScript."/>

    <meta name="title" content="BlackH3art.dev"/>

    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://blackh3art.dev/"/>
    <meta property="og:title" content="BlackH3art.dev"/>
    <meta property="og:description" content="Web3 developer beginner, blog posts about learning web3 development, cryptocurrency researches, NFTs, metaverse. Personal portfolio website. Building single page applications with React, NodeJS, NestJS, MongoDB, Express, Javascript, TypeScript."/>
    <meta property="og:image" content="https://blackh3art.dev/assets/1200x628logo.jpg"/>
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
