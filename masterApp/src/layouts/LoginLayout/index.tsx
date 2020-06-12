import './index.module.less'
import React from 'react';

class LoginLayout extends React.Component {

    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        )
    }
}

export default LoginLayout;