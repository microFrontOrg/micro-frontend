/*
 * @Description: 带Col的FieldForm组件
 * @Author: 郭军伟
 * @Date: 2020-04-03 17:19:25
 * @lastEditTime: Do not edit
 */
import { Col } from 'antd';
import FieldForm from '../FieldForm';

class FieldFormWithCol extends Component {

  render() {
    const { col, gutter, ...rest } = this.props;
    return (
      <Col span={col} gutter={gutter}>
        <FieldForm {...rest} />
      </Col>
    );
  }
}

FieldFormWithCol.defaultProps = {
  col: 6,
  gutter: 0
}

FieldFormWithCol.propTypes = {
  col: PropTypes.number,
  gutter: PropTypes.number
}

export default FieldFormWithCol;