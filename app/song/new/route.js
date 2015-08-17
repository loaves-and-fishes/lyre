import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('book', params.book).then(book => {
      return this.store.createRecord('song', {
        book: book
      });
    });
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      let model = controller.get('model');
      let isNew = model.get('isNew');

      if (isNew) {
        model.deleteRecord();
      }
    }
  },

  actions: {
    saveSong(song) {
      song.save().then(() => {
        var book = song.get('book');
        this.transitionTo('book.view', book.id);
      });
    }
  }
});
