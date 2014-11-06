Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'fourohfour'
});

Router.onRun(function() {
    if (Meteor.isClient) {
        window.scrollTo(0, 0);
    }
    this.next();
});

Router.route('/', {
    name: 'home',
    waitOn: function() {
        return Meteor.subscribe('myCollection');
    }
});
