import React from 'react'
import "./comment.css";
import kenneth from '../assets/images/kenneth.png'
import gabriella from '../assets/images/gabriellla.png'
import loisLane from '../assets/images/loislane.png'
import rihanna from '../assets/images/rihanna.png'
import superman from '../assets/images/superman.png'
import tems from '../assets/images/tems.png'
import { FaStar } from "react-icons/fa6";


function Comment() {
  return (
  
        <div className="c-wrapper">
          <div className="c-container">
            <div className="c-details">
              <h2>Clients Comments</h2>
              <p>
              Read genuine reviews from our satisfied customers and discover why<br/> Quicklift is the go-to ride-hailing service for comfort, reliability, and convenience
              </p>
            </div>
            <div className="c-customer">
              <div className="c-row">
                <div className="customer ">
                  <div>
                    <img src={gabriella} alt="" />
                    <h4 className="customer-name"> Gabrielle Union</h4>
                    <div className="stars one">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar />
                      <FaStar  style={{
                        color: "#0031AE"
                      }}/>
                    </div>
                  </div>
                  <p className="customer-desc">
                  With Quicklift, I've experienced prompt arrivals,<br/> clean cars, and friendly drivers, <br/>making every journey a pleasure, thank you Quicklift!
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer ">
                  <div>
                    <img src={rihanna} alt="" />
                    <h4 className="customer-name">Rihanna</h4>
                   
                    <div className="stars">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar />
                      <FaStar  className="one"/>
                    </div>
                   
                  </div>
                  <p className="customer-desc">
                  With Quicklift, I've enjoyed seamless rides, accurate ETAs, and a<br/> user-friendly app,their service is top-notch, keep it up!
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer">
                  <div>
                    <img src={superman} alt="" />
                    <h4 className="customer-name">Rudiger</h4>
                  
                    
                    <div className="stars">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar />
                      <FaStar  className="one"/>
                    </div>
                    
                   
                  </div>
                  <p className="customer-desc">
                  Quicklift's affordable prices and hassle-free booking <br/>process have made them my go-to ride-hailing<br/> service, I'm so impressed!
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
              </div>
              <div className="c-row c-row2">
                <div className="customer customer2">
                  <div>
                    <img src={tems} alt="" />
                    <h4 className="customer-name">Superman</h4>
                    <div className="stars">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar />
                      <FaStar  className="one"/>
                    </div>
                  </div>
                  <p className="customer-desc">
                  "Quicklift's reliable drivers and comfortable rides have made<br></br> my daily commute stress-free, I can't recommend them enough!
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer customer2">
                  <div>
                    <img src={loisLane} alt="" />
                    <h4 className="customer-name">Lois-lane</h4>
                    
                    <div className="stars">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar />
                      <FaStar  className="one"/>
                    </div>
                   
                  </div>
                  <p className="customer-desc">
                  Quicklift's user-friendly app and excellent customer <br/>service have exceeded my expectations, I'm a loyal customer for life
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer customer2">
                  <div>
                    <img src={kenneth} alt="" />
                    <h4 className="customer-name">Gabrielle Union</h4> 
                    <div className="stars">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar />
                      <FaStar  className="one"/>
                    </div>
                  </div>
                  <p className="customer-desc">
                  Quicklift's drivers are always courteous and helpful, making me<br/> feel safe and valued, I highly recommend their services!
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Comment


