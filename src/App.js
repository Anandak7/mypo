import logo from './logo.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark .sticky-top ">
  <div className="container-fluid">
    <Link className="navbar-brand px-2" to="/"><img className="fltr" src={logo} width="50" height="50" alt="logo"/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
            <li className="nav-item m-2 px-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
            </li>
            <li className="nav-item m-2 px-4">
                <Link className="nav-link " to="/About">
                  About
                </Link>
            </li>
            <li className="nav-item m-2 px-4">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
            </li>
            
        </ul>
    </div>
  </div>
</nav>
  </>
  );
}

export default App;
