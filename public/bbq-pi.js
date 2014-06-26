/*! bbq-pi - v0.0.2 - 2014-06-19
 * http://w3p.ch/
 * Copyright (c) 2014 Fabian Heusser, Andrea Trütsch;
 * Licensed MIT
 */
angular.module("bbq-pi",[]).controller("AppCtrl",["$scope","$http","$interval",function(a,b,c){a.temps=["-","-"],c(function(){b({method:"GET",url:"/getdata"}).success(function(b){a.temps=b}).error(function(){a.temps=["e","e"]})},500)}]),angular.module("templates.app",[]),angular.module("templates.common",[]);