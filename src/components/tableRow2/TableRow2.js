import React, { Component } from 'react';

export default class TableRow extends Component {

  constructor(props) {
        super(props);
  }

    
    
  render() {      
    return(
        
       <div className="unwanted"> 
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
        </div>
        
    )
  }

}
