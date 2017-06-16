// site/js/app.js

var app = app || {}

$(function () {
	var contact = [
	  {name: 'Samson'},
	  {name: 'Cindy'},
	  {name: 'Fido'}
	]

	new app.contact_list( contact )
})