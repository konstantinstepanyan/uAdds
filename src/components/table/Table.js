import React, { Component } from 'react';
import './css/table.css';
import arrowDown from './img/arrow.svg';
import TableRow from '../tableRow/TableRow.js';

export default class Table extends Component {

  constructor(props) {
    super(props);
    
      this.state = {
          rows: '',
          rowsCount: 0
      }
        this.checkTableTitle();
  }
    
  
    
  checkTableTitle(){


        switch(this.props.tableTitle){
        case ('Сделки'): 
                this.setState({
                    rows: {
                        row_1: false,
                        row_2: false,
                        row_3: false
                    }
                },
                )                
          break;
                
        case ('Источники'): 
                this.setState({
                    rows: {
                        row_1: (<TableRow serviceTitle="Yandex" serviceTitleDesc="Yandex letai-266319-enc0" clicksCount="852" 
                    showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
                    salesCount="10" circleColor="#00B355"/>),
                        row_2: ( <TableRow serviceTitle="GoogleAds" serviceTitleDesc="146-362-7099" clicksCount="900" 
                    showsCount="18000" conversionPriceCount="931 ₽" priceCount="186200" conversionCount="200"
                    salesCount="40" circleColor="#f00" />),
                        row_3: false
                    
                    }
                }, () => {this.countRows()})                
          break;
                
                
          case ('Компании'):
              
//            tablerow_1 = <TableRow serviceTitle="Аренда-Поиск-Сочи" serviceTitleDesc="123" clicksCount="852" 
//                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
//                salesCount="10" circleColor="#00B355"/>;
            this.setState({
                rows: {
                    row_1: (<TableRow serviceTitle="Аренда-Поиск-Сочи" serviceTitleDesc="123" clicksCount="852" 
                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
               salesCount="10" circleColor="#00B355" />),
                    row_2: false,
                    row_3: false
                }
            }, () => {this.countRows()});

          break;
                
         case ('Группы'):
              
//            tablerow_1 = <TableRow serviceTitle="Аренда-Поиск-Сочи" serviceTitleDesc="123" clicksCount="852" 
//                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
//                salesCount="10" circleColor="#00B355"/>;
            this.setState({
                rows: {
                    row_1: (<TableRow serviceTitle="Группа 1" serviceTitleDesc="123" clicksCount="852" 
                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
               salesCount="10" circleColor="#00B355" />),
                    row_2: (<TableRow serviceTitle="Группа 2" serviceTitleDesc="23" clicksCount="14" 
                showsCount="55" conversionPriceCount="3" priceCount="d" conversionCount="e"
               salesCount="" circleColor="red" />),
                    row_3: (<TableRow serviceTitle="Группа 3" serviceTitleDesc="5" clicksCount="5" 
                showsCount="123" conversionPriceCount="40" priceCount="5" conversionCount="2"
               salesCount="1" circleColor="blue" />)
                      }
            }, () => {this.countRows()});

          break;
                
         case ('Ключевые слова'):
              
//            tablerow_1 = <TableRow serviceTitle="Аренда-Поиск-Сочи" serviceTitleDesc="123" clicksCount="852" 
//                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
//                salesCount="10" circleColor="#00B355"/>;
            this.setState({
                rows: {
                    row_1: (<TableRow serviceTitle="Ключевое слово 1" serviceTitleDesc="123" clicksCount="852" 
                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
               salesCount="10" circleColor="#00B355" />),
                    row_2: (<TableRow serviceTitle="Ключевое слово 2" serviceTitleDesc="" clicksCount="" 
                showsCount="" conversionPriceCount="" priceCount="" conversionCount=""
               salesCount="" circleColor="red" />),
                    row_3: (<TableRow serviceTitle="Ключевое слово 3" serviceTitleDesc="123" clicksCount="456" 
                showsCount="789" conversionPriceCount="22" priceCount="11" conversionCount="0"
               salesCount="55" circleColor="blue" />)
                }
            }, () => {this.countRows()});

          break;
                
         case ('Объявления'):
              
//            tablerow_1 = <TableRow serviceTitle="Аренда-Поиск-Сочи" serviceTitleDesc="123" clicksCount="852" 
//                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
//                salesCount="10" circleColor="#00B355"/>;
            this.setState({
                rows: {
                    row_1: (<TableRow serviceTitle="Объявление 1" serviceTitleDesc="123" clicksCount="852" 
                showsCount="8520" conversionPriceCount="1025 ₽" priceCount="102500" conversionCount="100"
               salesCount="10" circleColor="#00B355" />),
                    row_2: (<TableRow serviceTitle="Объявление 2" serviceTitleDesc="" clicksCount="" 
                showsCount="" conversionPriceCount="" priceCount="" conversionCount=""
               salesCount="" circleColor="red" />),
                    row_3: (<TableRow serviceTitle="Объявление 3" serviceTitleDesc="" clicksCount="" 
                showsCount="" conversionPriceCount="" priceCount="" conversionCount=""
               salesCount="" circleColor="blue" />)
                }
            }, () => {this.countRows()});

          break;
              
          
              
      }
      
    }
    
