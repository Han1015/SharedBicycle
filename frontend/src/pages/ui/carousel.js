import React from 'react';
import { Card, Carousel} from 'antd';
import './ui.less';

export default class NewCarousel extends React.Component{
    render(){
        return(
            <div>
                <Card title="文字背景轮播" className="card-wrap">
                    <Carousel autoplay={true} effect={'fade'}>
                        <div><h3>Ant Motion Banner - React</h3></div>
                        <div><h3>Ant Motion Banner - Vue</h3></div>
                        <div><h3>Ant Motion Banner - Angular</h3></div>
                        <div><h3>Ant Motion Banner - Antd</h3></div>
                    </Carousel>
                </Card>

                <Card title="图片背景轮播" className="card-wrap" className="slider-wrap">
                    <Carousel autoplay={true} effect={'fade'} autoplay>
                        <div><img src="/carousel-img/carousel-1.jpg" alt="show"></img></div>
                        <div><img src="/carousel-img/carousel-2.jpg" alt="show"></img></div>
                        <div><img src="/carousel-img/carousel-3.jpg" alt="show"></img></div>
                  </Carousel>
                </Card>
            </div>
        )
    }
}