import { Input, InputNumber, Form } from 'antd';
import BaseForm from '../BaseForm';

const COMPONENTTYPE = {
    input: Input,
    password: Input.Password,
    textarea: Input.TextArea,
    number: InputNumber,
    search: Input.Search,
}

class InputForm extends BaseForm {

    getComponent = () => {
        const { type = 'input', config } = this.props;

        const TargetComponent = COMPONENTTYPE[type];
        return <TargetComponent {...config} />
    }

}

InputForm.propTypes = {
    type: PropTypes.oneOf(['input', 'password', 'textarea', 'number', 'search']),
}

InputForm.defaultProps = {
    type: 'input',
}


export default InputForm;