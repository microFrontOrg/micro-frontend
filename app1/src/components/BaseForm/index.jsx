import { Form, Input } from 'antd';

const FormItem = Form.Item;

class BaseForm extends React.Component {

    getFieldDecorator = () => {
        const { id, decorator, form, value, defaultValue } = this.props;
        if (!form) {
            throw Error('form object is required')
        }
        const { getFieldDecorator } = form;
        return getFieldDecorator(id, {
            initialValue: value === undefined ? defaultValue : value,
            ...decorator,
        })
    }

    getEditStatus = () => {
        const fieldDecorator = this.getFieldDecorator();
        const component = React.cloneElement(this.getComponent());
        return fieldDecorator(component);
    }

    getDisabledStatus = () => {
        const fieldDecorator = this.getFieldDecorator();
        const component = React.cloneElement(this.getComponent(), { disabled: true });
        return fieldDecorator(component);
    }
    getContent = () => {
        const { status = 'edit' } = this.props;

        switch (status) {
            case 'edit': return this.getEditStatus();
            case 'disabled': return this.getDisabledStatus();
            default: return null
        }
    }

    render() {
        const { formItem } = this.props;
        return (
            <FormItem {...formItem}>
                {this.getContent()}
            </FormItem>
        )
    }

}

BaseForm.propTypes = {
    id: PropTypes.string.isRequired, // 表单绑定的数据
    form: PropTypes.object, // 表单对象
    decorator: PropTypes.object,// 表单装饰器
    status: PropTypes.string, // 状态 
    value: PropTypes.any, // 表单值
    defaultValue: PropTypes.any, // 表单默认值
    formItem: PropTypes.object // FormItem组件属性
}

BaseForm.defaultProps = {
    id: '',
    form: undefined,
    decorator: {},
    status: 'edit',
    value: undefined,
    defaultValue: undefined,
    formItem: {}
}

export default BaseForm;