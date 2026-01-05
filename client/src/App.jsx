import Navbar from "./components/navbar";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import FloatingActions from "./components/floatingActions";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Home />
      <Footer/>
      <FloatingActions/>
    </>
  );
}

export default App;
