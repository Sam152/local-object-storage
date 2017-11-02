module.exports = (function() {

  var LocalStorageObject = function(key) {
    this.key = key;
  };

  LocalStorageObject.prototype.get = function() {
    try {
      var data = JSON.parse(localStorage.getItem(this.key));
      return data || {};
    }
    catch (e) {
      localStorage.removeItem(this.key);
      return {};
    }
  };

  LocalStorageObject.prototype.set = function(object) {
    if (window.localStorage) {
      window.localStorage.setItem(this.key, JSON.stringify(object));
    }
  };

  return LocalStorageObject;

})();
