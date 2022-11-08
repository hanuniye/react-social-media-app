import React from "react";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Nabvar";
import "./App.css";
import Footer from "./components/Footer";
import { CreatePost } from "./pages/createpost/create-post";

interface reg {
  title:string,
  description:string;
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}
export default App;