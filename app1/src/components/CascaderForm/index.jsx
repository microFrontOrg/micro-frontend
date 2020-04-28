import { Cascader } from 'antd';
import BaseForm from '../BaseForm';

class CascaderForm extends BaseForm {
  // 处理options
  handleOptions(options) {
    const { valueField = 'value', labelField = 'label', childrenField = 'children' } = this.props;
    if (!options || !Array.isArray(options) || options.length === 0) {
      return [];
    }
    options.forEach(option => {
      option.value = option[valueField];
      option.label = option[labelField];
      option.children = this.handleOptions(option[childrenField]);
    })

    return options;
  }

  getComponent() {
    const { config } = this.props;
    config.options = this.handleOptions(config.options);

    return <Cascader {...config} />
  }
}

export default CascaderForm;

CascaderForm.propTypes = {
  config: PropTypes.object.isRequired,
  labelField: PropTypes.string,
  valueField: PropTypes.string,
  childrenField: PropTypes.string
}

CascaderForm.defaultProps = {
  config: {},
  labelField: 'label',
  valueField: 'value',
  childrenField: 'children'
}