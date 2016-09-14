import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('book', { path: 'books' }, function () {
    this.route('view', { path: ':book_id' });
  });

  this.route('song', { path: 'songs' }, function () {
    this.route('new');
    this.route('view', { path: ':song_id' });
  });
});

export default Router;
