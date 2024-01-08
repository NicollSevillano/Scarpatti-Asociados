import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Main/Carousel';
import Main from './Components/Main/Main';
import Cards from './Components/Main/Cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Main />
      <Cards />
    </div>
  );
}

export default App;
