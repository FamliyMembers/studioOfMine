angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    {
    id: 0,
    name: '17号仓库',
    lastText: 'You on your way?',
    face: 'img/cube.png',
    detail:["东北角C1","东南角C2","东南角C3","西北角C4","西南角C5","西南角C6"]
   }, 
   {
    id: 1,
    name: '18号仓库',
    lastText: 'Hey, it\'s me',
    face: 'img/cylinder.png',
    detail:["东北角C1","东南角C2","东南角C3","西北角C4","西南角C5","西南角C6"]
  }, 
  {
    id: 2,
    name: '19号仓库',
    lastText: 'I should buy a boat',
    face: 'img/cube.png',
    detail:["东北角C1","东南角C2","东南角C3","西北角C4","西南角C5","西南角C6"]
  }, 
  {
    id: 3,
    name: '20号仓库',
    lastText: 'Look at my mukluks!',
    face: 'img/cylinder.png',
    detail:["东北角C1","东南角C2","东南角C3","西北角C4","西南角C5","西南角C6"]
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
// .factory('Settings',function(){
// var settings = [
//   {
//     id: 0,
//     name: '个人资料',
//     lastText: 'You on your way?',
//     face: 'img/adam.jpg',
//     detail:["东北角C1","东南角C2","东南角C3","西北角C4","西南角C5","西南角C6"]
//   },
//   {
//    id: 1,
//     name: '使用说明',
//     lastText: 'You on your way?',
//     face: 'img/ben.png',
//     detail:["东北角C1","东南角C2","东南角C3","西北角C4","西南角C5","西南角C6"]
//   }];
//   return{  
//     all: function() {
//       return settings;
//     },
//     get: function(settingId) {
//       for (var i = 0; i < settings.length; i++) {
//         if (settings[i].id === parseInt(settingId)) {
//           return settings[i];
//         }
//       }
//       return null;
//     }
//    };
// });