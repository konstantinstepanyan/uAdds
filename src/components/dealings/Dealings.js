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

        <Post />
        <Post />
            
    </div>
            
    <div className="dealings__article dealings__article_wip">
        <h4 className="dealings__title">В работе</h4>
        <span className="dealings__desc">10 заявок</span>
            
        <Post />
    </div>
            
    <div className="dealings__article dealings__article_assembly">
        <h4 className="dealings__title">СБОРКА ЗАКАЗА</h4>
        <span className="dealings__desc">1 заявка</span>
        
        <Post />
    </div>
            
    <div className="dealings__article dealings__article_realized">
        <h4 className="dealings__title">УСПЕШНО РЕАЛИЗОВАНО</h4>
        <span className="dealings__desc">1 заявка</span>
            
        <Post />
    </div>
            
    </section>
            
        )
    }
}