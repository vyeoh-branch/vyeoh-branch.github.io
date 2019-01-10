var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {
  $scope.items = [ { "_id": "5c375cdeb9065d2757749948", "age": 23, "eyeColor": "brown", "name": "Robbins Obrien", "gender": "male", "company": "ICOLOGY", "email": "robbinsobrien@icology.com", "tags": [ "ut", "reprehenderit", "nostrud", "proident", "irure", "eiusmod", "do" ] }, { "_id": "5c375cde570ac20aaa5795c1", "age": 21, "eyeColor": "green", "name": "Ola Montgomery", "gender": "female", "company": "LYRICHORD", "email": "olamontgomery@lyrichord.com", "tags": [ "in", "et", "magna", "sint", "do", "minim", "mollit" ] }, { "_id": "5c375cde5ed613ef885eb97b", "age": 29, "eyeColor": "green", "name": "Puckett Fields", "gender": "male", "company": "ENTROFLEX", "email": "puckettfields@entroflex.com", "tags": [ "amet", "culpa", "aute", "sit", "eu", "pariatur", "laboris" ] } ];

  branch.init('key_live_lfQlCqPu174UMimVj1Kk3iagxwjuXlfY', options, function(err, data) {
    if(!err){
      console.log("Init:", data)
    }
  });

  branch.data(function(err, data) {
    if(!err){
      console.log("Collected Data:", data)
    }
  });


  branch.first(function(err, data) {
    if(!err){
      console.log("First Event:", data)
    }
  });

  $scope.createLink = function(item){
    var linkData = {
      campaign: 'content 123',
      channel: 'facebook',
      feature: 'dashboard',
      stage: 'new user',
      tags: [ 'tag1', 'tag2', 'tag3' ],
      alias: '',
      data: {
        'custom_bool': true,
        'custom_int': Date.now(),
        '$og_title': item.name,
        '$og_description': 'Description',
        '$og_image_url':'http://lorempixel.com/400/400',
        'gender':item.gender,
        'tags': item.tags
      }
    };
    console.log(linkData);
    branch.link(linkData, function(err, link) {
      // bind elements
      if(!err){
        window.open(link);
      }



    });
  }
  $scope.sendSMS = function(){
    var phoneNumber = '+6592976896' // +919812345678, +442071234567
    var linkData = {
      campaign: 'content 123',
      channel: 'facebook',
      feature: 'dashboard',
      stage: 'new user',
      tags: [ 'tag1', 'tag2', 'tag3' ],
      alias: '',
      data: {
        'custom_bool': true,
        'custom_int': Date.now(),
        'custom_string': 'hello',
        '$og_title': 'Title',
        '$og_description': 'Description',
        '$og_image_url':'http://lorempixel.com/400/400'
      }
    };

    var linkOptions = {
      make_new_link: false // don't create a new deep link if one already exists (e.g. _branch_match_id is in the address bar)
    };

    branch.sendSMS(phoneNumber, linkData, linkOptions, function(err, data) {
      console.log(err);
    });
  }
}]);
