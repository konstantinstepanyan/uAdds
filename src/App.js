import React, { Component } from 'react';
import logo from './logo.svg';
import arrow from './assets/img/arrow.svg';
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
      this.state = {activeMenuItem: 'item_sources', headerTitle: 'Источники'};
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
                  activeMenuItem: selectedMenuItem,
                  headerTitle: i.textContent
              }, );
              i.classList.add('item_active');
          }
      }
  }
    
  render(){
      let header, 
          dealingsHeader,
          dealings,
          table;
      if(this.state.headerTitle == 'Сделки'){
          header = '';
          dealingsHeader = <DealingsHeader />
          dealings = <Dealings />;
          table = '';
      }
      else{
          header = <TableHeader headerTitle={this.state.headerTitle}/>
          dealingsHeader = '';
          dealings = '';
          table = <Table tableTitle={this.state.headerTitle} activeMenuItem={this.state.activeMenuItem} />;
      }
      
      
          return (
            <div className="App">
              <Nav />

              <main className="content-wrapper"> 
                <div className="menu-toggler">
                    <img className="menu-toggler__img" src={arrow}/>
                </div>
                
                <Menu />
                
                <div className="options-wrapper">
              
                    {header}
                    {dealingsHeader}
                    {dealings}
                    
                    {table}
                </div>
              </main>
            </div>
        );
  }
}
