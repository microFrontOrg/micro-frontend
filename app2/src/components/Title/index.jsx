import { Icon } from 'antd';

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <DivWrap style={this.props.style || {}}>
        <IconStyle type="down-square"></IconStyle>
        <SpanStyle>{this.props.text}</SpanStyle>
      </DivWrap>
    )
  }
}

export default Title;

const DivWrap = styled.div`
  margin-left: 6px;
  margin-bottom: 10px;
`

const IconStyle = styled(Icon)`
  color: #007bff;
  margin-right: 6px;
`

const SpanStyle = styled.span`
  font-weight: 600;
  font-size: 14px;
`