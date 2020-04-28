import { Select } from 'antd';
import BaseForm from '../BaseForm';

const Option = Select.Option;

class SelectForm extends BaseForm {

    getComponent() {
        const { valueField = 'value', labelField = 'label', config: { options, ...rest } } = this.props;

        return (
            <Select {...rest}>
                {
                    options.map((option, index) => {
                        let value = option[valueField], label = option[labelField];
                        return <Option  {...option} key={value || index} value={value}>{label}</Option>
                    })
                }
            </Select>
        )
    }
}

SelectForm.propTypes = {
    config: PropTypes.object,
    valueField: PropTypes.string,
    labelField: PropTypes.string,
}

SelectForm.defaultProps = {
    config: {},
    valueField: 'value',
    labelField: 'label',
}

export default SelectForm;