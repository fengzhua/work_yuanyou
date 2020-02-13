import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import {sideItems} from '../constant'
import {connect} from 'react-redux'
import {sideClick} from '../redux/action'

class Side extends React.Component<any, any> {
    constructor(props){
        super(props)
    }

    onSideItemClick = (id) => {
        this.props.sideClick(id)
    }

    render() {
        let {headSelect, sideSelect} = this.props
        let sideActive = 'side-content-text-active'
        let sideInactive = 'side-content-text'

        return (
            <div className='side'>
                <div className='side-content'>
                    {
                        sideItems.map(item =>
                            (<div className={item.id === sideSelect ?  sideActive: sideInactive}
                                  key={item.id}
                                  onClick={this.onSideItemClick.bind(this, item.id)}>

                                <Link to={`/${headSelect}${item.id}`}>{item.name}</Link>
                            </div>)
                        )
                    }
                </div>

            </div>
        );
    }

}

const mapStateToProps = function (state) {
    return {
        headSelect: state.headSelect,
        sideSelect: state.sideSelect
    }
}


export default connect(mapStateToProps, {sideClick})(Side)
