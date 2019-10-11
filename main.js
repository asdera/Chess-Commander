var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var commands = ['a' , 'b' , 'c', 'd', 'e', 'f', 'g', 'h'];
var grammar = '#JSGF V1.0; grammar commands; public <command> = (king | queen | bishop | knight | pawn | rook) (A | B | C | D | E | F | G | H) (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8);'

var word = "";

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

console.log(speechRecognitionList[0])
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;


var board = document.querySelector(".board");
var result = document.querySelector(".output > p:nth-child(1)");
var result2 = document.querySelector(".output > p:nth-child(2)");

function convert (input) {
  input = input.toLowerCase();
  return input;
}

document.onkeyup = function(e) {
  e.which = e.which || e.keyCode;
  if (e.which == 13) {
    recognition.start();
    console.log("Enter Key");
  }
}

board.onclick = function() {
  recognition.start();
  console.log("Ready to receive a command.");
}

recognition.onresult = function(event) {
  console.log("hey yo")
  var last = event.results.length - 1;
  var input = event.results[last][0].transcript;
  // input is the recorded phrase
  result.textContent = "You said: " + input;
  var move = convert(input)
  result2.textContent = "Your command is: " + move;

  word = move;
  console.log(word);
  // $(".keyboard-move > input").focus().val("g3");
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log("hey yo")
}

recognition.onnomatch = function(event) {
  result.textContent = "I don't understand";
}

recognition.onerror = function(event) {
  result.textContent = "Error occurred in recognition: " + event.error;
  
}
