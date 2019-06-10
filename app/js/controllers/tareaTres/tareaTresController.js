(()=>{

"use strict";

let mainModule = angular.module("miApp");

mainModule.controller("tareaTresController", function() {

    let vm = this;

    let setDefaults = () => {

        vm.list = [["a","b"],["c","d"]];
        vm.fruitsHeaders = ["$index","$first","$middle","$last","$even","$odd","name"];
        vm.fruits = [

            {name: "apple", color: "red"},
            {name: "orange", color: "orange"},
            {name: "grapes", color: "purple"},
            {name: "strawberry", color: "pink"},
            {name: "blueberry", color: "blue"},
            {name: "banana", color: "yellow"},
            {name: "coconout", color: "white"}

        ];

        vm.allSelected = false;

        vm.getFruitClass = (fruit) => {
            if(fruit.selected){
                return "green";
            } else {
                return fruit.color
            }
        }

   vm.templates = [
    { name: "template1.html", url: "app/js/controllers/tareaTres/template1.html"},
    { name: "template2.html", url: "app/js/controllers/tareaTres/template2.html"}
    
   ];
   vm.template = vm.templates[0];
   vm.ifShowHide = true;

   vm.evaluateIfShowHide = () => {
    return vm.ifShowHide;
   }
       
   


    }
    vm.fruitClass = "green";
setDefaults();

});



})();