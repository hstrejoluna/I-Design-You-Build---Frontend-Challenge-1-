import footerimg from "../images/footerimg.png";
import arrow from "../images/arrowfooter.png";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="mainarticle">
        <img src={footerimg}></img>
        <h3>Exploration</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
          potenti faucibus nec, rhoncus, vulputate
        </p>
        <img src={arrow}></img>
      </div>
      <div className="secondarticle">
        <h3>Footprint</h3>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
    </section>
  );
};

export default Footer;
