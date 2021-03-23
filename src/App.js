import React, { Component } from 'react';
import logo from './logo.svg';
import arrow from './assets/img/arrow.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Menu from './components/menu/Menu';
import TableHeader from './components/tableHeader/TableHeader';
import DealingsHeader from './components/dealingsHeader/DealingsHeader';
import Dealings from './components/dealings/Dealings';
import Table from './components/table/Table';
import TableRow from './components/tableRow/TableRow.js';

export default class App extends Component {
    
    
  constructor(props){
      super(props);
      this.state = {
          rows: '',
          rowsCount: 2,
          activeMenuItem: 'item_sources',
          headerTitle: 'Источники'};
        
        this.checkTableTitle();
  }    
    
  componentDidUpdate(prevProps, prevState){
       if(prevState.activeMenuItem !== this.state.activeMenuItem){

       }
        
        if(this.state.headerTitle != prevState.headerTitle ){
        this.checkTableTitle();

            
        }
      
        if(
           this.state.rowsCount != prevState.rowsCount
          ){
            console.log('compDidUpdate')
            this.countRows();
            setTimeout(() => {this.pasteTableArticlesTwins()}, 1)
        }
   }
    
  componentDidMount() {
      //this.setState is async func
        this.checkTableTitle();
        this.countRows();
        setTimeout(() => {this.pasteTableArticlesTwins()}, 1);
      
        console.log('App componentDidMount')
        //с таблицей всё делать из этого компонентац3й
        
      this.setState({
          menuItems: document.querySelectorAll('.menu__item')
      }, () => {
          this.toggleMenuItem(this.state.activeMenuItem);
          
          for (let i of this.state.menuItems){
              i.addEventListener('click', () => {
                  this.toggleMenuItem(i.getAttribute('data-id'))
              });
   
          }
      });
      
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
            console.log(this.state.rowsCount)
            //this.pasteTableArticlesTwins();
        });  
    }
  }
    
  checkTableTitle(){


        switch(this.state.headerTitle){
        case ('Сделки'): 
                this.setState({
                    rows: {
                        row_1: false,
                        row_2: false,
                        row_3: false
                    }
                }, () => {this.countRows()}
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
               salesCount="s" circleColor="red" />),
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
                    row_2: (<TableRow serviceTitle="Ключевое слово 2" serviceTitleDesc="555" clicksCount="777" 
                showsCount="2505" conversionPriceCount="2550 ₽" priceCount="17520" conversionCount="100"
               salesCount="10" circleColor="red" />),
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
                    row_2: (<TableRow serviceTitle="Объявление 2" serviceTitleDesc="51a" clicksCount="25411" 
                showsCount="8541" conversionPriceCount="6541 ₽" priceCount="2020" conversionCount="05"
               salesCount="10" circleColor="red" />),
                    row_3: (<TableRow serviceTitle="Объявление 3" serviceTitleDesc="1358" clicksCount="4561" 
                showsCount="854" conversionPriceCount="8141 ₽" priceCount="8541" conversionCount=""
               salesCount="145" circleColor="blue" />)
                }
            }, () => {this.countRows()});

          break;
              
          
              
      }
      
    }
    
  pasteTableArticlesTwins(){
      //alert('pasteTableArticlesTwins')
      
      
      const table = document.querySelector('.table'),
            tableArticles = document.querySelectorAll('.table__article:not(.twin)');
      const gridAreas = ["'sources auto'", "'clicks auto'", "'shows auto'", "'conversion-price auto'", "'price auto'", "'conversion auto'", "'sales auto'"];
      
      let newGridAreas = gridAreas;
      let currentZ;
      
      for(let z = 1; z <= this.state.rowsCount; z++){

          
          const arrayOfTwins = gridAreas.map((item, index) => 
        {     
              if(!item.includes('twin')){
                  return item.replace(/\s+/, `_twin_${z-1} `)
              }
         
         });
         
          try{
              arrayOfTwins.forEach((item, index, arr)=>{
                  
                  
              if(!arr[index].includes('0') ){
                  //console.log(document.querySelector(`.${itm}`))
                  newGridAreas.push(`${item}`);
                  
              }
             
          });

          }
        catch{}

          
          if(this.state.rowsCount === 1){
              newGridAreas = ["'sources auto'", "'clicks auto'", "'shows auto'", "'conversion-price auto'", "'price auto'", "'conversion auto'", "'sales auto'"];
            
          }
          
          const stringNewGridAreas = newGridAreas.join().replace(/[.,%]/g, '');
      
          console.log('newGridAreas string:');
          console.log(stringNewGridAreas);

          if(window.innerWidth <= 450){
               try{table.style.gridTemplateAreas = `${stringNewGridAreas}`;}
          catch{}
          }
              if(window.innerWidth >= 450){
                  try{table.style.gridTemplateAreas = `${gridAreas.join()}`;}
          catch{}
              }
          
           currentZ = z;
          
      }
      
      const existedClones = document.querySelectorAll('.twin');
      
      existedClones.forEach((item, index) => {
          item.remove();
      });
      
      let countOfClones=0;
      let countToPaste;
      
            newGridAreas.forEach((item, index) => {
                if(item.toString().includes('twin')){
 
                    countOfClones++;
                }
            });
      

      
     
      
     
      
      countToPaste = countOfClones / tableArticles.length;

     
       let tech=0;
  
      
       for(let i = 0; i<countToPaste; i++){
           
           tech++;
           
           console.log(`tech: ${tech}`)
           
           tableArticles.forEach((item, index) => {
            
          
            
            

          
            if(currentZ!=1){
                const dataId = item.getAttribute('data-id');
                const tableArticleClone = item.cloneNode(true);
                
                tableArticleClone.setAttribute('data-id', `${dataId}_twin_${currentZ-tech}`);
                tableArticleClone.classList.add('twin', `${dataId}_twin_${currentZ-tech}`);
                 
//                console.log( tableArticleClone)
                
//                tableArticleClone.style.gridArea = 'none';
//                tableArticleClone.style.gridArea = `${dataId}_twin_${currentZ-tech}`;
                
                 table.prepend(tableArticleClone);   
               
            }   

          });
           
            
       }
       
       const tableArticlesClones = document.querySelectorAll('.twin');
      
       tableArticlesClones.forEach((item, index) => {
           const dataId = item.getAttribute('data-id');
           
           console.log('clone:');
           console.log(item);
//           item.style.gridArea = dataId; потом пофиксить
       });
      
     
}
        
  toggleMenuItem(selectedMenuItem){
      
      for (let i of this.state.menuItems){
          i.classList.remove('item_active');

          if(i.getAttribute('data-id') == selectedMenuItem){
              
              this.setState({
                  activeMenuItem: selectedMenuItem,
                  headerTitle: i.textContent
              }, );
              i.classList.add('item_active');
          }
      }
  }
    
  render(){
      let header, 
          dealingsHeader,
          dealings,
          table;
      if(this.state.headerTitle == 'Сделки'){
          header = '';
          dealingsHeader = <DealingsHeader />
          dealings = <Dealings />;
          table = '';
      }
      else{
          header = <TableHeader headerTitle={this.state.headerTitle}/>
          dealingsHeader = '';
          dealings = '';
          table = <Table tableTitle={this.state.headerTitle} 
          activeMenuItem={this.state.activeMenuItem} 
          row_1 = {this.state.rows.row_1}
          row_2 = {this.state.rows.row_2}
          row_3 = {this.state.rows.row_3}
          />;
      }
      
      
          return (
            <div className="App">
              <Nav />

              <main className="content-wrapper"> 
                <div className="menu-toggler">
                    <img className="menu-toggler__img" src={arrow}/>
                </div>
                
                <Menu />
                
                <div className="options-wrapper">
              
                    {header}
                    {dealingsHeader}
                    {dealings}
                    
                    {table}
                </div>
              </main>
            </div>
        );
  }
}
