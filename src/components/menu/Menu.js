import React, { Component } from 'react';
import './css/menu.css';

export default class Menu extends Component {

  render() {
    return(
        
        
    <div className="menu-wrapper">
        <div className="menu">
            <span className="menu__item">Сделки</span>
            <span className="menu__item">Источники</span>
            <span className="menu__item">Кампании</span>
            <span className="menu__item">Группы</span>
            <span className="menu__item">Ключевые слова</span>
            <span className="menu__item">Объявления </span>
        </div>
    </div>
        
        
    )
  }

}