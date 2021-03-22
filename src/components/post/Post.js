import React, {Component} from 'react';
import './css/post.css';
import avatarImg from './img/avatar.svg';
import telegramLogo from './img/telegram_logo.svg';
import instagramLogo from './img/instagram_logo.svg';

export default class Post extends Component{
    
  constructor(props) {
      super(props); 
      this.state = {logo: ''};
            
  }
    
    componentDidMount(){
        let {socialNetwork} = this.props;
        
        switch(socialNetwork){
            case('Telegram'):
                this.setState({logo: telegramLogo})
            break
            case('Instagram'):
                this.setState({logo: instagramLogo})
            break
        }
    }

    
    render() {
        let {socialNetwork, currentData, nickname,
            comment, linkHref} = this.props;
        
       
        
        
        
        return(
            <div className="post dealings__item">
                <img className="post__user-avatar" src={avatarImg} />
                <span className="post__social-network-title color_light-grey">{socialNetwork} channel</span>
                <span className="post__current-data">{currentData}</span>
                <span className="post__user-name color_blue">{socialNetwork} {nickname}</span>
                <div className="post__comment"> 
                    <img className="post__user-avatar post__user-avatar_minify" src={avatarImg} />
                    <span className="post__comment-text">{comment}</span>
                </div>
            
                <a className="post__share post__share_telegram" href={linkHref}>
                    <img className="post__img" src={this.state.logo} />
                </a>
            </div>
        )
    }
}