import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Menu from './components/menu/Menu';
import TableHeader from './components/tableHeader/TableHeader';
import DealingsHeader from './components/dealingsHeader/DealingsHeader';
import Dealings from './components/dealings/Dealings';
import Table from './components/table/Table';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <main className="content-wrapper"> 
            <Menu />
        <div className="options-wrapper">
            <TableHeader />
            <DealingsHeader />
            <Dealings />
            <Table />
        </div>
      </main>
    </div>
  );
}

export default App;
