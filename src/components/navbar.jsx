import sun from "../images/sun.png"

const Navbar = () => {
  return (
    <section className="navbar" id="navbar">
      <nav className="nav" id="nav">
          <img className="sunicon" src={sun}></img>
          <div className="navlinks">
              <p>Home</p>
              <p>About</p>
              <p>Gallery</p>
              <p>Contact</p>
          </div>
      </nav>
    </section>
  );
};

export default Navbar;
