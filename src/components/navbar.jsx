import sun from "../images/sun.png";
import mobilemenu from "../images/menumobile.png";


const Navbar = () => {
  return (
    <section className="navbar" id="navbar">
      <div className="nav-items">
        <p>Home</p>
        <p>About</p>
        <p>Gallery</p>
        <p>Contact</p>
        <img className="sunicon" alt="toggle night mode" src={sun}></img>
        <img className="mobilemenu" alt="mobile-menu" src={mobilemenu}></img>

      </div>
    </section>
  );
};

export default Navbar;
