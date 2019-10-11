// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "new_chess_page") {
		var thisUrl = window.location.href
		var chessPage = thisUrl.substring(0, thisUrl.lastIndexOf("/"));
		var win = window.open(chessPage, '_blank');
    }

    if( request.message === "move_piece") {
		$(".keyboard-move > input").focus().val("g3");
		// var keyboardEvent = new KeyboardEvent('keydown');
		// delete keyboardEvent.which;
		// keyboardEvent.which = 13;
		// document.getElementById('keyy').dispatchEvent(keyboardEvent);
    }

    if( request.message === "permissions") {
    	var iframe = document.createElement('iframe');
		iframe.src = chrome.runtime.getURL('frame.html');
		document.body.appendChild(iframe);
    }
    
  }
);