import BaseForm from '../BaseForm';
import { Checkbox } from 'antd';

class CheckboxForm extends BaseForm {
  constructor(props) {
    super(props);
    this.state = {
      indeterminate: false
    }
  }
  
  getOptionCheckbox() {
    const { valueField = 'value', labelField = 'label', config: { options } } = this.props;
    return (
      options.map((option, index) => {
        let value = option[valueField], label = option[labelField];
        return <Checkbox {...option} key={value || index} value={value}>{label}</Checkbox>
      })
    )
  }

  getComponent() {
    const { type = 'checkbox', totalCheckboxConfig = {}, totalLabel = '全部', value, defaultValue, config: { options, ...rest } } = this.props;
    // 考虑两种情况 一种是存在全部复选框的  一种是不存在全部复选框的，需要通过type字段表示
    if (type === 'totalCheckbox') {
      return (
        <div>
          <Checkbox {...totalCheckboxConfig}>
            {totalLabel}
          </Checkbox>
          <Checkbox.Group {...rest} value={value} >
            {this.getOptionCheckbox()}
          </Checkbox.Group>
        </div>
      )
    } else if (type === 'checkbox') {
      return (
        <Checkbox.Group {...rest}>
          {this.getOptionCheckbox()}
        </Checkbox.Group>
      )
    }

  }
}

CheckboxForm.propTypes = {
  type: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    optionConfig: PropTypes.object
  })),
  valueField: PropTypes.string,
  labelField: PropTypes.string,
  totalCheckboxConfig: PropTypes.object,
  totalLabel: PropTypes.string
}

CheckboxForm.defaultProps = {
  type: 'checkbox', // totalCheckbox包含全部  checkbox不包含全部
  options: [],
  valueField: 'value',
  labelField: 'label',
  totalCheckboxConfig: {},
  totalLabel: '全部'
}

export default CheckboxForm;