import Header from './components/Header/Header';
import Home from './components/Body/Home/Home';
import Movie from './components/Body/Movie/Movie';
import Tv from './components/Body/Tv/Tv';
import Footer from './components/Footer/Footer';
import DisplaySearch from './components/Body/Search/DisplaySearch';

import 'swiper/swiper.min.css';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import DisplayTypeLabel from './components/Body/Type/DisplayTypeLabel';
import Login from './components/Body/Login/Login';
import Detail from './components/Body/Detail/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path={'/search/:keyword'}>
          <DisplaySearch />
        </Route>
        <Route exact path={'/movies'}>
          <Movie />
        </Route>
        <Route exact path={'/tvs'}>
          <Tv />
        </Route>
        <Route path={'/movies/:typeLabel'}>
          <DisplayTypeLabel
            catalog={'movie'}
          />
        </Route>
        <Route path={'/tvs/:typeLabel'}>
          <DisplayTypeLabel
            catalog={'tv'}
          />
        </Route>
        <Route path={'/movie/:id'}>
          <Detail
            catalog={'movie'}
          />
        </Route>
        <Route path={'/tv/:id'}>
          <Detail
            catalog={'tv'}
          />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
