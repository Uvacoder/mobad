
import './App.css';
import { Component } from 'react';
import HomeContainer from './Containers/HomeContainer';
import AboutContainer from './Containers/AboutContainer';
import Navbar from './Components/Navbar'
import Grid from 'animated-grid-lines';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Grid />
                <Switch>
                <HomeContainer />
                </Switch>
                <footer>© {new Date().toISOString().substring(0, 4)} Mobâd</footer>
            </div>
        );
    }
}

export default App;
