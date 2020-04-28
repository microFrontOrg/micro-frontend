import BaseForm from '../BaseForm';
import { Switch } from 'antd';

class SwitchForm extends BaseForm {
  getComponent() {
    const { config } = this.props;
    return <Switch {...config} />
  }
}

SwitchForm.propTypes = {
  config: PropTypes.object
}

SwitchForm.defaultProps = {
  config: {}
}

export default SwitchForm;