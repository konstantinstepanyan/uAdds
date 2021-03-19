import React, {Component} from 'react';
import './css/post.css';
import avatarImg from './img/avatar.svg';
import telegramLogo from './img/telegram_logo.svg';
import instagramLogo from './img/instagram_logo.svg';

export default class Post extends Component{
    
    
    render() {
        return(
            <div className="post dealings__item">
                <img className="post__user-avatar" src={avatarImg} />
                <span className="post__social-network-title color_light-grey">Telegram channel</span>
                <span className="post__current-data">Сегодня в 13:20</span>
                <span className="post__user-name color_blue">Telegram Nickname</span>
                <div className="post__comment"> 
                    <img className="post__user-avatar post__user-avatar_minify" src={avatarImg} />
                    <span className="post__comment-text">Можно сделать заказ на...</span>
                </div>
            
                <a className="post__share post__share_telegram" href="https://web.telegram.org/#/im">
                    <img className="post__img img_telegram" src={telegramLogo} />
                </a>
            </div>
        )
    }
}