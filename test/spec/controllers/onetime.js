'use strict';

describe('Controller: OnetimeCtrl', function () {

  // load the controller's module
  beforeEach(module('samplesApp'));

  var OnetimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnetimeCtrl = $controller('OnetimeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
