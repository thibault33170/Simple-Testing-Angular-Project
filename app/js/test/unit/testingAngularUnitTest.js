describe('Testing angular js test suite for the unique App of the app', function() {

    //Load the module tha we need.
    beforeEach(module('testingAngularApp'));

    describe('Testing AngularJs controller', function() {
        var scope = {};
        var controller;
        
        //Load the controller that we will test and his scope.
        beforeEach(inject(function($controller) {
            controller = $controller('testingAngularCtrl', {$scope : scope});
        }));

        //each test is specified by an 'it' which contain one or many 'expect'.
        //each 'expect' is a test
        it('should initialize the title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Title of my page');
        });

        it('should add new user in the users list', function() {
            expect(scope.users).toBeDefined();
            expect(scope.users.length).toEqual(0);

            scope.newUser = {
                name :'toto',
                age:'80',
                country:'Espagne'
            };

            scope.addUser();

            expect(scope.users.length).toBe(1);
            expect(scope.users[0].name).toBe('toto');
            expect(scope.users[0].age).toBe('80');
            expect(scope.users[0].country).toBe('Espagne');
        });

        it('shoud remove user in the users list', function() {
            
            scope.newUser = {
                name :'toto',
                age:'80',
                country:'Espagne'
            };

            //Add one user to the users List
            scope.addUser();

            scope.newUser = {
                name :'titi',
                age:'20',
                country:'USA'
            };

            //Add a second user to the users list
            scope.addUser();

            expect(scope.users.length).toBe(2);

            //Should remove the first user of the users list
            scope.removeUser(scope.users[0]);

            expect(scope.users.length).toBe(1);
            
            expect(scope.users[0].name).toBe('titi');
            expect(scope.users[0].age).toBe('20');
            expect(scope.users[0].country).toBe('USA');
        });
    });
});