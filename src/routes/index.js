import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeView from 'views/HomeView/HomeView';
import PostcardsView from 'views/PostcardsView/PostcardsView';
import PostcardDetailsView from 'views/PostcardDetailsView/PostcardDetailsView';
import PublishersView from 'views/PublishersView/PublishersView';
import SeriesView from 'views/SeriesView/SeriesView';
import NotFoundView from 'views/NotFoundView/NotFoundView';

export default (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={HomeView} />
        <Route path='/404' component={NotFoundView} />
        <Route path='/postcards' component={PostcardsView} />
        <Route path='/postcards/:id' component={PostcardDetailsView} />
        <Route path='/publishers' component={PublishersView} />
        <Route path='/series' component={SeriesView} />
        <Redirect from='*' to='/' />
    </Route>
);
