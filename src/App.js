
import './App.css';
import { Component } from 'react';

import Navbar from './Components/Navbar'
import Header from './Components/Header'
import HomeContainer from './Containers/HomeContainer';
import MusicContainer from './Containers/MusicContainer';
import EventsContainer from './Containers/EventsContainer';
import AboutContainer from './Containers/AboutContainer';
import ContactContainer from './Containers/ContactContainer';

import Grid from 'animated-grid-lines';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
                {/* <Grid /> */}
                <Switch>
                    <Route path="/" component={HomeContainer} exact />
                    <Route path="/about" component={AboutContainer} />
                    <Route path="/music" component={MusicContainer} />
                    <Route path="/events" component={EventsContainer} />
                    <Route path="/contact" component={ContactContainer} />
                </Switch>
                <footer>© {new Date().toISOString().substring(0, 4)} Mobâd</footer>
            </div>
        );
    }
}

export default App;
