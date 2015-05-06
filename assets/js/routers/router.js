var Router = Backbone.Router.extend({
	routes: {
		'' 			 : 'index',
		'global' : 'global'
	},
	index: function() {
		$('.global').hide();
		$('.app-container').show();
		activatefullPage();
	},
	global: function() {
		// $('.app-container').hide();
		// var global = new Global();
		// $('.global').show();
	},
});