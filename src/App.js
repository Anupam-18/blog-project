import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import Hero from "./components/hero";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/contact";
import Post from "./components/post";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/post/:postid" component={Post} />
      </div>
    </Router>
  );
}

export default App;
