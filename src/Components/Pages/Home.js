import React from 'react'
import '../Styles/homeStyle.css'
import {FaSuitcase,FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
import Carousel from '../Carousel/Carousel'


const data = [
  {
  key: 1,
  nume: "Teodor Meila",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, iste accusamus. Repudiandae, quo fugiat dolor obcaecati ducimus nisi. Delectus facilis harum reiciendis ut! Temporibus eveniet adipisci neque necessitatibus sapiente nam.",
  },
  {
  key: 2,
  nume: "Horia Mihai Iancu",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, iste accusamus. Repudiandae, quo fugiat dolor obcaecati ducimus nisi. Delectus facilis harum reiciendis ut! Temporibus eveniet adipisci neque necessitatibus sapiente nam.",
  },
  {
  key: 3,
  nume: "Horia Mihai Iancu",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, iste accusamus. Repudiandae, quo fugiat dolor obcaecati ducimus nisi. Delectus facilis harum reiciendis ut! Temporibus eveniet adipisci neque necessitatibus sapiente nam.",
  },
  {
  key: 4,
  nume: "Horia Mihai Iancu",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, iste accusamus. Repudiandae, quo fugiat dolor obcaecati ducimus nisi. Delectus facilis harum reiciendis ut! Temporibus eveniet adipisci neque necessitatibus sapiente nam.",
  },
  {
  key: 5,
  nume: "Horia Mihai Iancu",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, iste accusamus. Repudiandae, quo fugiat dolor obcaecati ducimus nisi. Delectus facilis harum reiciendis ut! Temporibus eveniet adipisci neque necessitatibus sapiente nam.",
  },
  {
  key: 6,
  nume: "Horia Mihai Iancu",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, iste accusamus. Repudiandae, quo fugiat dolor obcaecati ducimus nisi. Delectus facilis harum reiciendis ut! Temporibus eveniet adipisci neque necessitatibus sapiente nam.",
  },
]

function Home() {
  

  return (
    <section>
      <div className='hero'>


      <div className='container'>
        <div className="item">
          <div>

          <h1 className="landing-text">  We Are Experts In <br/> Legal Professions</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam quos accusamus tempore enim, culpa unde commodi reprehenderit delectus deserunt iusto sed cupiditate et laborum ipsa adipisci beatae perspiciatis maxime!</p>
          <button>Find Out More</button>
          </div>
        </div>

        <div className="item"></div>

      </div>


    <div className='services-area'>

      <h3>services</h3>
      <h2>Our Practice Area</h2>

      <div className="container-services-area">
      {data.map(({ text, nume, key }) => (
          <div className="item-services-area">
                <FaSuitcase className='icon-services'/>
                <br/>
                <h3 
                key={key}
                >
                  {nume} 
                </h3>    
                  <br/>
                <p>{text}</p>   
                <button>Learn More →</button>             
          
          </div>
          ))}
      </div>

    </div>

        <div className='why-choose-us-section'>

          <div className="why-choose-us-section-container">
              <div className="why-choose-us-section-item">
                 
              </div>

              <div className="why-choose-us-section-item">
                <h4>Facts</h4> <br/>
                <h3>Why Choose Us</h3>
              </div>

              <div className="why-choose-us-section-item">
                <div className='why-choose-us-section-inner-grid-container'>
                  <div className='why-choose-us-section-inner-grid-item'>
                    <i className='icon-why-choose-us' > <FaSuitcase size={30}/> </i>
                  </div>
                  <div className='why-choose-us-section-inner-grid-item'>
                    <h3>Expert in law</h3>

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in consectetur obcaecati eveniet. Unde dolor placeat nobis nostrum deserunt exercitationem, laborum quisquam, similique illum nihil, enim pariatur est voluptatum perspiciatis!</p>
                  </div>
                  <div className='why-choose-us-section-inner-grid-item'>
                  <i className='icon-why-choose-us' > <FaSuitcase size={30}/> </i>
                  </div>
                  <div className='why-choose-us-section-inner-grid-item'>
                    <h3>Maximum Practice Area</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in consectetur obcaecati eveniet. Unde dolor placeat nobis nostrum deserunt exercitationem, laborum quisquam, similique illum nihil, enim pariatur est voluptatum perspiciatis!</p>
                  </div>
                  <div className='why-choose-us-section-inner-grid-item'>
                    
                  <i className='icon-why-choose-us' > <FaSuitcase size={30}/> </i>
                  </div>
                  <div className='why-choose-us-section-inner-grid-item'>
                    
                    <h3>Maximum Practice Area</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in consectetur obcaecati eveniet. Unde dolor placeat nobis nostrum deserunt exercitationem, laborum quisquam, similique illum nihil, enim pariatur est voluptatum perspiciatis!</p>
                  </div>
                </div>
              </div>
              <div className="why-choose-us-section-item">
                <button>Free Consultations →</button>  
              </div>
              
          </div>

        </div>


        <div className="big-carusel-container">

        
        <div className='carusel-section'>
        <br/>
        
          <h3>Lawyers</h3><br/>
          <h2>Our Exper Lawyers</h2>
          
        </div>
        
        <div className="carusel">
          
          <Carousel/>
        </div>
        </div>

        {/* VERSION 1 */}
        {/* <div className='partner-section-big-container'>
          <div className="partner-section-container">

          <div className="partner-section-item">
            <h2>Are you looking for a consulatiton?</h2>
            <br/>
            <br/>
              <div>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem in perspiciatis a. Accusamus illum reprehenderit deleniti amet odio, dolores modi?</p>
              </div>

            <br/>
            <button>Contact Us</button>
          </div>
          <div className="partner-section-item">
            b
          </div>
          
          </div>

        </div> */}


        {/* VERSION 2 */}
        
        <div className='partner-section-big-container'> 
        <div className="partner-section-container">
  <div className="leftside">
  <h2>Are you looking for a consulatiton?</h2>
  <br/>
            <br/>
              <div>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem in perspiciatis a. Accusamus illum reprehenderit deleniti amet odio, dolores modi?</p>
              </div>

            <br/>
            <button>Contact Us</button>
  </div>
  <div className="rightside"></div>
</div>

        <h2> Partners</h2>
        <h3> Clients That We Love Working</h3>

        <div className="partners-container">
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
        </div>
        <div className="partners-container">
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
         
        </div>
        
        </div>


        <div className="testimnonials-big-container">
            <div className="testimonials-container">
              <div className="testimonials-item">
                  <h2 >Testimonials</h2>
                  <br/>
                  <br/>
                  <h3 className='left-text'>Few Words From Our Clients</h3>
                  <br/>
                  <br/>
                  <p className='left-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sint similique error? Velit, voluptatem odit! Porro omnis temporibus doloremque dolore, odio saepe, enim maiores eligendi officiis dolorem quo praesentium magni!</p>
                  <br/>
                  <button>Free Consultations</button>
              </div>

              <div className="testimonials-item">
                
              
                <div className="testimonials-inner-grid-container">

                  <div className="testimonials-inner-grid-item">
                    <h4>Aalyah Kris</h4>
                    <br/>
                    <p>Lorem ipsum dolor sit.</p>
                    <br/>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem harum debitis incidunt impedit, aut earum ut accusamus omnis placeat.</p>
                  </div>

                  <div className="testimonials-inner-grid-item">
                  <h4>Aalyah Kris</h4>
                    <br/>
                    <p>Lorem ipsum dolor sit.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in, facere doloribus iusto, quis explicabo quo veritatis nulla suscipit ipsam pariatur ea expedita ipsa maxime sed magnam, voluptas dolorem sit!</p>
                  </div>

                  <div className="testimonials-inner-grid-item">
                  <h4>Aalyah Kris</h4>
                    <br/>
                    <p>Lorem ipsum dolor sit.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem nisi dolor tempora illo porro fugiat expedita ipsam tenetur optio.</p>
                  </div>

                  <div className="testimonials-inner-grid-item">
                  <h4>Aalyah Kris</h4>
                    <br/>
                    <p>Lorem ipsum dolor sit.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde.</p>
                  </div>
                </div>

              </div>

            </div>
        </div>


        <div className="footer-container">
          <div className="footer-items">
          <img src="https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg" alt="" width="200" height="90" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, officiis?</p>
            <br/>

            <FaFacebookF/>
            <FaTwitter/>
            <FaInstagram/>
            
          </div>
          <div className="footer-items">
            <h3>Practice Area</h3><br/>

            <div className='area-footer'>

            <p>Law</p>
            <p>Law</p>
            <p>Law</p>
            <p>Law</p>
            <p>Law</p>
            <p>Law</p>
            </div>
          </div>

          <div className="footer-items">
          <h3>Company</h3>
          <br/>
          
            <div className='area-footer'>
              
            <p>Law</p>
            
            <p>Law</p>
            
            <p>Law</p>
            
            <p>Law</p>
            
            <p>Law</p>
            </div>

          </div>

          <div className="footer-items">
          <h3>Address</h3>
          <br/>
          
          <div className='area-footer'>
              
            <p>Law</p>
            
            <p>Law</p>
            
            <p>Law</p>
            
           
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home