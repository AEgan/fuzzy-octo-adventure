// app.initialize(window);
Events = new Meteor.Collection("events");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to fuzzy-octo-meteor.";
  };

  Template.hello.events({
    'click .event_submit' : function () {
      alert('here');
    },
    'click .showNewEventFields' : function() {
      $('.showNewEventFields').hide();
      $('#newEventInputs').fadeIn();
    },
    'click .resetForm' : function() {
      $('.showNewEventFields').show();
      $('#newEventInputs').fadeOut();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


///////// dom manipulation stuff that isn't tied to meteor so I was going to put it in dom.js but jquery wasn't loaded first
$(document).ready(function() {
  // hide new event inputs when it loads
  $('#newEventInputs').hide();

});



