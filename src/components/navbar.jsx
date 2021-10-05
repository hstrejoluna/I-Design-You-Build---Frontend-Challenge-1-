import sun from "../images/sun.png";

const Navbar = () => {
  return (
    <section className="navbar" id="navbar">
      <div className="nav-items">
        <p>Home</p>
        <p>About</p>
        <p>Gallery</p>
        <p>Contact</p>
        <img className="sunicon" alt="toggle night mode" src={sun}></img>
      </div>
    </section>
  );
};

export default Navbar;
