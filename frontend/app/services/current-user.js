import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';

export default Service.extend({
    session: service('session'),
    store: service(),
  
    load() {
      if (this.get('session.isAuthenticated')) {
        return this.get('store').queryRecord('user', { me: true }).then((user) => {
          this.set('user', user);
        });
      } else {
        return Promise.resolve();
      }
    }  
});
