
import {lazy, Suspense} from "react"
import { Routes, Route,Link} from "react-router-dom";


function App() {
  const Home = lazy(()=> import("./components/home"));
  const About =lazy(() => import("./components/about"));
  const Contact = lazy(() => import("./components/contact"));

  
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
