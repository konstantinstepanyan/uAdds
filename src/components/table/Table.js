import React, { Component } from 'react';
import './css/table.css';

export default class Table extends Component {

  render() {
    return(
        
        
    <section className="table">
        <div className="table__item sources">
            <h4 className="table__title">Источники</h4>
        </div>
                
        <div className="table__item clicks">
            <span className="table__p">Клики</span>
        </div>
                
        <div className="table__item shows">
            <span className="table__p">Показы</span>
        </div>
                
        <div className="table__item conversion-price">
            <span className="table__p">Стоимость <br/> конверсии</span>
        </div>
                
                
        <div className="table__item price">
            <span className="table__p">Стоимость</span>
        </div>
                
        <div className="table__item conversion">
            <span className="table__p">Конверсии</span>
        </div>
                
        <div className="table__item sales">
            <span className="table__p">Продажи</span>
        </div>
    </section>
        
        
    )
  }

}