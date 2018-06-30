const formatter = require('../formatter');
const assert = require('assert');

describe('Testing html', function() {
    describe('<!doctype html>', function() {
        it(`should return '<!doctype html>'`, function() {
            assert.equal(formatter.formatHtml('<!doctype html>'), '<!doctype html>\n');
        });
    });
    describe('<!doctype   html>', function() {
        it(`should return '<!doctype html>'`, function() {
            assert.equal(formatter.formatHtml('<!doctype   html>'), '<!doctype html>\n');
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

    describe('<!--comment-->', function() {
        it(`should return <!-- comment -->`, function() {
            assert.equal(formatter.formatHtml('<!--comment-->'), '<!-- comment -->\n');
        });
    });

    describe('<!-- comment   text   -->', function() {
        it(`should return <!-- comment   text   -->`, function() {
            assert.equal(formatter.formatHtml('<!-- comment   text   -->'), '<!-- comment text -->\n');
        });
    });

    describe('<head></head>', function() {
        it(`should return <head></head>\n`, function() {
            assert.equal(formatter.formatHtml('<head></head>'), '<head></head>\n');
        });
    });

    describe('<head  ></head  >', function() {
        it(`should return <head></head>\n`, function() {
            assert.equal(formatter.formatHtml('<head  ></head  >'), '<head></head>\n');
        });
    });

    describe('<head attribute="value"></head>', function() {
        it(`should return <head attribute="value"></head>\n`, function() {
            assert.equal(formatter.formatHtml('<head attribute="value"></head>'), '<head attribute="value"></head>\n');
        });
    });

    describe('<head first-attribute="value1" second-attribute="value1"></head>', function() {
        it(`should return <head first-attribute="value1"\n      second-attribute="value1">\n</head>\\n`, function() {
            assert.equal(formatter.formatHtml('<head first-attribute="value1" second-attribute="value1"></head>'), '<head first-attribute="value1"\n      second-attribute="value1">\n</head>\n');
        });
    });

    describe('<head>text</head>', function() {
        it(`should return <head>text</head>\n`, function() {
            assert.equal(formatter.formatHtml('<head>text</head>'), '<head>text</head>\n');
        });
    });

    describe('<h1><h2></h2></h1>', function() {
        it(`should return <h1>\n<h2></h2>\n</h1>\n`, function() {
            assert.equal(formatter.formatHtml('<h1><h2></h2></h1>'), '<h1>\n  <h2></h2>\n</h1>\n');
        });
    });

    describe('<head attribute></head>', function() {
        it(`should return <head attribute></head>\n`, function() {
            assert.equal(formatter.formatHtml('<head attribute></head>'), '<head attribute></head>\n');
        });
    });

    describe('<br>', function() {
        it(`should return <br>\n`, function() {
            assert.equal(formatter.formatHtml('<br>'), '<br>\n');
        });
    });

    describe('test', function() {
        it(`test`, function() {
            let input = '<!doctype html><html ng-app="app"><head> <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script> <script src="components.js"></script> <script src="app.js"></script> </head><body> <tabs> <pane title="Localization"> <span>Date: {{ \'2012-04-01\' | date:\'fullDate\' }}</span><br> <span>Currency: {{ 123456 | currency }}</span><br> <span>Number: {{ 98765.4321 | number }}</span><br> </pane> <pane title="Pluralization"><div ng-controller="BeerCounter"><div ng-repeat="beerCount in beers"> <ng-pluralize count="beerCount" when="beerForms"></ng-pluralize></div></div> </pane> </tabs></body></html>';
            assert.equal(formatter.formatHtml(input), 'test');
        });
    });
});