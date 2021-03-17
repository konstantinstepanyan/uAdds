import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Table from './components/table/Table';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <main className="content-wrapper"> 
            <Menu />
        <div className="options-wrapper">
            <Header />
            <Table />
        </div>
      </main>
    </div>
  );
}

export default App;
