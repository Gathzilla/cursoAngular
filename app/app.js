(()=>{

    'use strict';

    let mainModule = angular.module("miApp", ["ui.router"]);

    let mainModuleConfiguration = ($stateProvider, $locationProvider, $urlRouterProvider ) => {

        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/app/tareaUno');

        let states = [
            { 
                name: 'app',
                options: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/app.html',
                    controller: 'AppController',
                    controllerAs: 'vm'
                }

            },

            { 
                name: 'app.tareaUno',
                options: {
                    title: 'Tarea Uno',
                    url: '/tareaUno',
                    templateUrl: 'app/js/controllers/tareaUno/tareaUno.html',
                    controller: 'tareaUnoController',
                    controllerAs: 'vm'
                }

            }

    
        ];

        states.forEach(state => $stateProvider.state(state.name, state.options));

    };

    mainModule.config(mainModuleConfiguration);
    mainModuleConfiguration.$inject =['$stateProvider','$locationProvider','$urlRouterProvider'];

    mainModule.controller("AppController", function($state) {

        let vm = this;

        vm.isNavCollapsed = true;
        vm.isNavCollapsed = false;
        vm.isCollapsedHorizontal = false;

        vm.navbarItems = $state.get();



    });

})();