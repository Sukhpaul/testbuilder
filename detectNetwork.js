// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

var detectNetwork = function(cardNumber) {
	let prefix = +(cardNumber[0] + cardNumber[1]);
	let cardLength = cardNumber.length;
	
	let visa = false;
	if(cardNumber[0] === '4') {
		visa = true;
	}

	if(prefix === 38 && cardLength === 14 || prefix === 39 && cardLength === 14) {
		return "Diner's Club";
	}

	if(prefix === 34 && cardLength === 15 || prefix === 37 && cardLength === 15) {
		return "American Express";
	}

    let switchRe = new RegExp("^4903|^4905|^4911|^4936|^564182|^633110|^6333|^6759");

    if(cardNumber.search(switchRe) !== -1 && cardLength !== 13) {
        visa = false;
    }

    if(visa && cardLength === 13 || visa && cardLength === 16 || visa && cardLength === 19) {
    	return 'Visa';
    }

    if(prefix >= 51 && prefix <= 55 && cardLength === 16) {
        return 'MasterCard';
    }

//=======================================================================================================
//      Discover Network
//=======================================================================================================
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

    let discPrefix = +(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]);


    if(prefix === 65 && cardLength === 16 || prefix === 65 && cardLength === 19) {
        return 'Discover';
    }

    if(discPrefix === 6011 && cardLength === 16 || discPrefix === 6011 && cardLength === 19) {
        return 'Discover';
    }
    
    for(let i = 644; i <= 649; i++) {
        let cardPrefix = cardNumber[0] + cardNumber[1] + cardNumber[2];
        
        if(i === +cardPrefix && cardLength === 16 || i === +cardPrefix && cardLength === 19) {
            return 'Discover';
        }
    }

//=======================================================================================================
//      Maestro Network
//=======================================================================================================
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

    let re = new RegExp("^5018|^5020|^5038|^6304");

    if(cardNumber.search(re) !== -1 && cardLength >= 12 && cardLength <= 19) {
        return 'Maestro';
    }


//=======================================================================================================
//      China UnionPay Network
//=======================================================================================================

// China UnionPay always has a prefix of 622126-622925, 624-626, 
// or 6282-6288 and a length of 16-19.

    let chinaRe = new RegExp("^62[4-6]|^628[2-8]");
        
    if(cardNumber.search(chinaRe) !== -1 && cardLength >= 16  && cardLength <= 19) {
        return 'China UnionPay';
    }

    let chinaPrefix = cardNumber.split('').slice(0,6).join('');

    for(let j = 622126; j <= 622925; j++) {
        
        if(j === +chinaPrefix && cardLength >=16 && cardLength <= 19) {
            return 'China UnionPay';
        }
    };

//=======================================================================================================
//      Switch Network
//=======================================================================================================

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 
// and a length of 16, 18, or 19.
    
   if(cardNumber.search(switchRe) !== -1 && cardLength === 16 || cardNumber.search(switchRe) !== -1 && cardLength === 18 || cardNumber.search(switchRe) !== -1 && cardLength === 19) {
        return 'Switch';
   }
    
};




























