import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Select from 'react-select';
import seriesActions from 'redux/modules/series/actions';
import publishersActions from 'redux/modules/publishers/actions';
import { setPublisherFilter } from 'redux/modules/publisherFilter/actions';

const mapStateToProps = (state) => ({
    filteredSeries: filterSeries(state.series, state.publisherFilter),
    publishers: state.publishers,
    publisherFilter: state.publisherFilter
});

export class SeriesView extends React.Component {
    constructor (props) {
        super(props);
        this.onPublisherFilterChanged = this.onPublisherFilterChanged.bind(this);
    }

    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(publishersActions.fetch());
        dispatch(seriesActions.fetch());
    }

    getPublisherName (publisherId) {
        const { publishers } = this.props;
        let targetPublisher = _.findWhere(publishers.items, { id: publisherId });
        let targetName = targetPublisher ? targetPublisher.name : '';

        return targetName;
    }

    getSelectOptions () {
        const { publishers } = this.props;
        let selectOptions = [];

        _.forEach(publishers.items, function (value) {
            selectOptions.push({ value: value.id, label: value.name });
        });

        return selectOptions;
    }

    onPublisherFilterChanged (nextFilter) {
        const { dispatch } = this.props;
        let newPublisher = nextFilter === '' ? 'ALL' : nextFilter;

        dispatch(setPublisherFilter(newPublisher));
    }

    renderTableRow (seriesItem) {
        const { id, year, title, publisherId } = seriesItem;

        return (
            <tr key={id}>
                <td>
                    <Link to={`/series/${id}`}>{ title === '-' ? '...' : title }</Link>
                </td>
                <td>{year}</td>
                <td>{this.getPublisherName(publisherId)}</td>
                <td>
                    <Link to={`/series/${id}/edit`}><i className='fa fa-pencil'> </i></Link>
                </td>
            </tr>
        );
    }

    render () {
        const { filteredSeries, publisherFilter } = this.props;
        let divStyle = { width: 300 };

        return (
            <div>
                <div style={divStyle}>
                    <Select
                        name='form-field-name'
                        value={publisherFilter === 'ALL' ? '' : publisherFilter}
                        options={this.getSelectOptions()}
                        onChange={this.onPublisherFilterChanged}
                    />
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Год</th>
                        <th>Издатель</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    { _.map(filteredSeries, seriesItem => this.renderTableRow(seriesItem)) }
                    </tbody>
                </table>
            </div>
        );
    }
}

function filterSeries (series, filter) {
    switch (filter) {
    case 'ALL':
        return series.items;
    default:
        return series.items.filter(seriesItem => seriesItem.publisherId === filter);
    }
}

SeriesView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    filteredSeries: React.PropTypes.array.isRequired,
    publishers: React.PropTypes.object.isRequired,
    publisherFilter: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};

export default connect(mapStateToProps)(SeriesView);
