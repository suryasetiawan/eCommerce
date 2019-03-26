import * as types from '../constant/ActionTypes';
import request from 'superagent';

const SERVER_URL = 'http://localhost:3000/api/';

export function addData(id, title, rate, description, price, brand, detailProduct){
    return {type: types.ADD_DATA, id, title, rate, description, price, brand, detailProduct}
}

function addProductFailure(){
    return {type: types.ADD_PRODUCT_FAILURE}
}

function addProductSuccess(product){
    return {type: types.ADD_PRODUCT_SUCCESS, product}
}

export function addForm(title, rate, description, price, brand, detailProduct){
    let id = Date.now()
    return dispatch => {
        dispatch(addData(id, title, rate, description, price, brand, detailProduct))
        return request
        .post(`${SERVER_URL}product`)
        .type('form')
        .send({id: id})
        .send({title: title})
        .send({rate: rate})
        .send({description: description})
        .send({price: price})
        .send({brand: brand})
        .send({detailProduct: detailProduct})
        .end((err, res) => {
            if(err) {
                dispatch(addProductFailure())
            }else{
                console.log(res.body.data);
                dispatch(addProductSuccess(res.body.data))
            }
        })
    }
}

function loadDataSuccess(products){
    return {type: types.LOAD_PRODUCT_SUCCESS, products}
}

function loadDataFailed(){
    return {type: types.LOAD_PRODUCT_FAILURE}
}

export function loadData(){
    return dispatch => {
        return request
        .get(`${SERVER_URL}product`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            console.log(res.body);
            if(err){
                console.log(err.message);
                dispatch(loadDataFailed());
            }else{
                dispatch(loadDataSuccess(res.body));
            }
        })
    }
}

export function onSelected(item){
    console.log("di pilih", item)
    return {type: types.ON_SELECTED, item}
}

