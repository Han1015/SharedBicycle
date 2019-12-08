import React from 'react';
import { Card, Button, Tabs, message, Icon} from 'antd';
import './ui.less';

const { TabPane } = Tabs;
export default class NewTabs extends React.Component{
   
    state={}
    newTabIndex = 0
    handleCallback=(key)=>{
        message.info("Hi, 您选择了页签" + key)
    }
    UNSAFE_componentWillMount(){
        const panes = [
            {
                title: "Tab 1",
                content: "Tab 1",
                key:"1"
            },
            {
                title: "Tab 2",
                content: "Tab 2",
                key:"2"
            },
            {
                title: "Tab 3",
                content: "Tab 3",
                key:"3"
            },
        ]
        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }
    handleOnChange=(activeKey)=>{
        this.setState({
            activeKey
        })
        message.info("Hi, 您选择了页签" + activeKey)
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      }
    render(){
        return(
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="2" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">欢迎学习React课程</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>欢迎学习React课程</TabPane>
                        <TabPane tab="Tab 3" key="3">React课程非常好 </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图页签" className="card-wrap">
                    <Tabs defaultActiveKey="2" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="apple"></Icon>Tab 1</span>} key="1">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="edit"></Icon>Tab 2</span>} key="2">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="delete"></Icon>Tab 3</span>} key="3">React课程非常好 </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图页签" className="card-wrap">
                    <Tabs 
                        onEdit={this.onEdit}
                        activeKey={this.state.activeKey}
                        onChange={this.handleOnChange}
                        // defaultActiveKey="2" 
                        type="editable-card">
                        {
                             this.state.panes.map((panel)=>{
                                return(
                                    <TabPane 
                                        tab={panel.title}
                                        key={panel.key}
                                   />
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}