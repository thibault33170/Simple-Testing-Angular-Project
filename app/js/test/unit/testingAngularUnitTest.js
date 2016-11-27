//the 'describe' can contain one are many 'it'
//they can also contain others 'describe' for more readable test suites
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

        it('should add new user in the users list if all the user attributes are set', function() {

            //The users list in empty at begining
            expect(scope.users).toBeDefined();
            expect(scope.users.length).toEqual(0);

            //all attributes are set, this should work
            scope.newUser = {
                name :'toto',
                age:'80',
                country:'Espagne'
            };

            //Adding one user to the users list
            scope.addUser();

            //Then it should be one user in the users list
            expect(scope.users.length).toBe(1);
            expect(scope.users[0].name).toBe('toto');
            expect(scope.users[0].age).toBe('80');
            expect(scope.users[0].country).toBe('Espagne');

            //all attributes are not set, this should not work
            scope.newUser = {
                name : undefined,
                age: undefined,
                country: undefined
            };

            //Adding a second user in the users list
            scope.addUser();

            //If all fields aren't valid, we don't add the user to the users list
            //then it should be only one user in the users list
            expect(scope.users.length).toBe(1);

            //all attributes are not set, this should not work
            scope.newUser = {
                name : 'user',
                age: undefined,
                country: undefined
            };

            //Trying to add this user. This should not work because all the attributes of the user are not set.
            scope.addUser();

            //If all fields aren't valid, we don't add the user to the users list
            //then it should be only one user in the users list
            expect(scope.users.length).toBe(1);

            //all attributes are not set, this should not work
            scope.newUser = {
                name : undefined,
                age: '50',
                country: undefined
            };

            //Trying to add this user. This should not work because all the attributes of the user are not set.
            scope.addUser();

            //If all fields aren't valid, we don't add the user to the users list
            //then it should be only one user in the users list
            expect(scope.users.length).toBe(1);

            //all attributes are not set, this should not work
            scope.newUser = {
                name : undefined,
                age: undefined,
                country: 'France'
            };

            //Trying to add this user. This should not work because all the attributes of the user are not set.
            scope.addUser();

            //If all fields aren't valid, we don't add the user to the users list
            //then it should be only one user in the users list
            expect(scope.users.length).toBe(1);
        });

        it('shoud remove user in the users list', function() {
            
            //all attributes are set, this should work
            scope.newUser = {
                name :'toto',
                age:'80',
                country:'Espagne'
            };

            //Add one user to the users List
            scope.addUser();

            //all attributes are set, this should work
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