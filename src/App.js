import logo from './logo.svg';
import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route } from 'react-router-dom';

const records = harvardArt.records;
function App() {
  console.log(records,"galleries");
  return (
    <div className="App">
      
      <header className="App-header">

        <GalleryNavigation galleries={records} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Route path="/galleries/:galleryid"><GalleryView galleries={records}/></Route>
      </div>
    </div>
  );
}

export default App;
