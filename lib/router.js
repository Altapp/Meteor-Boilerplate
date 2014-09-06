Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'fourohfour'

});

Router.onRun(function() {
    window.scrollTo(0, 0);
});


Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'indexPage',
	    waitOn: function() {
	        return Meteor.subscribe('myCollection');
	    }
    });
});
