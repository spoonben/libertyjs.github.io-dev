import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('schedule');
  this.route('tickets');
  this.route('callforproposals');
  this.route('sponsorship');
  this.route('sponsors');
  this.route('codeofconduct');
  this.route('volunteer');
  this.route('speakers');
  this.route('speakers', { path: '/speakers/:speaker_id' });
});

export default Router;
