# GetNumbersTest

This assignment is an introduction to UnitTesting with Jasmine.

In this project there are two folders:

- Source
- Test

In Test is a file called **GetNumberSpec.js**. It has a number of tests in it. Your goal is to make the tests pass.

The first test will pass automatically:

```javascript
    it("proves true is true", function () {
        expect(true).toBe(true);
    });
```

This test has two parts. The first part describes the test:

    it("proves true is true", function () {
        
The second part is the test itself. It expects true to be equal to true:

    expect(true).toBe(true);

Needless to say, this test passes. You could make it fail by writing this:

    expect(true).toBe(false);
    
Another test in getNumberSpec looks like this:

```
    it("shows getOne returns one", function () {
        expect(getNumbers.getOne()).toBe(1);
    });
```

It expects you to provide an object called getNumbers. That object should have a method called **getOne**. The **getOne()** method should return the value 1:

```
var getNumbers;

getNumbers = {

    getOne: function () {
        'use strict';
        return 1;
    }
};
```

You should place this object in the folder called **Source**.

To test if the getOne method succeeds, go to the command prompt. One time only, enter this command:

    npm install
    
Then each time you want to run the tests, type this:

    grunt karma
    

Here is an example of a successful run:
    
```
grunt karma
Running "karma:unit" (karma) task
INFO [karma]: Karma v0.12.31 server started at http://localhost:9876/
INFO [launcher]: Starting browser PhantomJS
INFO [PhantomJS 1.9.8 (Linux)]: Connected on socket pvJD88hcbGekKWvn-bpz with id 61967173

  Function Basics with Require
    ✓ proves true is true
    ✓ proves getNumbers is an object
    ✓ shows getNumbers has nine methods
    ✓ shows getOne returns one
    ✓ shows getTwo returns two
    ✓ shows getThree returns three
    ✓ shows getFour returns four
    ✓ shows getFive returns five
    ✓ shows getSix returns six
    ✓ shows getSeven returns seven
    ✓ shows getEight returns eight
    ✓ shows getNine returns nine

PhantomJS 1.9.8 (Linux): Executed 12 of 12 SUCCESS (0.002 secs / 0.001 secs)
```
