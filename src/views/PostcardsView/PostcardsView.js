import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Select from 'react-select';
import postcardsActions from 'redux/modules/postcards/actions';
import seriesActions from 'redux/modules/series/actions';
import { setSeriesFilter } from 'redux/modules/seriesFilter/actions';

const mapStateToProps = (state) => ({
    filteredPostcards: filterPostcards(state.postcards, state.seriesFilter),
    series: state.series
});

export class PostcardsView extends React.Component {
    constructor (props) {
        super(props);
        this.onSeriesFilterChanged = this.onSeriesFilterChanged.bind(this);
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

    getSelectOptions () {
        const { series } = this.props;
        let selectOptions = [];

        _.forEach(series.items, function (value, key) {
            selectOptions.push({ value: key, label: value.title });
        });

        return selectOptions;
    }

    onSeriesFilterChanged (nextFilter) {
        const { dispatch } = this.props;
        let newSeries = nextFilter === '' ? 'ALL' : nextFilter;

        dispatch(setSeriesFilter(newSeries));
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
        const { filteredPostcards } = this.props;
        let divStyle = { width: 300 };

        return (
            <div>
                <div style={divStyle}>
                    <Select
                        name='form-field-name'
                        options={this.getSelectOptions()}
                        onChange={this.onSeriesFilterChanged}
                    />
                </div>

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
                        { _.map(filteredPostcards, postcard => this.renderTableRow(postcard)) }
                    </tbody>
                </table>
            </div>
        );
    }
}

function filterPostcards (postcards, filter) {
    switch (filter) {
    case 'ALL':
        return postcards.items;
    default:
        return postcards.items.filter(postcard => postcard.seriesId === filter);
    }
}

PostcardsView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    filteredPostcards: React.PropTypes.array.isRequired,
    series: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PostcardsView);
