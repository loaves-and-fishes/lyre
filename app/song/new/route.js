import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('song');
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
      song.save();
    }
  }
});
