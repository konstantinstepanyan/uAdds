import React, { Component } from 'react';
import './css/menu.css';

export default class Menu extends Component {

  constructor(props) {
        super(props);
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
            <span data-id="item_ads" className="menu__item">Объявления</span>
        </div>
    </div>
        
        
    )
  }

}