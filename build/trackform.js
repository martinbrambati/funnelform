(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.tracker = this.tracker || null;

  this.formTracker = {
    formName: "FORM NAME",
    exclude: ["EXCLUDED WORDS", "MORE EXCLUDED WORDS"],
    init: function() {
      return $(document).ready(function() {
        return $(":input").blur(function() {
          var string;
          string = $(this).val().toString().replace(/^\s+/g, "");
          if (string.length > 0 && formTracker.notIn($(this).val())) {
            return tracker.push(["_trackEvent", formTracker.formName, "completed", $(this).attr("name")]);
          } else {
            return tracker.push(["_trackEvent", formTracker.formName, "skipped", $(this).attr("name")]);
          }
        });
      });
    },
    notIn: function(valueI) {
      return !(__indexOf.call(formTracker.exclude, valueI) >= 0);
    }
  };

}).call(this);
