import BaseForm from '../BaseForm';
import { Rate } from 'antd';

class RateForm extends BaseForm {
    getComponent() {
        const { config } = this.props;

        return <Rate {...config} />
    }
}

export default RateForm;

RateForm.propTypes = {
    config: PropTypes.object,
}

RateForm.defaultProps = {
    config: {}
}