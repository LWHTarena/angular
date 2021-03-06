var testUtil = require('angular2/e2e_test/test_util');

describe('ng2 element injector benchmark', function () {

  var URL = 'benchmarks/src/element_injector/element_injector_benchmark.html';

  afterEach(testUtil.verifyNoBrowserErrors);

  it('should not throw errors', function() {
    browser.get(URL);
    testUtil.clickAll(['#instantiate', '#instantiateDirectives']);
  });

});
