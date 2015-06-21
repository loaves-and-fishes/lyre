import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('book', { path: 'books' }, function () {
    this.route('view', { path: ':book_id/view' });
  });
});

export default Router;
