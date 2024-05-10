import './how.css'
import phone from '../assets/images/phonez.png';
import { FaLocationDot } from "react-icons/fa6"; 
import { IoCard } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import car from '../assets/images/car.png'
import red from '../assets/images/red.png'
import yellow from '../assets/images/yellow.png'
import blue from '../assets/images/blue.png'
import darkBlue from '../assets/images/blue.png'


function How(){
  return(
    <div className='how-wrapper'>
      <div className="how-container">
        <div className="how-left">
          <img src={phone} alt="" />
        </div>
        <div className="how-right">
          <h2>How it works</h2>
          <div className="how-ctn">
            <div className="row">
              <div className="how-content">
                <div className="image-ctn">
                  <img src={blue} alt="" />
                  <div className="inner-img">
                  <img src={car} alt="" />
                  </div>
                </div>
                <h4>Set Destination</h4>
                <p>
                Book a ride with Quicklift: <br/>Select your pickup point, destination, and <br/>preferred car type, and get a driver at your doorstep.
                </p>
              </div>
              <div className="how-content">
                <div className="image-ctn">
                <img src={red} alt="" />  
                  <div className="inner-img">
                  <FaRegCompass className='how-icon red'/>
                  </div>
                </div>
                <h4>Explore the Ride</h4>
                <p>
                View your driver's profile, track your ride in <br/> real-time,and receive estimated arrival<br/>  times and updates with Quicklift's user-friendly interface.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="how-content ">
                
                <div className="image-ctn">
                <img src={yellow} alt="" />  
                  <div className="inner-img">
                  <FaLocationDot className='how-icon yellow'/>
                  </div>
                </div>
                <h4>Track Journey</h4>
                <p>
                Follow your journey's progress, receive live updates,<br/> and stay informed with Quicklift's GPS tracking, ensuring a safe and hassle-free ride
                </p>
              </div>
              <div className="how-content">
                  <div className="image-ctn">
                    <img src={darkBlue} alt="pay your" />  
                    <div className="inner-img">
                    <IoCard className='how-icon darkBlue'/>
                  </div>
                </div>
                <h4>Simple Payment</h4>
                <p>
                Quicklift offers convenient payment options: securely store cards,<br/> use mobile payments, or pay with cash, making transactions easy and stress-free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How