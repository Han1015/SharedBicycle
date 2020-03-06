import React from 'react';
import { Card, Table, Modal} from 'antd';

export default class BasicTable extends React.Component{
    state={}
    UNSAFE_componentWillMount(){
        const dataSource=[
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday:'2019-12-10',
                address:'澳大利亚',
                time:'09:00'

            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday:'2019-12-10',
                address:'澳大利亚',
                time:'09:00'

            },
            {
                id: '2',
                userName: 'Lili ',
                sex: '1',
                state: '1',
                interest: '1',
                birthday:'2019-12-10',
                address:'澳大利亚',
                time:'09:00'

            }
        ]
        this.setState({
            dataSource
        })
    }
    onRowClick(record, index){
        let selectKey = [index]
        Modal.info({
            title: "信息",
            content: `用户名: ${record.userName}`
        })
        this.setState({
            selectRowKeys: selectKey,
            selectItem: record
        })
    }
    render(){
        // console.log(this.state.dataSource)
        const columns =[
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
        ]
        // 循环的设置key
        columns.map((item, index)=>{
            item.key=index
        })
        const { selectRowKeys} =this.state;
        const rowSelection={
            type: 'radio',
            selectRowKeys
        }
        return(
            <div>
                <Card title="基础表格"> 
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{margin:"10px 0"}}> 
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title="Mock-单选" style={{margin:"10px 0"}}> 
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                              onClick: (record, index)=>{this.onRowClick(record, index)}
                            };
                          }}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}