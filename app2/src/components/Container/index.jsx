class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;
    return (
      <ContainerWrap>
        {children}
      </ContainerWrap>
    )
  }
}

export default Container;

const ContainerWrap = styled.div`
  padding: 20px;
  background-color: #fff;
`