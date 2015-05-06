var Global = Backbone.View.extend({
	el: '.navbar-default',
	globalTemplate: _.template($('#global-template').html()),
	events: {
		'click .nav-global' : 'render',
		'click .nav-main' : 'main'
	},
	render: function() {
		$('.global').html(this.globalTemplate());
		$('.app-container').hide();
		$('.global').show();
		return this;
	},
	main: function() {
		$('.app-container').show();
		$('.global').hide();
	}
});