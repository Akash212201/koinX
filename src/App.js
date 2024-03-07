import NavBar from './components/NavBar';
import Home from './components/Home';
import AlsoLike from './components/AlsoLike';
import './App.css'; 
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Home />
    
     <AlsoLike />
    </div>
  );
}

export default App;
