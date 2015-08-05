angular.module('app.todoService')
  .factory('$db', function($pouch) {
    return $pouch('idb://todos');
  });