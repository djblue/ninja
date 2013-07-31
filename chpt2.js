/*
 * Chapter 2 mainly covered the  best practices in javascript including
 * good unit testing as exemplified by test groups below. The testing
 * suite supports both synchronous and asynchronous testing. The tests
 * below describe the usage of the testing suite.   
 */

test("A test.", function () {
    assert(true, "First test completed.");
    assert(true, "Second test failed.");
    assert(true, "Third assertion completed.");
});

test("Another test.", function () {
    assert(true, "First assertion completed.");
    assert(false, "Second assertion completed.");
    assert(true, "Third assertion completed.");
});

test("A third test.", function() {
    assert(null, "fail");
    assert(5, "pass")
});

test("Async Test #1", function() {
    pause();
    setTimeout(function() {
    assert(true, "First test completed");
    resume();
}, 1000); });

test("Async Test #2", function() {
    pause();
    setTimeout(function() {
    assert(true, "Second test completed");
    resume();
}, 1000); });
