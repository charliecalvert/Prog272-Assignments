/**
 * Created by charlie on 10/7/15.
 */

describe('Elvenware Simple Plain Suite', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('expects getNine to return 9', function () {
        var result = getNine();
        expect(result).toBe(9);
    });

    it('expects a function called get this to return the window object', function() {
        var result = getThis();
        console.log(JSON.stringify(this));
        expect(result).toBe(window);
    })
});
