import { Radio } from 'antd';
import BaseForm from '../BaseForm';

class RadioForm extends BaseForm {

  getComponent = () => {
    const { valueField = 'value', labelField = 'label', config: { options, ...rest } } = this.props;

    return (
      <Radio.Group {...rest}>
        {
          options.map((option, index) => {
            let value = option[valueField], label = option[labelField];
            return <Radio {...option} value={value} key={value || index}>{label}</Radio>
          })
        }
      </Radio.Group>
    )
  }

}

RadioForm.propTypes = {
  config: PropTypes.object,
  valueField: PropTypes.string,
  labelField: PropTypes.string,
}

RadioForm.defaultProps = {
  config: {},
  valueField: 'value',
  labelField: 'label',
}

export default RadioForm;