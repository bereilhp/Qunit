function add(a, b) {
    return a + b;
  }

  QUnit.module('Adding', function() {
    QUnit.test('TwoNumbers', function(assert) {
      assert.equal(add(1, 2), 3);
    });
  });

  function subtract(a,b){
    return a - b;
    
  }

  QUnit.module('Subtracting', function() {
    QUnit.test('TwoNumbers', function(assert) {
      assert.equal(subtract(3, 2), 1);
    });
  });

  function multiply(a,b){
    return a * b;
  }

  QUnit.module('Multiply', function() {
    QUnit.test('TwoNumbers', function(assert) {
      assert.equal(multiply(3, 2), 6);
    });
  });

  function helloWorld() {
    return "Hello world!";
  }

  //console.log(helloWorld());
  QUnit.module('HelloWorld', function() {
    QUnit.test('Print Hello World!',function(assert) {  
      assert.equal(helloWorld(), "Hello world!");
    });
  });