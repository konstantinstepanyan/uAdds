import React, { Component } from 'react';
import './css/header.css';
import downloadSVG from './img/download.svg';
import rectSVG from './img/rect.svg';

export default class Header extends Component {

  render() {
    return(

        
    <header className="header">
                <h4 className="title header__title">Источники</h4>
                <div className="header__btn-wrapper">
                <button className="btn btn_download">
                    <img className="btn__img" src={downloadSVG} />
                    <span className="btn_text text_grey">Скачать</span>
                </button>
                <button className="btn btn_columns">
                <div className="btn-columns__img-wrapper">
                    <img className="btn__img" src={rectSVG} />
                    <img className="btn__img" src={rectSVG} />
                    <img className="btn__img" src={rectSVG} />
                </div>
                <span className="btn_text text_grey">Столбцы</span>
            </button>
        </div>

    </header>
        
        
    )
  }

}