var sentence = prompt("enter a sentence please:");

console.log(sentence);

// alert(sentence)

function firstLastCapt(phrase){
  var first = phrase.charAt(0).toUpperCase();
  var last = phrase.charAt(phrase.length-1).toUpperCase();
  return first + last;
}

function lastFirstCapt(phrase){
  var first = phrase.charAt(0).toUpperCase();
  var last = phrase.charAt(phrase.length-1).toUpperCase();
  return last + first;
}
// alert(firstLastCapt(sentence))
// alert(lastFirstCapt(sentence))

function findLetters(phrase){
  return lastFirstCapt(phrase) + firstLastCapt(phrase);
}
//
// alert(findLetters(sentence))

function concatsentence(phrase){
  return phrase + lastFirstCapt(phrase);
}

// alert(concatsentence(sentence))

function fourthfunction(phrase){
  var len = phrase.length;
  var half_len = (len/2-.1).toFixed();
  var new_phrase=phrase.charAt(half_len).concat(phrase);
  var final_phrase=new_phrase.concat(lastFirstCapt(phrase));
  return final_phrase;
}

// alert(fourthfunction(sentence))

function reverseString(str){
  var splitString = str.split("");
  var reverseString = splitString.reverse();
  var joinedString = reverseString.join("");
  return joinedString;
}

// alert(reverseString(sentence));
// alert(reverseString(fourthfunction(sentence)));

$(document).ready(function(){
  $(document.getElementById("altered")).click(function(){
    alert(reverseString(fourthfunction(sentence)));
});

$(document.getElementById("original")).click(function()
{alert(sentence);
});
});
