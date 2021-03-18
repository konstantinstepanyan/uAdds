import React, { Component } from 'react';
import './css/table.css';
import arrowDown from './img/arrow.svg';

export default class Table extends Component {

  render() {
    return(
        
        
    <section className="table">
        
        <div data-id="sources" className="table__article table__item sources border-top_grey">
            <div className="content-container">
                <svg className="table__circle" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <circle cx="9.5" cy="9.65918" r="9.5" fill="#C4C4C4"/>
                </svg>
                <h4 className="table__title">Источники
                    <img className="table__img img_arrow" src={arrowDown}/>
                </h4>
        
        
            </div>
        </div>
                
        <div data-id="clicks" className="table__article table__item clicks border-top_grey">
            <span className="table__p">Клики</span>
        </div>
                
        <div data-id="shows" className="table__article table__item shows border-top_grey">
            <span className="table__p">Показы</span>
        </div>
                
        <div data-id="conversion-price" className="table__article table__item conversion-price border-top_grey">
            <span className="table__p">Стоимость <br/> конверсии</span>
        </div>
                
                
        <div data-id="price" className="table__article table__item price border-top_grey">
            <span className="table__p">Стоимость</span>
        </div>
                
        <div data-id="conversion" className="table__article table__item conversion border-top_grey">
            <span className="table__p">Конверсии</span>
        </div>
                
        <div data-id="sales" className="table__article table__item sales border-top_grey">
            <span className="table__p">Продажи</span>
        </div>
        
        
        
        
        
        <div className="table__item service-title yandex border-top_grey">
            <div className="content-container">
                <svg className="table__circle" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <circle cx="9.5" cy="9.57959" r="9.5" fill="#00B355"/>
                </svg>
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
        
        
        
        <div data-id="sources_twin" className="table__article table__item table__item_twin sources_twin sources_twin_1 border-top_grey">
            <div className="content-container">
                <svg className="table__circle" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <circle cx="9.5" cy="9.65918" r="9.5" fill="#C4C4C4"/>
                </svg>
                <h4 className="table__title">Источники</h4>
            </div>
        </div>
                
        <div data-id="clicks_twin" className="table__article table__item table__item_twin clicks_twin clicks_twin_1 border-top_grey">
            <span className="table__p">Клики</span>
        </div>
                
        <div data-id="shows_twin" className="table__article table__item table__item_twin shows_twin shows_twin_1 border-top_grey">
            <span className="table__p">Показы</span>
        </div>
        <div data-id="conversion-price_twin" className="table__article table__item table__item_twin conversion-price_twin  conversion-price_twin_1 border-top_grey">
            <span className="table__p">Стоимость <br/> конверсии</span>
        </div>
                
                
        <div data-id="price_twin" className="table__article table__item table__item_twin price_twin price_twin_1 border-top_grey">
            <span className="table__p">Стоимость</span>
        </div>
                
        <div data-id="conversion_twin" className="table__article table__item table__item_twin conversion_twin conversion_twin_1 border-top_grey">
            <span className="table__p">Конверсии</span>
        </div>
                
        <div data-id="sales_twin" className="table__article table__item table__item_twin sales_twin_1 border-top_grey">
            <span className="table__p">Продажи</span>
        </div>
        
        
        
        
        <div className="table__item service-title google-ads">
            <div className="content-container">
                <svg className="table__circle" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <circle cx="9.5" cy="9.57959" r="9.5" fill="#C72323"/>
                </svg>
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