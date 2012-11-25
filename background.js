chrome.browserAction.setTitle({'title':'Off'});

function toggleIcon(){
	chrome.browserAction.getTitle({},function(title){
		if(title=='On'){
			chrome.browserAction.setTitle({'title':'Off'});
			chrome.browserAction.setIcon({path:"icon.png"});
		}
		else{
			chrome.browserAction.setTitle({'title':'On'});
			chrome.browserAction.setIcon({path:"icon2.png"});
		}
	});
}

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.check == "what")
	    chrome.browserAction.getTitle({},function(title){
	    	if(title=="On"){
	      		sendResponse({answer: "yes"});
	    	};
    	});
	return true;
  });

chrome.browserAction.onClicked.addListener(toggleIcon);