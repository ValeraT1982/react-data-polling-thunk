import {toastr} from "react-redux-toastr";

export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";

export const loadPrices = () => dispatch => {
    return fetch(
        'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla,msft,googl,amzn&types=quote',
        {method: 'GET'})
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error(response.statusText);
        })
        .then(
            data => {
                toastr.removeByType('error');
                dispatch({type: LOAD_DATA_SUCCESS, data});
            },
            error => {
                toastr.error(`Error loading data: ${error.message}`);
            })
};