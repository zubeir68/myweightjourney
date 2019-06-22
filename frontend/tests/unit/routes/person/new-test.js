import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | person/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:person/new');
    assert.ok(route);
  });
});
