# Simple-Testing-Angular-Project

Using Jasmine / Karma / PhantomJs for learn how to test a simple AngularJs app.

# The application

The application is really simple.

- There is only one js file whitch is app.js.
- There is the index.html file whitch will display the app. She's really basic.

- There is the testingAngularUnitTest.js file whitch contain the test suites of the app.

- And there is the karma.conf.js file. This file is a config file for karma.

# Prerequises

You will need to install node.js on your computer.
You will also need to install npm on your computer.

Now you can begin !

# Install needed packages

At first, we will need to use bower. Then we will install it with npm. We just have to run this : 
```
 npm install bower -g.
```

Now we will need to use the karma command line interface and phantomJs so we will run this :
```
 npm install karma-cli phantomjs -g
```

As we said, we will use the phantomJs, karma and the framework jasmine in order to run our tests. 
Go to the project folder and run this :
```
    npm install
```

Obviously, if we wont to test an AngularJs application, we will need to install it. And for write the test, we will use angular-mocks.
Just run this :
```
    bower install
```

Now we have all the elements for run our tests ! We just need to tell to karma to start ! Like this :
```
    karma start karma.conf.js
```