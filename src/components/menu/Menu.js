import React, { Component } from 'react';
import './css/menu.css';

export default class Menu extends Component {

   constructor(props) {
    super(props);
    this.state = {activeItem: 'item_sources'};
  }

    
  componentDidMount() {
      //this.setState is async func
      this.setState({
          menuItems: document.querySelectorAll('.menu__item')
      }, () => {
          this.toggleMenuItem(this.state.activeItem);
          
          for (let i of this.state.menuItems){
              i.addEventListener('click', () => {
                  this.toggleMenuItem(i.getAttribute('data-id'))
              });
          }
      });
      
  }
    
    
  toggleMenuItem(selectedItem){
      
      for (let i of this.state.menuItems){
          i.classList.remove('item_active');
          if(i.getAttribute('data-id') == selectedItem){
              this.setState({
                  activeItem: selectedItem
              });
              i.classList.add('item_active');
          }
      }
  }

    
  render() {      
    return(
        
        
    <div className="menu-wrapper">
        <div className="menu">
            <span data-id="item_dealings" className="menu__item">Сделки</span>
            <span data-id="item_sources" className="menu__item">Источники</span>
            <span data-id="item_companies" className="menu__item">Компании</span>
            <span data-id="item_groups" className="menu__item">Группы</span>
            <span data-id="item_keywords" className="menu__item">Ключевые слова</span>
            <span data-id="item_ads" className="menu__item">Объявления </span>
        </div>
    </div>
        
        
    )
  }

}