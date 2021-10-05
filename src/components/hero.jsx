import astronaut from "../images/back2.png";
import cubes from "../images/back1.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="herotext">
        <h2>Adventure Together</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
          potenti faucibus nec. rhoncus, vulputate vitae. Dictum rutrum ut cras
          nullam porta id dolor arcu, quis.
        </p>
      </div>
      <div className="heroimage">
        <img className="astronaut" src={astronaut} alt="astronaut" />
        <img className="cubes" src={cubes} alt="cubes" />
      </div>
    </section>
  );
};

export default Hero;
