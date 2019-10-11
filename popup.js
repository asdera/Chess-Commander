document.addEventListener('DOMContentLoaded', function() {
  function sendMessage (message) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": message});
    });
  }

  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    sendMessage("new_chess_page")
  }, false);

  var makeMoveButton = document.getElementById('makeMove');
  makeMoveButton.addEventListener('click', function() {
    sendMessage("move_piece")
  }, false);

  var allowSpeechButton = document.getElementById('allowSpeech');
  allowSpeechButton.addEventListener('click', function() {
    sendMessage("permissions")
  }, false);

}, false);