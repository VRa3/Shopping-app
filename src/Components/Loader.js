import React from 'react';

import flower from "../static/fashion/flower-o.jpg";
import bag from "../static/fashion/bag-o.jpg";
import shoes from "../static/fashion/shoes-o.jpg";
import pad from "../static/cool_stuff/pad.jpg";
import cup from "../static/cool_stuff/cup.jpg";
import glitter from "../static/cool_stuff/glitter.jpg";
import jewelry from "../static/luxury/jewelry.jpg";
import brilliant from "../static/luxury/brilliant.jpg";
import perfum from "../static/luxury/perfum.jpg";
import contactBg from "../static/slider/art-finger.jpg";

class Loader extends React.Component {
    state = {
        loading: true,
        imagesLoaded: 0,
    };

    imagesArr = [
        flower, bag, shoes, pad, cup, glitter, jewelry, brilliant, perfum, contactBg
    ];

    counter = 0;

    loadChecker = (i) => {
        const images = this.imagesArr;

        this.counter++;

        if(i === (images.length -1)) {
            setTimeout(()=>{
                this.setState({loading: false})
            }, 1000)
        }
    };

    generateImages = () => {
        const images = this.imagesArr;

        return images.map((img, i) => {
            return(
                <img
                    src={img}
                    alt='test'
                    key={i}
                    onLoad={this.loadChecker(i)}
                />
            )
        })
    };

    render() {
        if(this.state.loading) {
            return(
                <div className='loader'>
                    LOADING IMAGES

                    {this.generateImages()}
                </div>
            )
        } else {
            return null
        }
    }
}

export default Loader;