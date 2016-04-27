angular.module('starter.services', [])

.factory('Profiles', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var profiles = [{
    id: 0,
    name: 'Josue Salgado',
    deseg: 'Team Lead',
    face: 'img/150x165/j.jpg'
  }];

  return {
    all: function() {
      return profiles;
    },
    remove: function(id) {
      profiles.splice(profiles.indexOf(id), 1);
    },
    get: function(profile1Id) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id === parseInt(profileId)) {
          return profiles[i];
        }
      }
      return null;
    }
  };
});
