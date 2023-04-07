import logo from './logo.svg';
import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route, Switch, Redirect } from 'react-router-dom';

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
      <Switch>
      <Route path="/galleries/:galleryid">
          <GalleryView galleries={records}/>
      </Route>
      <Route exact path="/">
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don't Touch. Please select a Galler in the nav bar</p>
      </Route>
      <Route path="/error">
      <h2>Page Not Found</h2>
      </Route>
      <Redirect to="/error"/>
      </Switch>
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default App;
