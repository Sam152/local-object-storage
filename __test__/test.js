var LocalStorageObject = require('../');
var LocalStorage = require('node-localstorage').LocalStorage;

describe('local storage object', function () {

  beforeEach(function() {
    global.localStorage = new LocalStorage('/tmp/localstorage');
    global.localStorage.clear();
  });

  test('test get with no data', function() {
    var test = new LocalStorageObject('test-key');
    expect(test.get()).toEqual({});
  });

  test('test set and get with object', function() {
    var test = new LocalStorageObject('test-key');
    test.set({'foo' : 'bar'});
    expect(test.get()).toEqual({'foo' : 'bar'});
  });

  test('test set and get with array', function() {
    var test = new LocalStorageObject('test-key');
    test.set(['a', 'b']);
    expect(test.get()).toEqual(['a', 'b']);
  });

  test('test set and get with primatives', function() {
    var test = new LocalStorageObject('test-key');
    test.set('foo');
    expect(test.get()).toEqual('foo');
  });

  test('test with default', function() {
    var test = new LocalStorageObject('test-key');
    expect(test.get('default')).toEqual('default');
  });

});
