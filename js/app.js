// site/js/app.js

var app = app || {}

$(function () {
	var people = [
	  {title: 'African Coordinator', firstname: 'Samson', middlename: '', lastname: 'Tan'},
	  {title: 'International Coordinator', firstname: 'Cindy', middlename: 'Suzzette', lastname: 'Yong'},\
	  {title: 'Fifth Tier', firstname: 'Fido', middlename: '', lastname: 'Dido'}
	]

	new app.contact_list( people )
})