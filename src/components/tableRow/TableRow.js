import React, { Component } from 'react';

export default class TableRow extends Component {

  constructor(props) {
      super(props);
      
      this.state = {tableTitle: this.props.tableTitle}
      
      
  }

    
  render() {  
      
     const {circleColor,
            serviceTitle, serviceTitleDesc, 
            clicksCount, showsCount, 
            conversionPriceCount, priceCount, 
            conversionCount, salesCount} = this.props;
      
    return(
        <>
            <div className='table__item table__cell service-title border-top_grey'>
                    <div className="content-container">
                        <svg className="table__circle" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                            <circle cx="9.5" cy="9.57959" r="9.5" fill={circleColor}/>
                        </svg>
                        <span className="table__p color_blue">{serviceTitle} </span>
                        <span className="table__desc color_grey">{serviceTitleDesc} </span>
                    </div>
                </div>

                <div className="table__item table__cell clicks-count border-top_grey">
                    <span className="table__p">{clicksCount}</span>
                </div>

                <div className="table__item table__cell shows-count border-top_grey">
                    <span className="table__p">{showsCount}</span>
                </div>

                <div className="table__item table__cell conversion-price-count border-top_grey">
                    <span className="table__p">{conversionPriceCount}</span>
                </div>

                <div className="table__item table__cell price-count border-top_grey">
                    <span className="table__p">{priceCount}</span>
                </div>

                <div className="table__item table__cell conversion-count border-top_grey">
                    <span className="table__p">{conversionCount}</span>
                </div>

                <div className="table__item table__cell sales-count border-top_grey">
                    <span className="table__p">{salesCount}</span>
                </div>
        </>
        
    )
  }

}
