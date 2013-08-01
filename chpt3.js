/*
 * Chapter 3
 */

/* callbacks */
test("Testing callbacks.", function () {

    var call = function (callback) { return callback(); };

    assert(call(function(){ return "hello"; }) === "hello", 
        "callbacks get passed as parameters and called later");
});

/* javascript function declarations */
test("Testing Function declarations.", function () {

    /* a named function */
    function named(){ return true; }

    assert(named.name === "named", 
        "named functions have a names");

    /* anonymous function that is assigned to a variable */
    var variable = function () { return true; }

    assert(variable.name === "", 
        "anonymous functions don't have names");
});

/* javscript scope summary */
test("Testing javscript scope.", function () {

    assert(typeof func === 'function',
        "named functions are available before declaration");

    function func () {}

    assert(a === undefined,
        "variable names are hoisted to top of scope");

    var a = 1;

    assert(typeof a === 'number',
        "variables are avaliable after declaration");

    if (true) { var c = 3; }

    assert(c !== undefined,
        "only functions, not blocks, define scope");

});

/* function arguments */
test("Testing function arguments.", function () {

    var testArgs = function (a, b, c) {

        assert(arguments !== undefined,
            "function arguments are avaiable through 'arguments'");

        assert(arguments.length === 5,
            "extra function arguments are placed in 'arguments'");

        assert(arguments[0] === a,
            "function arguments are mapped directly to parameters");
        
    };

    testArgs(1,2,3,4,5);

});

/* function context */
test("Testing function context.", function () {

    var testArgs = function () { return this; };

    assert(testArgs() === window,
        "the default function context is the global scope");
        
    var obj = { testArgs: testArgs };

    assert(obj.testArgs() === obj,
        "unless invoked as a method");
});
