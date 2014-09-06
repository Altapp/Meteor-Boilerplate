MyCollection = new Meteor.Collection('myCollection');

MyCollection.allow({
  update: ownsDocument,
  remove: ownsDocument
});