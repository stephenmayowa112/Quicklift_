import "./sign-up.css";
import bigImage from '../assets/images/bigimage.png'
import antoella from '../assets/images/antonella.png' 
import mabu from '../assets/images/mabu.jpg'
import swift from '../assets/images/shift.png'

function SignUp() {
  return (
    <div className="s-wrapper">
      <div className="s-container">
        <div className="s-header">
          <h2>Ride to make memories</h2>
          <span>Find trips that fits a flexible lifestyle</span>
        </div>
        <div className="s-ctn">
          <div className="s-left">
            <div className="ctn">
              <div className="design" />
                <h3>We offer fair fares for trips</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  <br />
                  elit. Ut gravida quis nisl ut semper. Quisque nibh
                </p>
            </div>
            <div className="ctn">
              <div className="design" />
                <h3>We offer fair fares for trips</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  <br />
                  elit. Ut gravida quis nisl ut semper. Quisque nibh
                </p>
            </div>
            <div className="ctn">
              <div className="design" />
                <h3>We offer fair fares for trips</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  <br />
                  elit. Ut gravida quis nisl ut semper. Quisque nibh
                </p>
            </div>
          </div>
          <left className="s-right">
            <div className="image-holder">
              <img src={bigImage} alt="" />
              <div className="circle antonella">
                <img src={antoella} alt="" />
                <span>Anotoella Messi</span>
              </div>
              <div className="circle mabu">
                <img src={mabu} alt="" />
                <span>Anotoella Messi</span>
              </div>
              <div className="circle swift">
                <img src={swift} alt="" />
                <span>Anotoella Messi</span>
              </div>
              <div></div>
              <div></div>
            </div>
          </left>
        </div>
        <span className="sign-btn">
          Sign Up to Drive
        </span>
      </div>
    </div>
  );
}

export default SignUp;