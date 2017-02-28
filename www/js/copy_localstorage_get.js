// This is a JavaScript file

var app = angular.module('testApp', ['onsen']);
console.log("app.js001");
/**
 * controllerでアプリケーションの機能を設定する
 */
app.controller("testAppController1", function($scope){
    var str = JSON.parse(localStorage.getItem('setdata'));
    console.log(str.mail + ":" + str.pass);
  this.hello = function(string) {
    //alert('Hello ' + string + ' ' + str.mail + ' ' + str.pass);
    console.log(str.mail + ":" + str.pass);
    //location.href = 'http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/';
    //return('http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/');
    //window.open('http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/','_blank' );
    window.open('http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/');
    };
  
});

