// app.initialize(window);
Events = new Meteor.Collection("events");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to fuzzy-octo-meteor.";
  };

  Template.hello.events({
    'click .event_submit' : function () {
      ename  = $('.event_name').val();
      edesc  = $('.event_description').val();
      estart = $('.event_start_date').val();
      eend   = $('.event_end_date').val();
      elong  = $('.event_longitude').val();
      elat   = $('event_latitude').val();
      ecreator = Meteor.user();
      Events.insert({creator: ecreator, name: ename, description: edesc, start_time: estart, end_time: eend, longitude: elong, latitude: elat, going: [ecreator]});
      $('#newEventInputs').fadeOut();
      $('.showNewEventFields').show();
    },
    'click .showNewEventFields' : function() {
      $('.showNewEventFields').hide();
      $('#newEventInputs').fadeIn();
    },
    'click .resetForm' : function(event) {
      $('.showNewEventFields').show();
      $('#newEventInputs').fadeOut();
      // because the reset default functionality won't work
      $('.event_name').val("");
      $('.event_description').val("");
      $('.event_start_date').val("");
      $('.event_end_date').val("");
      $('.event_longitude').val("");
      $('event_latitude').val("");
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



