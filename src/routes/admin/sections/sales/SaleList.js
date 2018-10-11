import React from 'react';
import PropTypes from 'prop-types';
import SaleItem from './SaleItem';

class SaleList extends React.Component {
    static propTypes = {
        orders: PropTypes.array.isRequired,
    };
    
    render() {
        const { orders } = this.props;
        console.log(orders);
        return (
            <ul className="list-group list-group-flush">
                {orders.map((order) => <SaleItem {...order} />)}
            </ul>
        );
    }
}

export default SaleList;
