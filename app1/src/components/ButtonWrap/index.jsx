import { Fragment } from "react";

class ButtonWrap extends Component {

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        {
          React.Children.map(children, (child, index) => {
            if (index === 0) {
              return child;
            } else {
              return React.cloneElement(child, {
                style: { marginLeft: 15 }
              })
            }

          })
        }
      </Fragment>
    )
  }
}

export default ButtonWrap;