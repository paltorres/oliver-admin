import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class SaleItem extends React.Component {
    static propTypes = {
        claims_list: PropTypes.array,
        items_list: PropTypes.array.isRequired,
    }
    render() {
        const { claims_list, items_list } = this.props;
        const hasClaim = claims_list && claims_list.length > 0;
        const classNames = cx(
            'list-group-item',
            {
                'list-group-item-warning': hasClaim,
            }
        );

        return (
            <li className={classNames}>
                {items_list.map((item) => (
                <div>
                    <img src={item.link}/>
                    <p>{item.title}</p>
                    {hasClaim && 
                        claims_list.map((claim) => (<a href={`/admin/sales/claims/${claim}`}>Ir al reclamo: {claim}</a>))
                    }
                </div>
                ))}
            </li>
        );
    }
}

export default SaleItem;
