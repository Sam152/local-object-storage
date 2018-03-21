module.exports = (function() {

  var LocalStorageObject = function(key) {
    this.key = key;
  };

  LocalStorageObject.prototype.get = function(default_value) {
    if (typeof default_value === 'undefined') {
      default_value = {};
    }
    try {
      var data = JSON.parse(localStorage.getItem(this.key));
      return data || default_value;
    }
    catch (e) {
      localStorage.removeItem(this.key);
      return default_value;
    }
  };

  LocalStorageObject.prototype.set = function(object) {
    if (window.localStorage) {
      window.localStorage.setItem(this.key, JSON.stringify(object));
    }
  };

  return LocalStorageObject;

})();
