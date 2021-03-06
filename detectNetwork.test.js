/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

//=======================================================================================================
//      Diners Test
//=======================================================================================================


describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901273') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

//=======================================================================================================
//      Amex Test
//=======================================================================================================


describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/

  var assert = chai.assert.isTrue;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});


//=======================================================================================================
//      MasterCard Test
//=======================================================================================================


describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});


//=======================================================================================================
//      Discover Test
//=======================================================================================================


describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  let should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567891012135').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567891083512135').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511567891012135').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511567891083512135').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
        (function(prefix) {
          it('has a prefix of ' + prefix + ' and a length of 16', function() {
            detectNetwork(prefix + '1591083512135').should.equal('Discover');
          });

          it('has a prefix of ' + prefix + ' and a length of 19', function() {
            detectNetwork(prefix + '1591053283512135').should.equal('Discover');
          });
        })(prefix)
      }

});

//=======================================================================================================
//      Maestro Test
//=======================================================================================================


describe('Maestro', function() {
  let should = chai.should();

  for (let strLength = 12; strLength <= 19; strLength++) {
       str = '';
    for(i = 0; i <strLength - 4; i++) {
      str += '1';
    }
        (function(strLength, str) {
          it('has a prefix of 5018 and a length of ' + strLength, function() {
            detectNetwork('5018' + str).should.equal('Maestro');
          });

          it('has a prefix of 5020 and a length of ' + strLength, function() {
            detectNetwork('5020' + str).should.equal('Maestro');
          });

            
          it('has a prefix of 5038 and a length of ' + strLength, function() {
            detectNetwork('5038' + str).should.equal('Maestro');
          });
          
          it('has a prefix of 6304 and a length of ' + strLength, function() {
            detectNetwork('6304' + str).should.equal('Maestro');
          });
        })(strLength, str)
      }

});

//=======================================================================================================
//      China UnionPay Test
//=======================================================================================================


// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and 
// a length of 16-19.

describe('China UnionPay', function() {
  let should = chai.should();

  for (let chiPrefix = 624; chiPrefix <= 626; chiPrefix++) {
    for(let strLength = 16; strLength <= 19; strLength++) {
      str = '';
      for(j = 0; j < strLength - 3; j++) {
        str += '1';
    }
        (function(chiPrefix, str) {
          it('has a prefix of ' + chiPrefix + ' and a length of ' + strLength, function() {
            detectNetwork(chiPrefix + str).should.equal('China UnionPay');
          });
        })(chiPrefix, str)
      }
    }

    for (let chiPrefix = 6282; chiPrefix <= 6288; chiPrefix++) {
    for(let strLength = 16; strLength <= 19; strLength++) {
      str = '';
      for(j = 0; j < strLength - 4; j++) {
        str += '1';
    }
        (function(chiPrefix, str) {
          it('has a prefix of ' + chiPrefix + ' and a length of ' + strLength, function() {
            detectNetwork(chiPrefix + str).should.equal('China UnionPay');
          });
        })(chiPrefix, str)
      }
    }

    for (let chiPrefix = 622126; chiPrefix <= 622925; chiPrefix++) {
    for(let strLength = 16; strLength <= 19; strLength++) {
      str = '';
      for(j = 0; j < strLength - 6; j++) {
        str += '1';
    }
        (function(chiPrefix, str) {
          it('has a prefix of ' + chiPrefix + ' and a length of ' + strLength, function() {
            detectNetwork(chiPrefix + str).should.equal('China UnionPay');
          });
        })(chiPrefix, str)
      }
    }

});


//=======================================================================================================
//      Switch Test
//=======================================================================================================


// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 
// and a length of 16, 18, or 19.

describe('Switch', function() {
  let should = chai.should();

  for (let strLength = 16; strLength <= 19; strLength++) {
    if(strLength === 17) { continue; }
       str = '';
    for(k = 0; k < strLength - 4; k++) {
      str += '1';
    }
        (function(strLength, str) {
          it('has a prefix of 4903 and a length of ' + strLength, function() {
            detectNetwork('4903' + str).should.equal('Switch');
          });

          it('has a prefix of 4905 and a length of ' + strLength, function() {
            detectNetwork('4905' + str).should.equal('Switch');
          });
  
          it('has a prefix of 4911 and a length of ' + strLength, function() {
            detectNetwork('4911' + str).should.equal('Switch');
          });
          
          it('has a prefix of 4936 and a length of ' + strLength, function() {
            detectNetwork('4936' + str).should.equal('Switch');
          });

          it('has a prefix of 6333 and a length of ' + strLength, function() {
            detectNetwork('6333' + str).should.equal('Switch');
          });

          it('has a prefix of 6759 and a length of ' + strLength, function() {
            detectNetwork('6759' + str).should.equal('Switch');
          });
        })(strLength, str)
      }

for (let strLength = 16; strLength <= 19; strLength++) {
    if(strLength === 17) { continue; }
       str = '';
    for(k = 0; k <strLength - 6; k++) {
      str += '1';
    }
        (function(strLength, str) {
          it('has a prefix of 564182 and a length of ' + strLength, function() {
            detectNetwork('564182' + str).should.equal('Switch');
          });

          it('has a prefix of 633110 and a length of ' + strLength, function() {
            detectNetwork('633110' + str).should.equal('Switch');
          });
        })(strLength, str)
      }

});























