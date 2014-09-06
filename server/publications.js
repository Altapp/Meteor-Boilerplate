Meteor.publish('myCollection', function(id) {
    return MyCollection.find();
});