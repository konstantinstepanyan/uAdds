import React, { Component } from 'react';
import './css/nav.css';

export default class Nav extends Component {

  render() {
    return(
      <nav className="nav">
            <span className="logo">uMark.it - uAdds</span>
            <div className="data-range-wrapper">
            <span className="data-range">Диапазон дат </span>
            <span className="data">
                 2.03.2021 — 3.03.2021
        
                <svg className="data__img" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 7L12.9952 0.25H0.00480938L6.5 7Z" fill="white"/>
                </svg>

            </span>
        </div>
      </nav>
    )
  }

}