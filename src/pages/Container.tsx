import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {routes} from '../routes'

class Container extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    renderRoutes = () => {
        let routesArray: any = []
        routes.forEach((item) => {
            routesArray.push(<Route exact key={item.path} path={item.path} component={item.component}/>)
        })
        return routesArray
    }

    render() {
        return <div className='content'>
            {this.renderRoutes()}
        </div>
    }
}

const MyComponent = function (props) {
    return <div>{props.children}</div>
}

const mapStateToProps = function (state) {
    return {
        headSelect: state.headSelect,
        sideSelect: state.sideSelect
    }
}

export default connect(mapStateToProps, null)(Container)
