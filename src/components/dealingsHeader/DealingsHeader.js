import React, { Component } from 'react';
import './css/dealingsHeader.css';
import arrowDown from './img/arrowDown.svg';
import magnifier from'./img/magnifier.svg';
import gear from './img/gear.svg';



export default class DealingsHeader extends Component {

    componentDidMount(){
         const filterBtns = document.querySelectorAll('.filter .btn');

    const beginFillColor = '#C5C5C5';
    const hoverFillColor = '#3A94D4';
    
    
    filterBtns.forEach((item, index) => {
        item.addEventListener('mouseenter', (e) => {
        btn_hover(e)
        });
        item.addEventListener('mouseleave', (e) => {
        btn_hover(e)
        });
        item.addEventListener('click', (e) => {
        btn_hover(e)
        });
    });
    


    
    
    function btn_hover(e){

try{
    
    console.log('e.currentTarget:');
    console.log(e.currentTarget);
    
        const btnClassName = e.currentTarget.classList.toString().replace('btn', '').trim();
        const btnPath = e.currentTarget.querySelector(`.${btnClassName}__path`);
        
        btnPath.style.transition = 'fill .18s linear';
        
        if(e.type=='mouseenter'){
            btnPath.setAttribute('fill', hoverFillColor);
        }
        if(e.type=='mouseleave'){
            btnPath.setAttribute('fill', beginFillColor);
        }
        if(e && e.type=='click' && btnClassName!='btn_hz'){
            const dealings = document.querySelector('.dealings_section');
            
            if(btnClassName=='btn_rows'){
                
            dealings.classList.add('dealings_rows');
                
                
            }
            if(btnClassName=='btn_columns'){
            
            dealings.classList.remove('dealings_rows');
                
            }
            
            console.log(dealings)
        }  
    
        
    
    
}
        catch{}
        

    }
    }
    
  render() {
    return(

        
<header className="dealings-header">

    <div className="dealings-header__item funnel-name ">
        <span className="funnel-name__title text_no-br">Название воронки
            <img className="funnel-name__img" src={arrowDown} />
        </span>
    </div>
        
    <div className="dealings-header__item btn-wrapper filter">
        <button className="btn btn_rows">
            <svg className="btn_rows__svg" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="btn_rows__path" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#C5C5C5"/>
            </svg>

        </button>
        <button className="btn btn_columns">
            <svg className="btn_columns__svg" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="btn_columns__path" d="M6 14.5H11V0.416626H6V14.5ZM0 14.5H5V0.416626H0V14.5ZM12 0.416626V14.5H17V0.416626H12Z" fill="#C5C5C5"/>
            </svg>
        </button>
        <button className="btn btn_hz">
            <svg className="btn_hz__svg" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="btn_hz__path" d="M16.5 2H13.5V0.5H12V2H6V0.5H4.5V2H1.5C1.1023 2.0004 0.720997 2.15856 0.439779 2.43978C0.15856 2.721 0.000397108 3.1023 0 3.5V18.5C0.000397108 18.8977 0.15856 19.279 0.439779 19.5602C0.720997 19.8414 1.1023 19.9996 1.5 20H16.5C16.8977 19.9996 17.279 19.8414 17.5602 19.5602C17.8414 19.279 17.9996 18.8977 18 18.5V3.5C17.9996 3.1023 17.8414 2.721 17.5602 2.43978C17.279 2.15856 16.8977 2.0004 16.5 2ZM1.5 3.5H4.5V5H6V3.5H12V5H13.5V3.5H16.5V6.5H1.5V3.5ZM1.5 8H5.25V12.5H1.5V8ZM11.25 18.5H6.75V14H11.25V18.5ZM11.25 12.5H6.75V8H11.25V12.5ZM12.75 18.5V14H16.5L16.5007 18.5H12.75Z" fill="#C5C5C5"/>
            </svg>

        </button>
    </div>
        
        
        <div className="sep sep_1"></div>

        <div className="dealings-header__item search-wrapper">
            <img className="search-wrapper__img" src={magnifier} />
            <input className="search-wrapper__input color_light-grey" type="text" placeholder="Поиск и фильтр" />
        </div>

        <div className="dealings-header__item dealings">
            <span className="dealings__count color_light-grey text_no-br">23 сделки:&ensp;</span>
            <span className="dealings__price text_no-br"> 19290 р.</span>
        </div>

        <div className="sep sep_2"></div>

        <div className="dealings-header__item btn-wrapper new-deal-wrapper">
            <button className="dealings-header__item btn btn_new-deal">+ Новая сделка</button>
        </div>

        <div className="dealings-header__item settings-wrapper">
            <button className="dealings-header__item btn btn_settings">
                <img src={gear} />
            </button>
        </div>
</header>
        
        
    )
  }

}