  componentDidMount(){
      this.checkTableTitle();
      
  }
    
  componentDidUpdate(prevProps, prevState){      
        if(this.props != prevProps ){
            //this.removeAllTableCells();
            
        this.checkTableTitle();
        }
      
        if(this.state.rows !== prevState.rows){
            this.countRows();
            
            
        }
    }
    
  paste(){
      alert('afterSetState rowsCount:'+this.state.rowsCount)
  }
    
  countRows(){
        //counter;
      var counter = 0;
      

    for (var key in this.state.rows) {
        
        if(this.state.rows[key] != false){
                counter++;
        }
        
        this.setState({
                rowsCount: counter
            }, () => {
            this.pasteTableArticlesTwins();
        });  
    }
  }
    
  pasteTableArticlesTwins(){
      
 
      
      const table = document.querySelector('.table'),
            tableArticles = document.querySelectorAll('.table__article');
      
      //const gridAreas = window.getComputedStyle(table).gridTemplateAreas;
      const gridAreas = ['sources auto', 'clicks auto', 'shows auto', 'conversion-price auto', 'price auto', 'conversion auto', 'sales auto'];
      

     
      let newGridAreas;
      
      for(let z = 1; z <= this.state.rowsCount; z++){
          //z = rowsCount
          
            
          
          const arr = gridAreas.map((i) => 
         { 
              return i.replace(/\s+/, `_twin_${z-1} `)
         
         });
          
          newGridAreas = gridAreas.concat(arr);
          
          
          
          if(this.state.rowsCount === 1){
              alert(`if this.state.rowsCount===1 `)
              newGridAreas = '';
              newGridAreas = ['sources auto', 'clicks auto', 'shows auto', 'conversion-price auto', 'price auto', 'conversion auto', 'sales auto'];
          }
          
          console.log(newGridAreas)

//
//        
//
//          tableArticles.forEach((item, index) => {
//          const articleClone = item.cloneNode(true);
//          
//          const dataId = articleClone.getAttribute('data-id');
//          
//          
//          articleClone.setAttribute('data-id', `${dataId}_twin_${z}`);
//          articleClone.classList.add(`${dataId}_twin_${z}`);
//          
//         table.prepend(articleClone);
//              
//      });
          
          
      }
      
      
  }
    
    
  render() {
      const {tableTitle} = this.props;
      
      
      
      

    return(
        
        
    <section className="table">
        
        <div data-id="sources" className="table__article table__item sources border-top_grey">
            <div className="content-container">
                <svg className="table__circle" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <circle cx="9.5" cy="9.65918" r="9.5" fill="#C4C4C4"/>
                </svg>
                <h4 className="table__title">{tableTitle}
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
        
        
        {this.state.rows.row_1}
        
        
        
        {this.state.rows.row_2}
        
        
        
        {this.state.rows.row_3}
        
        
        
        
    </section>
        
        
    )
  }

}