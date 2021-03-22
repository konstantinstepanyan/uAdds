import React, {Component} from 'react';
import Post from '../post/Post';
import './css/dealings.css';

export default class Dealings extends Component{
    render() {
        return(
            
<section className="dealings">
            
    <div className="dealings__article dealings__article_unparsed">
        <h4 className="dealings__title">НЕРАЗОБРАННОЕ</h4>
        <span className="dealings__desc">13 заявок</span>

        <Post socialNetwork="Telegram" currentData="Сегодня 13:20" nickname="user1" comment="можно сделать заказ на..." linkHref="https://web.telegram.org/#/im"/>
        
        <Post socialNetwork="Instagram" currentData="Сегодня 23:05" nickname="user2" comment="к 10 часам сможете при..." linkHref="https://www.instagram.com/?hl=ru"/>
            
    </div>
            
    <div className="dealings__article dealings__article_wip">
        <h4 className="dealings__title">В работе</h4>
        <span className="dealings__desc">10 заявок</span>
            
        <Post socialNetwork="Instagram" currentData="Вчера 11:25" nickname="user3" comment="к 13 часам сможете при..." linkHref="https://www.instagram.com/?hl=ru"/>
            
    </div>
            
    <div className="dealings__article dealings__article_assembly">
        <h4 className="dealings__title">СБОРКА ЗАКАЗА</h4>
        <span className="dealings__desc">1 заявка</span>
        
        <Post socialNetwork="Telegram" currentData="Неделю назад" nickname="user4" comment="можно сделать заказ на..." linkHref="https://web.telegram.org/#/im"/>

    </div>
            
    <div className="dealings__article dealings__article_realized">
        <h4 className="dealings__title">УСПЕШНО РЕАЛИЗОВАНО</h4>
        <span className="dealings__desc">1 заявка</span>
            
        <Post socialNetwork="Telegram" currentData="Вчера 8:30" nickname="user5" comment="можно сделать заказ на..." linkHref="https://web.telegram.org/#/im"/>
            
        <Post socialNetwork="Instagram" currentData="Вчера 13:18" nickname="user6" comment="к 13 часам сможете при..." linkHref="https://www.instagram.com/?hl=ru"/>
            
        <Post socialNetwork="Instagram" currentData="Вчера 11:42" nickname="user7" comment="к 20 часам сможете при..." linkHref="https://www.instagram.com/?hl=ru"/>
            
    </div>
            
    </section>
            
        )
    }
}