import React, { Component } from 'react';
import './css/table.css';

export default class Table extends Component {

  render() {
    return(
        
        
    <section className="table">
        <div className="table__item sources border-top_grey">
            <div className="content-container">
                <h4 className="table__title">Источники</h4>
            </div>
        </div>
                
        <div className="table__item clicks border-top_grey">
            <span className="table__p">Клики</span>
        </div>
                
        <div className="table__item shows border-top_grey">
            <span className="table__p">Показы</span>
        </div>
                
        <div className="table__item conversion-price border-top_grey">
            <span className="table__p">Стоимость <br/> конверсии</span>
        </div>
                
                
        <div className="table__item price border-top_grey">
            <span className="table__p">Стоимость</span>
        </div>
                
        <div className="table__item conversion border-top_grey">
            <span className="table__p">Конверсии</span>
        </div>
                
        <div className="table__item sales border-top_grey">
            <span className="table__p">Продажи</span>
        </div>
        
        
        
        
        
        <div className="table__item service-title yandex border-top_grey">
            <div className="content-container">
                <span className="table__p color_blue">Yandex</span>
                <span className="table__desc color_grey">Yandex letai-266319-enc0</span>
            </div>
        </div>
        
        <div className="table__item clicks-count border-top_grey">
            <span className="table__p">852</span>
        </div>
        
        <div className="table__item shows-count border-top_grey">
            <span className="table__p">8520</span>
        </div>
        
        <div className="table__item conversion-price-count border-top_grey">
            <span className="table__p">1025 ₽</span>
        </div>
        
        <div className="table__item price-count border-top_grey">
            <span className="table__p">102500</span>
        </div>
        
        <div className="table__item conversion-count border-top_grey">
            <span className="table__p">100</span>
        </div>
        
        <div className="table__item sales-count border-top_grey">
            <span className="table__p">10</span>
        </div>
        
        
        
        
        <div className="table__item service-title google-ads">
            <div className="content-container">
                <span className="table__p color_blue">Google Ads</span>
                <span className="table__desc color_grey">146-362-7099</span>
            </div>
        </div>
        
        <div className="table__item clicks-count">
            <span className="table__p">900</span>
        </div>
        
        <div className="table__item shows-count">
            <span className="table__p">18000</span>
        </div>
        
        <div className="table__item conversion-price-count">
            <span className="table__p">931 ₽</span>
        </div>
        
        <div className="table__item price-count">
            <span className="table__p">186200</span>
        </div>
        
        <div className="table__item conversion-count">
            <span className="table__p">200</span>
        </div>
        
        <div className="table__item sales-count">
            <span className="table__p">40</span>
        </div>
        
        
    </section>
        
        
    )
  }

}