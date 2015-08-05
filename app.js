/**
 * Created by Zain Mustafa on 7/29/2015.
 */
var app = angular.module('app', [ 'pouchdb', 'ngNewRouter', 'ngMaterial', 'app.view', 'app.index'])
    .factory('$db', function(pouchDB) {
        return pouchDB('idb://todos');
    })

    .controller('AppController', function ($router) {
        $router.config([
            {
                path: '/index',
                component: 'index'
            },
            {
                path: '/',
                component: 'view'
            }
        ]);
    });