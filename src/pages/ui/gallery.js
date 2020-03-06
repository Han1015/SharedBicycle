import React from 'react';
import { Card, Row, Col, Modal} from 'antd';
import './ui.less';

export default class Gallery extends React.Component{
    

    state={visible: false}
    handleOpenGallery=(imgSrc)=>{
        this.setState({
            visible: true,
            currentImg: imgSrc
        })
    }
    render(){
        const imgs=[
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','25.png']
        ]
        // 这种写法可以省略大多数的括号。好处： 增加代码的可读性，减少冗余
        const imgList= imgs.map(list=>list.map((item)=>
            <Card
                style={{marginBottom: 10}}
                key={item}
                cover={<img 
                        src={'/gallery/'+item} 
                        alt="example"
                        onClick={()=>{this.handleOpenGallery('/gallery/'+item)}}
                    />}
            >
                <Card.Meta
                    title="React Admin"
                    description="I love Imooc"
                />
            </Card>
        ))

        //下面这种写法是我自己常用的没有省略括号的写法
        // const imgList = imgs.map((list)=>{
        //     return (list.map((item)=>{
        //         return(
        //         <Card
        //         key={item}
        //         cover={<img src={'/gallery/'+item} alt="example"/>}
        //     >
        //         <Card.Meta
        //             title="React Admin"
        //             description="I love Imooc"
        //         />
        //     </Card>
        //         )
        //     }))
        // })
        
        return(
            <div className="card-wrap">
                {/* 这个gutter是设置每一列的间隙的 */}
                <Row gutter={10}>
                    <Col md={5}>{imgList[0]}</Col>
                    <Col md={5}>{imgList[1]}</Col>
                    <Col md={5}>{imgList[2]}</Col>
                    <Col md={5}>{imgList[3]}</Col>
                    <Col md={4}>{imgList[4]}</Col>
                </Row>

                <Modal
                    width={300}
                    height={500}
                    title="图片画廊"
                    visible={this.state.visible}
                    // onOk={this.handleOk}
                    onCancel={()=>{this.setState({visible: false})}}
                    footer={null}
                >
                    <img src={this.state.currentImg} alt="show click img" style={{width:'100%'}}/>
                    
                </Modal>
            </div>
        )
    }
}