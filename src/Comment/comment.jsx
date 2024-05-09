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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                gravida  <br />
                quis nisl ut semper. nisl ut semper nisl ut semper
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Ut gravida quis nisl ut semper. Quisque nibh Lorem ipsum
                  <br /> dolor sit amet, consectetur adipiscing elit. Ut gravida quis
                  <br /> nisl ut semper. Quisque nibh
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer">
                  <div>
                    <img src={rihanna} alt="" />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Ut gravida quis nisl ut semper. Quisque nibh Lorem ipsum
                  <br /> dolor sit amet, consectetur adipiscing elit. Ut gravida quis
                  <br /> nisl ut semper. Quisque nibh
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer">
                  <div>
                    <img src={superman} alt="" />
                    <h4 className="customer-name">Gabrielle Union</h4>
                  
                    <div className="stars">
                    /
                    </div>
                   
                  </div>
                  <p className="customer-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Ut gravida quis nisl ut semper. Quisque nibh Lorem ipsum
                  <br /> dolor sit amet, consectetur adipiscing elit. Ut gravida quis
                  <br /> nisl ut semper. Quisque nibh
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
              </div>
              <div className="c-row c-row2">
                <div className="customer">
                  <div>
                    <img src={tems} alt="" />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Ut gravida quis nisl ut semper. Quisque nibh Lorem ipsum
                  <br /> dolor sit amet, consectetur adipiscing elit. Ut gravida quis
                  <br /> nisl ut semper. Quisque nibh
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer">
                  <div>
                    <img src={loisLane} alt="" />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Ut gravida quis nisl ut semper. Quisque nibh Lorem ipsum
                  <br /> dolor sit amet, consectetur adipiscing elit. Ut gravida quis
                  <br /> nisl ut semper. Quisque nibh
                  </p>
                  <span className="date">
                  28 October 2023
                  </span>
                </div>
                <div className="customer">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Ut gravida quis nisl ut semper. Quisque nibh Lorem ipsum
                  <br /> dolor sit amet, consectetur adipiscing elit. Ut gravida quis
                  <br /> nisl ut semper. Quisque nibh
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


