import React, { Component } from 'react';
import './css/menu.css';
import menuToggler from './js/menuToggler.js';

export default class Menu extends Component {

  constructor(props) {
        super(props);
  }
    
  render() {      
    return(
        
        
    <div className="menu-wrapper">
        <div className="menu">
            <span data-id="item_dealings" className="menu__item item_dealings">Сделки</span>
            <span data-id="item_sources" className="menu__item item_sources">Источники</span>
            <span data-id="item_companies" className="menu__item item_companies">Компании</span>
            <span data-id="item_groups" className="menu__item item_groups">Группы</span>
            <span data-id="item_keywords" className="menu__item item_keywords">Ключевые слова</span>
            <span data-id="item_ads" className="menu__item item_ads">Объявления</span>
        </div>
    </div>
        
        
    )
  }

}