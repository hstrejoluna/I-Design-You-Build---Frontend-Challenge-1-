import footerimg from "../images/footerimg.png";
import arrow from "../images/arrowfooter.png";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <img id="mainarticleimg" src={footerimg}></img>
      <h3 id="mainarticleh3">Exploration</h3>
      <p id="mainarticlep">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
        potenti faucibus nec, rhoncus, vulputate
      </p>
      <p id="mainarticlepmobile">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      <img id="mainarticlearrow" src={arrow}></img>
      <h3 id="secondarticleh3">Footprint</h3>
      <p id="secondarticlep">Lorem ipsum dolor sit amet, consectetur </p>
    </section>
  );
};

export default Footer;
