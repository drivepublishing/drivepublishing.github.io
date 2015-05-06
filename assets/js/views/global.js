var Global = Backbone.View.extend({
	el: '.navbar-default',
	globalTemplate: _.template($('#global-template').html()),
	events: {
		'click .nav-global' : 'render'
	},
	render: function() {
		$('.global').html(this.globalTemplate());
		return this;
	}
});