import React, { Component } from 'react';
import './css/table.css';
import arrowDown from './img/arrow.svg';
import TableRow from '../tableRow/TableRow.js';

export default class Table extends Component {

  constructor(props) {
    super(props);
    
     
  }
    
    
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
        
        
        <TableRow serviceTitle="Yandex" serviceTitleDesc="Yandex letai-266319-enc0" clicksCount="852" 
        showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
        salesCount="10" />
        
        
        
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
        
        
        
        <TableRow serviceTitle="GoogleAds" serviceTitleDesc="146-362-7099" clicksCount="900" 
        showsCount="18000" conversionPriceCount="931 ₽" priceCount="186200" conversionCount="200"
        salesCount="40" />
        
        
        
        
    </section>
        
        
    )
  }

}