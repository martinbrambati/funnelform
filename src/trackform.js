/**
	JavaScript code to track form interaction via Google Analytic
	Requires JQuery
*/

var formTracker = {

	'formName': 'FORM NAME',
	'exclude':['EXCLUDED WORDS','MORE EXCLUDED WORDS'],
	'tracker':null,

	/*
	* Initialice
	*/
	'init': function() {
		$(document).ready(function() {
				$(':input').blur(function() {
						if ($(this).val().length > 0 && formTracker.notIn($(this).val())) {
								formTracker.tracker.push(['_trackEvent', formTracker.formName, 'completed', $(this).attr('name')]);
						} else {
								formTracker.tracker.push(['_trackEvent', formTracker.formName, 'skipped', $(this).attr('name')]);
						}
				});
		});		
	},

	/*
	* Not in list
	*  
	*/
	'notIn':function(valueI){
		for (var i = formTracker.exclude.length - 1; i >= 0; i--) {
			if(formTracker.exclude[i]==valueI){
				return false;
			}
		}
		return true;
	}

}