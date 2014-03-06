var assert = require('assert');
var model = require('model');
var accessors = require('accessors');

describe('accessors', function(){
  var Model;

  beforeEach(function () {
    Model = model().use(accessors);
  });

  it('should define getters', function(){
    var state = new Model({
      foo: 'bar'
    });
    assert( state.foo === 'bar' );
  });

  it('should define setters', function(){
    var state = new Model({
      foo: 'bar'
    });
    state.foo = 'baz';
    assert( state.get('foo') === 'baz' );
  });

  it('should emit events', function(done){
    var state = new Model({
      foo: 'bar'
    });
    state.change('foo', function(){
      done();
    });
    state.foo = 'baz';
  });

  it('should not have accessors if not defined when created', function(){
    var state = new Model();
    state.set('foo', 'bar');
    assert(state.foo == null);
  })

  it('should update the accessors', function(){
    var state = new Model();
    state.set('foo', 'bar');
    state.updateAccessors();
    assert(state.foo === 'bar');
  })

});