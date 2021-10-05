import Navbar from "./components/navbar";
import VerticalBar from "./components/verticalbar";
import Hero from "./components/hero"; 
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <VerticalBar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
