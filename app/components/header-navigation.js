import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    this.$('.navbar').affix({
      offset: {
        top: 100,
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
    });
  }
});
