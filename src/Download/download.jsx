import "./download.css";
import phone2 from '../assets/images/iphone2.png' 
import appStore from '../assets/images/apple-store.png'
import playstore from '../assets/images/playstore.png'
// import 'animate.css';



function Download() {
  return (
    <div className="d-wrapper">
      <div className="d-container">
        <div className="left">
          <div className="img-container">
            <img className="phone2Image" src={phone2}  />
          </div>
        </div>
        <div className="right">
          <h2 className="d-whereHeader">Download the free mobile App</h2>
          <p className="d-wherePara">
           Get the QuickLift App from your favorite appstore <br/>and enjoy convenience at your fingertips.
             
          </p>
          <div className="d-where">
              <img src={playstore} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Download;
