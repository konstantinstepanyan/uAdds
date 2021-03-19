import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Menu from './components/menu/Menu';
import TableHeader from './components/tableHeader/TableHeader';
import DealingsHeader from './components/dealingsHeader/DealingsHeader';
import Dealings from './components/dealings/Dealings';
import Table from './components/table/Table';

export default class App extends Component {
    
    
    constructor(props){
      super(props);
      this.state = {activeMenuItem: 'item_sources'};
  }    
    
    componentDidMount() {
      //this.setState is async func
      this.setState({
          menuItems: document.querySelectorAll('.menu__item')
      }, () => {
          this.toggleMenuItem(this.state.activeMenuItem);
          
          for (let i of this.state.menuItems){
              i.addEventListener('click', () => {
                  this.toggleMenuItem(i.getAttribute('data-id'))
              });
          }
      });
      
  }
    
    
    toggleMenuItem(selectedMenuItem){
      
      for (let i of this.state.menuItems){
          i.classList.remove('item_active');
          if(i.getAttribute('data-id') == selectedMenuItem){
              this.setState({
                  activeMenuItem: selectedMenuItem
              });
              i.classList.add('item_active');
          }
      }
  }
    
  render(){
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
}
