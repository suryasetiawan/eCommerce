import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as AppActions from '../action';
import * as redux from 'redux';
import {connect} from 'react-redux';


 
class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title || '',
            rate: this.props.rate || '',
            description: this.props.description || '',
            price: this.props.price || '',
            brand: this.props.brand || '',
            detailProduct: this.props.detailProduct || ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var title = this.state.title.trim();
        var rate = this.state.rate.trim();
        var description = this.state.description.trim();
        var price = this.state.price.trim();
        var brand = this.state.brand.trim();
        var detailProduct = this.state.detailProduct.trim();
        if (!title || !rate || !description || !price || !brand || !detailProduct) {
            return;
        }
        
        this.props.actions.addForm(title, rate, description, price, brand, detailProduct);
        this.setState({ title: '', rate: '', description: '', price: '', brand: '', detailProduct: ''});        
    }
    
    render() {
        
        return (
            <div className="container" style={{ marginTop: '10px' }}>
                <div className="card">
                <div className="card-header text-white bg-info">Add Ads</div>
                <div className="card-body">
                    <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.title} className="form-control" placeholder="Title" onChange={(e) => this.setState({ title: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Rate</label>
                            <div className="col-sm-10">
                            <input type="number" className="form-control" value={this.state.rate} placeholder="Rate" onChange={(e) => this.setState({ rate: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea type="text" className="form-control" value={this.state.description} placeholder="Description" onChange={(e) => this.setState({ description: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.price} className="form-control" placeholder="Price" onChange={(e) => this.setState({ price: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Brand</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.brand} className="form-control" placeholder="Brand" onChange={(e) => this.setState({ brand: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Detail Product</label>
                            <div className="col-sm-10">
                                <textarea type="text" className="form-control" value={this.state.detailProduct} rows="8" placeholder="Detail Product" onChange={(e) => this.setState({ detailProduct: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Image</label>
                            <div className="col-sm-10">
                                <input type="file" placeholder="file" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                            <button type="submit" className="btn btn-info">Add</button> &nbsp;
                                <div className="btn btn-warning text-white">Cancel</div>
                            </div>
                        </div>

                    </form>
                </div>
                </div>
            </div>
        )
    }
}

  function mapStateToProps(state){
    return{
      data: state.products
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      actions: redux.bindActionCreators(AppActions, dispatch)
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddForm);

