var app = angular.module('testApp', ['onsen']);
/**
 * controllerでアプリケーションの機能を設定する
 */
app.controller("testAppController1", function($scope){
    var str = JSON.parse(localStorage.getItem('setdata'));
    this.page1 = function(string) {
        window.open('http://' + str.mail + ':' + str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/index.php?title=%E7%A4%BE%E5%86%85%E8%A6%8F%E5%AE%9A','_blank','location=no' );
    };
    this.page2 = function(string) {
        window.open('http://' + str.mail + ':' + str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/index.php?title=%E7%AC%AC%E4%BA%8C%E6%8A%80%E8%A1%93%E9%83%A8&action=edit','_blank','location=no' );
    };
    this.page5 = function(string) {
        window.open('http://' + str.mail + ':' + str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/index.php?title=%E4%B8%AD%E5%B7%9D&action=edit','_blank','location=no' );
    };
    this.page6 = function(string) {
        window.open('http://' + str.mail + ':' + str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/index.php?title=%E7%AC%AC%E4%BA%8C%E6%8A%80%E8%A1%93%E9%83%A8&action=edit','_blank','location=no' );
    };
    this.finish = function(string) {
        console.log('hoge');
        window.close();
    };
});

