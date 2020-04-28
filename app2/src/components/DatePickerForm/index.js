import BaseForm from '../BaseForm';
import { DatePicker } from 'antd';

const COMPONENTTYPE = {
    date: DatePicker,
    month: DatePicker.MonthPicker,
    range: DatePicker.RangePicker,
    week: DatePicker.WeekPicker
}

class DatePickerForm extends BaseForm {
    getComponent() {
        const { type, config } = this.props;
        const TargetComponent = COMPONENTTYPE[type];

        return <TargetComponent {...config} />
    }

}

export default DatePickerForm;

DatePickerForm.propTypes = {
    type: PropTypes.oneOf(['date', 'month', 'range', 'week']),
    config: PropTypes.object
}

DatePickerForm.defaultProps = {
    type: 'date',
    config: {}
}