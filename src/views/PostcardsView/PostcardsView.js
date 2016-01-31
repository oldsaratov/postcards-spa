import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import postcardsActions from 'redux/modules/postcards/actions';
import seriesActions from 'redux/modules/series/actions';

const mapStateToProps = (state) => ({
    postcards: state.postcards,
    series: state.series
});

export class PostcardsView extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(seriesActions.fetch());
        dispatch(postcardsActions.fetch());
    }

    getSeriesTitle (seriesId) {
        const { series } = this.props;
        let targetSeries = _.findWhere(series.items, { id: seriesId });

        return targetSeries.title;
    }

    renderTableRow (postcard) {
        const { id, year, seriesId, frontTitle: title } = postcard;

        return (
            <tr key={id}>
                <td>
                    <Link to={`/postcards/${id}`}>{ title === '-' ? '...' : title }</Link>
                </td>
                <td>{year}</td>
                <td>{this.getSeriesTitle(seriesId)}</td>
                <td>
                    <Link to={`/postcards/${id}/edit`}><i className='fa fa-pencil'> </i></Link>
                </td>
            </tr>
        );
    }

    render () {
        const { postcards } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Надпись</th>
                        <th>Год</th>
                        <th>Серия</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    { _.map(postcards.items, postcard => this.renderTableRow(postcard)) }
                </tbody>
            </table>
        );
    }
}

PostcardsView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    postcards: React.PropTypes.object.isRequired,
    series: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PostcardsView);
