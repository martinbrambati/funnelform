this.tracker = this.tracker || null

this.formTracker = {

	formName: "FORM NAME",
	
	exclude: ["EXCLUDED WORDS", "MORE EXCLUDED WORDS"],

	init : ->
		$(document).ready ->
			$(":input").blur ->
				string=$(this).val().toString().replace(/^\s+/g, "")
				if string.length > 0 and formTracker.notIn $(this).val()
					tracker.push ["_trackEvent", formTracker.formName, "completed", $(this).attr("name")]
				else
					tracker.push ["_trackEvent", formTracker.formName, "skipped", $(this).attr("name")]

	
	notIn : (valueI) ->
		return !(valueI in formTracker.exclude)
}