export default class Api {
    static getPrices() {
        return fetch(
            'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla,msft,googl,amzn&types=quote',
            {method: 'GET'});
    }
}