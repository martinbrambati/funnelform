(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.formTracker = {
    formName: "FORM NAME",
    exclude: ["EXCLUDED WORDS", "MORE EXCLUDED WORDS"],
    init: function() {
      var input, _i, _len, _ref, _results;
      _ref = document.getElementsByTagName('input');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        input = _ref[_i];
        _results.push(input.addEventListener('blur', formTracker.blur));
      }
      return _results;
    },
    notIn: function(valueI) {
      return !(__indexOf.call(formTracker.exclude, valueI) >= 0);
    },
    blur: function() {
      var string;
      string = this.value.toString().replace(/^\s+/g, "");
      if (string.length > 0 && formTracker.notIn(this.value)) {
        alert("asda");
        return eval(tracker).push(["_trackEvent", formTracker.formName, "completed", this.name]);
      } else {
        return eval(tracker).push(["_trackEvent", formTracker.formName, "skipped", this.name]);
      }
    }
  };

}).call(this);
