import React from 'react';
import { Card, Form, Icon, Input, 
    Button, Checkbox, message, Radio, Switch, 
    Select, DatePicker, TimePicker, Upload, InputNumber} from 'antd';
import moment from 'moment';
import "./form.less";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const TextArea = Input.TextArea;
class FormRegister extends React.Component{
    state={}
    getBase64=(img, callback) =>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        message.success(`${userInfo.username} 恭喜登陆成功，密码是： ${userInfo.userpwd}`)
        console.log(JSON.stringify(userInfo));
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              userImg:imageUrl,
              loading: false
            }),
          );
        }
      };
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            //设置左边的label
            labelCol:{
                // 当页面<576px，xs独占一行，可以想象成用户名和输入框独占一行
                xs: { span: 24 },
                //当页面>576px, 用户名只占4/24
                sm: { span: 4 },
            },
            //设置右边的输入框
            wrapperCol:{
                xs: { span: 24 },
                sm: { span: 12 },
            }
        }
        //设置偏移
        const offsetLayout={
            wrapperCol:{
                xs: { span: 24 },
                sm: { span: 12, offset: 4 },
            }

        }
        return(
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal" {...formItemLayout}>
                        <FormItem label="用户名">
                        {
                            getFieldDecorator('username', {
                                initialValue: '',
                                rules:[
                                    {
                                        required: true,
                                        message: "用户名不能为空"
                                    } 
                                ]
                                
                            })(
                                <Input 
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                /> 
                            )
                        }
                        </FormItem>

                        <FormItem label="密码">
                        {
                            getFieldDecorator('userpwd', {
                                initialValue: '',  
                            })(
                                <Input 
                                    type="password"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                /> 
                            )
                        }
                        </FormItem>

                        <FormItem label="性别">
                        {
                            getFieldDecorator('sex', { 
                                initialValue: '1',  
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio> 
                                    <Radio value="2">女</Radio> 
                                </RadioGroup>
                            )
                        }
                        </FormItem>
                        <FormItem label="年龄">
                        {
                            getFieldDecorator('age', { 
                                initialValue: '18',  
                            })(
                               <InputNumber
                                    min={1}
                                    max={100}
                               />
                            )
                        }
                        </FormItem>

                        <FormItem label="单选下拉框">
                        {
                            getFieldDecorator('state', { 
                                initialValue: '2',  
                            })(
                                <Select defaultValue="1">
                                    <Option value="1">React</Option>
                                    <Option value="2">Angular</Option>
                                    <Option value="3">Vue</Option>
                                    <Option value="4">AntD</Option>
                                </Select>
                            )
                        }
                        </FormItem>
                        <FormItem label="多选下拉框">
                        {
                            // 注意： 可以指定initialValue为数组，因为这是一个多选框
                            getFieldDecorator('state', { 
                                initialValue: ['2', '3']  
                            })(
                                <Select defaultValue="1" mode="multiple">
                                    <Option value="1">跑步</Option>
                                    <Option value="2">游泳</Option>
                                    <Option value="3">打球</Option>
                                    <Option value="4">摔跤</Option>
                                    <Option value="6">登山</Option>
                                    <Option value="6">攀岩</Option>
                                    <Option value="7">冲浪</Option>
                                    <Option value="8">潜水</Option>
                                </Select>
                            )
                        }
                        </FormItem>

                        <FormItem label="是否已婚">
                        {
                            // 注意： 可以指定initialValue为数组，因为这是一个多选框
                            getFieldDecorator('isMarried', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Switch></Switch>
                            )
                        }
                        </FormItem>

                        <FormItem label="生日">
                        {
                            // 注意： 在进行初始化的时候，必须是moment对象，而且moment要提前安装好“yarn add moment”
                            getFieldDecorator('birthday', {
                                initialValue: moment('2019-8-8 12:00:45')
                            })(
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                />
                            )
                        }
                        </FormItem>
                        <FormItem label="联系地址">
                        {
                            // 注意： 在进行初始化的时候，必须是moment对象，而且moment要提前安装好“yarn add moment”
                            getFieldDecorator('address', {
                                initialValue: "中国"
                            })(
                                <TextArea
                                    autoSize={{minRows:4, maxRows:10}}
                                />
                            )
                        }
                        </FormItem>

                        <FormItem label="早起时间">
                        {
                            getFieldDecorator('time')(
                               <TimePicker
                                    showTime
                                    format='HH:mm:ss'
                               />
                            )
                        }
                        </FormItem>
                        <FormItem label="头像">
                        {
                            getFieldDecorator('userImg')(
                                <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    onChange={this.handleChange}
                                >
                                    {this.state.userImg ? <img src={this.state.userImg} alt="avatar" style={{ width: '100%' }} /> : <Icon type="plus"></Icon>}
                                </Upload>
                            )
                        }
                        </FormItem>

                        <FormItem {...offsetLayout}>
                        {
                            getFieldDecorator('userImg')(
                                <Checkbox>我已经仔细阅读协议</Checkbox>
                            )
                        }
                        </FormItem>


                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                        

                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister);