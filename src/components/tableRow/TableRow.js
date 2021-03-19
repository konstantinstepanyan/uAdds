import React, { Component } from 'react';

export default class TableRow extends Component {

  constructor(props) {
      super(props);
  }
    
    
  componentDidMount(){
      const unwantedDivs = document.querySelectorAll('.unwanted');
      

      
      for(let i of unwantedDivs){

          //unwantedDIV = i
          console.log(i.childNodes.length);
          
          for (var z = 0; z < 7; z++) {
              i.before(i.firstChild);
          }
          
      }
  }
    
  render() {      
    return(
        
        <div className="unwanted">
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
        </div>
        
    )
  }

}
