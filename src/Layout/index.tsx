import React from 'react';
import Side from './Side';
import Header from './Header';
import './index.scss';
import { BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import Container from "../pages/Container";


class Layout extends React.Component<any, any>{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <Router >
                    <div className='container'>
                        <Header/>
                        <div className='bottom'>
                            <Side/>
                            <Container/>
                        </div>
                    </div>
                </Router>
            </>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        headSelect: state.headSelect,
        sideSelect: state.sideSelect
    }
}

export default connect(mapStateToProps, null)(Layout)
