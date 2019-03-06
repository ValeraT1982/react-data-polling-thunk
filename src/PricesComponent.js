import * as React from 'react';
import {connect} from 'react-redux';
import {loadPrices} from "./actions";
import {withPolling} from "./withPolling";

class PricesComponent extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Company Name</th>
                        <th>Sector</th>
                        <th>Open</th>
                        <th>Close</th>
                        <th>Latest</th>
                        <th>Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(this.props.prices).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value.quote.companyName}</td>
                            <td>{value.quote.sector}</td>
                            <td>{value.quote.open}</td>
                            <td>{value.quote.close}</td>
                            <td>{value.quote.latestPrice}</td>
                            <td>{(new Date(Date(value.quote.latestUpdate))).toLocaleTimeString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    prices: state.data.prices
});

const mapDispatchToProps = {};

export default withPolling(loadPrices)(
    connect(mapStateToProps, mapDispatchToProps)(PricesComponent));