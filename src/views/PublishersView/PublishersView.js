import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Select from 'react-select';
import publishersActions from 'redux/modules/publishers/actions';

const mapStateToProps = (state) => ({
    publishers: state.publishers.items
});

export class PublishersView extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(publishersActions.fetch());
    }

    renderTableRow (publisher) {
        const { id, name } = publisher;

        return (
            <tr key={id}>
                <td>
                    <Link to={`/publishers/${id}`}>{ name === '-' ? '...' : name }</Link>
                </td>
                <td>
                    <Link to={`/publishers/${id}/edit`}><i className='fa fa-pencil'> </i></Link>
                </td>
            </tr>
        );
    }

    render () {
        const { publishers } = this.props;
        let divStyle = { width: 300 };

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Имя издателя</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    { _.map(publishers, publisher => this.renderTableRow(publisher)) }
                    </tbody>
                </table>
            </div>
        );
    }
}

PublishersView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    publishers: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps)(PublishersView);
