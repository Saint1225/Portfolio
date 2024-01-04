import React, {Component} from 'react';
import axios from 'axios';

import classes from './Works.module.css';
import Work from '../../component/Work/Work';
import React_Myburger from '../../assets/image/React_Myburger.png';
import Vue_Piano from '../../assets/image/Vue_Piano.png';
import Bootstrap from '../../assets/image/Bootstrap.png';
import Weather_box from '../../assets/image/Weather_box.png';
import Shopping_Cart from '../../assets/image/Shopping_Cart.png';
import Dynamic_phone_size_1 from '../../assets/image/Dynamic_phone_size_1.png';
import Hahow_webpage_clone from '../../assets/image/Hahow_webpage_clone.png';

class Works extends Component{
    state = {
        works: {
            reactMyBurger: {
                title: 'React-MyBurger', 
                linkto: 'https://github.com/Saint1225/React-MyBurger',
                description: ''},
            bootstrap: {
                title: 'Bootstrap-web-page', 
                linkto: 'https://github.com/Saint1225/Bootstrap-web-page',
                description: ''},
            piano: {
                title: 'Vue.js-Piano',
                linkto: 'https://github.com/Saint1225/Vue.js-Piano',
                description: ''},
            weatherbox: {
                title: 'Weather-box',
                linkto: 'https://github.com/Saint1225/Weather-box',
                description: ''},
            shoppingcart: {
                title: 'Shopping-cart', 
                linkto: 'https://github.com/Saint1225/Shopping-cart',
                description: ''},
            phone: {
                title: 'Dynamic-phone-size',
                linkto: 'https://github.com/Saint1225/Dynamic-phone-size',
                description: ''},
            hahow: {
                title: 'Hahow-webpage-clone', 
                linkto: 'https://github.com/Saint1225/Hahow-webpage-clone',
                description: ''}
        },
        img: {
            reactMyBurger: React_Myburger,
            bootstrap: Bootstrap,
            piano: Vue_Piano,
            weatherbox: Weather_box,
            shoppingcart: Shopping_Cart,
            phone: Dynamic_phone_size_1,
            hahow: Hahow_webpage_clone
        }
    }

    componentDidMount () {
        let updatedWork = {...this.state.works};
        axios.get('https://portfolio-890b4.firebaseio.com/works.json')
        .then(response => {
            // console.log(response.data)
            // console.log(updatedWork)
            for (let work in updatedWork){
                updatedWork[work] = response.data[work]
            }
            this.setState({
                works: updatedWork
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render() {
        let works = [];
        for (let work in this.state.works) {
            works.push(<Work 
                title={this.state.works[work].title} 
                link={this.state.works[work].linkto} 
                img={this.state.img[work]}
                detail={this.state.works[work].description}
                key={work}></Work>)
        }

        return (
            <div className={classes.Works}>
                {works}
            </div>

        )
    }
}

export default Works;