const formatter = require('../formatter');
const assert = require('assert');

describe('Testing html', function() {
    describe('<!doctype html>', function() {
        it(`should return '<!doctype html>'`, function() {
            assert.equal(formatter.formatHtml('<!doctype html>'), '<!doctype html>\n');
        });
    });

    describe('empty comment', function() {
        it(`should return nothing`, function() {
            assert.equal(formatter.formatHtml('<!-->'), '');
        });
    });

    describe('<!-- comment -->', function() {
        it(`should return <!-- comment -->`, function() {
            assert.equal(formatter.formatHtml('<!-- comment -->'), '<!-- comment -->\n');
        });
    });

    describe('<!-- comment -->', function() {
        it(`should return <!-- comment   text   -->`, function() {
            assert.equal(formatter.formatHtml('<!-- comment   text   -->'), '<!-- comment text -->\n');
        });
    });
});