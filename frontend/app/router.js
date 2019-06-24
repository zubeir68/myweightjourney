import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('dashboard');

  this.route('person', function() {});

  this.route('persons', function() {
    this.route('edit');
  });

  this.route('people', function() {});
  this.route('edit');
});

export default Router;
