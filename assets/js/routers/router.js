var Router = Backbone.Router.extend({
	routes: {
		'' 			 : 'index',
		'global' : 'global'
	}
	index: function() {
		$('.global').hide();
		$('.app-container').show();
		$('.app-container').fullpage({paddingBottom: '250px'});
	},
	global: function() {
		$('.app-container').hide();
		var global = new Global();
		global.render();
		$('.global').show();
	},
});