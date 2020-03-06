import React from 'react';
import { Card, Button, notification} from 'antd';
import './ui.less';

export default class Notice extends React.Component{
    
    openNotification=(type, direction)=>{
        if (direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: '找到工作了',
            description: '好好学习，就能找到工作'
        }) 
    }

    render(){
        return(
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>error</Button>
                </Card>

                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success', 'topLeft')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info', 'topRight')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning', 'bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error', 'bottomRight')}>error</Button>
                </Card>
            </div>
        )
    }
}