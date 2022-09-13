import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from './components/Shop/Shop';
import TopTitle from './components/TopTitle/TopTitle';

function App() {
  return (
    <div className="App">
      <TopTitle></TopTitle>
      <Shop></Shop>
    </div>
  );
}

export default App;
