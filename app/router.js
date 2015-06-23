import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('book', { path: 'books' }, function () {
    this.route('view', { path: ':book_id' });
  });

  this.route('song', { path: 'songs' }, function () {
    this.route('new');
  });
});

export default Router;
