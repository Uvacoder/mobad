
import './App.css';
import { Component } from 'react';
import HomeContainer from './Containers/HomeContainer';
import Navbar from './Components/Navbar'

class App extends Component {
    render() {
  return (
    <div className="App">
    <Navbar />
    <HomeContainer/>
    <footer>© {new Date().toISOString().substring(0, 4)} Mobâd</footer>
    </div>
  );
}
}

export default App;
