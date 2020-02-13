import React from 'react'
import './index.scss'
import logo from '../assets/logo.png'
import {headerItems} from '../constant'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {headClick} from '../redux/action'

class Header extends React.Component<any,any> {
    constructor(props){
        super(props)
    }
    onHeadItemClick = (id) => {
        this.props.headClick(id)

    }

    // componentDidMount(): void {
    //     console.log(this.link)
    // }

    link
    render() {
        let {sideSelect,headSelect} = this.props
        let headActive = 'header-center-text-active'
        let headInactive = 'header-center-text'
        return (
            <div className='header'>
                <div className='header-left'>
                    <img src={logo} className='img'/>
                    <div className='header-text'>
                        原油存储体系奇点智脑系统
                    </div>
                </div>
                <div className='header-center'>
                    {
                        headerItems.map(item => {
                            return <div className={item.id === headSelect ? headActive: headInactive}
                                        key={item.id}
                                        onClick={this.onHeadItemClick.bind(this, item.id)}>

                                <Link to={`/${item.id}${sideSelect}`}>{item.name}</Link>
                                    </div>
                        })
                    }
                </div>
                <div className='header-right'>
                </div>
            </div>
        )
    }

}

const mapStateToProps = function (state) {
    return {
        headSelect: state.headSelect,
        sideSelect: state.sideSelect
    }
}

export default connect(mapStateToProps, {headClick})(Header);
