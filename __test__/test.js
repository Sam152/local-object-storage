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

});
