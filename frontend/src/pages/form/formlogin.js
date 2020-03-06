import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, message } from 'antd';

const FormItem=Form.Item;
class FormLogin extends React.Component{
    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((error, value)=>{
            if (!error){
                message.success(`${userInfo.username} 恭喜登陆成功，密码是： ${userInfo.userpwd}`)
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card className="card-wrap" title="登陆表单水平显示">
                    <Form  layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登陆</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card className="card-wrap" title="登陆表单垂直显示">
                    <Form style={{width: 400}}>
                        <FormItem>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules:[
                                        {
                                            required: true,
                                            message: "用户名不能为空"
                                        },{
                                           min: 5,
                                           max: 20,
                                           message: "长度不在允许范围内,(5-20)"
                                        },{
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: "用户名只能是字母或者数字"
                                        }
                                    ]
                                    
                                })(
                                    <Input 
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户名"
                                    /> 
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userpwd', {
                                    initialValue: '',
                                    rules:[]
                                    
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                        placeholder="请输入用密码" 
                                        type="password"
                                    /> 
                                )
                            } 
                        </FormItem>
                        <FormItem>
                        {/* valuePropName: 'checked',这是设置checkbox为被选中的状态 */}
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules:[]
                                })(<Checkbox>
                                    记住密码
                                </Checkbox>)
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>


                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);