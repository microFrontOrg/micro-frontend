import BaseForm from '../BaseForm';
import { Slider } from 'antd';

class SliderForm extends BaseForm {
  getComponent() {
    const { config } = this.props;

    return <Slider {...config} />
  }
}

export default SliderForm;

SliderForm.propTypes = {
  config: PropTypes.object.isRequired
}

SliderForm.defaultProps = {
  config: {}
}