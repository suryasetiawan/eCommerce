import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import * as AppActions from '../action';
import * as redux from 'redux';
import { connect } from 'react-redux';
import ListProduct from './ListProduct'

class ListPage extends Component {

    componentDidMount() {
        this.props.actions.loadData();
    }

    render() {
        const data = this.props.data;
        const { onSelected } = this.props.actions;
        let showProduct = data.map((item, index) => {
            return (<ListProduct key={index} data={item} onSelected={onSelected} />)
        })

        return (
            <div className="container">
                <NavLink className="btn btn-primary" to='/AddForm' style={{ marginTop: "50px" }}><i className="fa fa-arrow-right"></i> Add Ads</NavLink>

                <div className="card-header bg-info text-white" style={{ marginBottom: "50px", marginTop: "20px" }}>
                    <h2 ><center> <strong>LELANG HANDPHONE MURAH</strong></center>  </h2>
                </div>

                {showProduct}

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><u className="page-link">Previous</u></li>
                        <li className="page-item"><u className="page-link">1</u></li>
                        <li className="page-item"><u className="page-link">2</u></li>
                        <li className="page-item"><u className="page-link">3</u></li>
                        <li className="page-item"><u className="page-link">Next</u></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPage)