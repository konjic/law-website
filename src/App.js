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
            <meta 
            name="description"
            content='wow'
            />

<meta property='og:title' content='Title of the article'/>
<meta property='og:image' content='//media.example.com/ 1234567.jpg'/>
<meta property='og:description' content='Description that will show in the preview'/>
<meta property='og:url' content='//www.example.com/URL of the article'/>
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
