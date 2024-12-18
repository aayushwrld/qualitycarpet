import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
// import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="container">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
