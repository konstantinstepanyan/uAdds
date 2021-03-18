import React, { Component } from 'react';
import './css/dealingsHeader.css';
import arrowDown from './img/arrowDown.svg';
import linesHoriz from './img/lines-horiz.svg';
import linesVert from './img/lines-vert.svg';
import linesX from './img/lines-x.svg';
import magnifier from'./img/magnifier.svg';
import gear from './img/gear.svg';

export default class DealingsHeader extends Component {

  render() {
    return(

        
<header className="dealings-header">
    
    <div className="dealings-header__item funnel-name ">
        <span className="funnel-name__title text_no-br">Название воронки
            <img className="funnel-name__img" src={arrowDown} />
        </span>
    </div>
        
    <div className="dealings-header__item btn-wrapper filter">
        <button className="btn btn_colums">
            <img src={linesHoriz} />
        </button>
        <button className="btn btn_lines">
            <img src={linesVert} />
        </button>
        <button className="btn btn_hz">
            <img src={linesX} />
        </button>
    </div>
        
        
        <div className="sep sep_1"></div>

        <div className="dealings-header__item search-wrapper">
            <img className="search-wrapper__img" src={magnifier} />
            <input className="search-wrapper__input color_light-grey" type="text" placeholder="Поиск и фильтр" />
        </div>

        <div className="dealings-header__item dealings">
            <span className="dealings__count color_light-grey text_no-br">23 сделки:&ensp;</span>
            <span className="dealings__price text_no-br"> 19290 р.</span>
        </div>

        <div className="sep sep_2"></div>

        <div className="dealings-header__item btn-wrapper new-deal-wrapper">
            <button className="dealings-header__item btn btn_new-deal">+ Новая сделка</button>
        </div>

        <div className="dealings-header__item settings-wrapper">
            <button className="dealings-header__item btn btn_settings">
                <img src={gear} />
            </button>
        </div>
</header>
        
        
    )
  }

}