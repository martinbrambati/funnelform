this.formTracker = {

	formName: "FORM NAME",
	
	exclude: ["EXCLUDED WORDS", "MORE EXCLUDED WORDS"],

	init : ->
		for input in document.getElementsByTagName('input')
			input.addEventListener 'blur', formTracker.blur
			
	notIn : (valueI) ->
		return !(valueI in formTracker.exclude)

	blur: ->
		string=this.value.toString().replace(/^\s+/g, "")
		if string.length > 0 and formTracker.notIn this.value
			alert "asda"
			eval(tracker).push ["_trackEvent", formTracker.formName, "completed", this.name]
		else
			eval(tracker).push ["_trackEvent", formTracker.formName, "skipped", this.name]

}