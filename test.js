(function () {

    var queue = []      // for async tests
      , paused = false  // for async tests
      , results;

    // defining the assert method
    this.assert = function assert(value, description) {

        // create a new test list item
        var li = document.createElement('li');

        // determine if the test passed or failed
        li.className= value? "pass" : "fail";

        // append description to test list item
        li.appendChild(document.createTextNode(description));

        // append the test 
        results.appendChild(li);

        // update test block if a single assert fails
        if (!value) { li.parentNode.parentNode.className = "fail"; }

        return li;
    }

    // defining the test method which supports async testing
    this.test = function test(name, fn) {

        // push test onto queue
        queue.push(function () {

            // Get the results element 
            results = document.getElementById("results");

            // append new unordered list for new test, initialize to pass
            results = assert(true, name).appendChild(
                document.createElement("ul"));

            // run all tests defined by the callback
            fn();
        });

        runTest();
        
    }

    // pause for async test to complete 
    this.pause = function () { paused = true; };

    // continue testing after async test is complete
    this.resume = function () {
        paused = false;
        setTimeout(runTest, 1);
    };

    function runTest () {
        if (!paused && queue.length) {
            queue.shift()();    
            if (!paused) {
                resume();
            }
        }
    };

})();
