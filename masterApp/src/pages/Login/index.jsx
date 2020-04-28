import { FieldForm } from '@/components';
import { Form, Button, Row, Col, Icon, Radio, Input } from 'antd';
import LoginLayout from '@/layouts/LoginLayout';
import './index.module.less';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 18
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.fields = [
            { type: 'input', id: 'username', className: 'input-form', value: '', prefix: <Icon type='user' />, placeholder: '请输入用户名' },
            { type: 'password', id: 'password', className: 'input-form', value: '', col: 24, prefix: <Icon type="lock" />, placeholder: '请输入密码' },
        ]
    }

    handleSubmit = () => {
        this.props.form.validateFieldsAndScroll(function (err, values) {
            if (err) { return; }
            console.log(values);
        })
    }

    render() {
        return (
            <LoginLayout>
                <Form className='login-wrap'>
                    <h2 className="login-title">后台管理系统</h2>
                    <div className="input-wrap-form">
                        {
                            this.fields.map(item => {
                                const { col, ...rest } = item;
                                return (
                                    <Col span={item.col} key={item.id}>
                                        <FieldForm {...rest} form={this.props.form} />
                                    </Col>
                                )
                            })
                        }
                        <Button type='primary' style={{ width: '100%' }} onClick={this.handleSubmit}>登录</Button>
                    </div>
                </Form>
            </LoginLayout>
        )

    }
}

export default Form.create()(Login);