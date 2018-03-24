beforeEach(function () {
    jasmine.addMatchers({
        customize: function () {
            return {
                compare: function (actual, expected) {
                    var result = {};
                    result.pass = (typeof(actual) == 'number' && actual > expected);
                    if( result.pass ) {
                        result.message = "Expected " + actual + " to be a number and more than 10";
                    } else {
                        result.message = "Expected " + actual + " to be a number and more than 10, but it is not";
                    }
                    return result;
                }
            }
        }
    });
});