import "./Footer.css";
import { CiSearch } from "react-icons/ci";

function Footer() {
  return (
    <div className="f-wrapper" id="f-wrapper">
      <div className="f-container">
        <div className="f-ctn">
          <h2 id="f-header">Quick Lift</h2>
          <p>
            Lorem Ipsum hddndn idtewu ioljl <br />
            jdjdip Lorem Ipsum hddndn idtewu <br />
            ioljl jdjdipLorem Ipsum hddndn <br />
            idtewu ioljl jdjdip
          </p>

          <div className="f-search">
            <input type="text" />
            <span><CiSearch /></span>
          </div>
        </div>
        <div className="f-ctn">
          <h3 className="f-head">Quick Lift</h3>
          <p className="address">
            Plot 1210, <br />
            Water corporation drive <br />
            Opposite landmark events centre <br />
            Oniru, <br />
            Victoria Island , Lagos.
          </p>
        </div>
        <div className="f-ctn">
          <h3 className="f-head">PARTNER WITH US</h3>
          <div className="list">
            <span>Sign up as a driver</span>
            <span>Fleets</span>
            <span>Franchise</span>
            <span>Influencers</span>
          </div>
        </div>
        <div className="f-ctn">
          <h3 className="f-head">COMPANY</h3>
          <div className="list">
            <span>About Us</span>
            <span>Contact</span>
            <span>Blog</span>
            <span>Brand Guidelines</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;