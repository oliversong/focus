function toggleIcon(){
	chrome.action.getTitle({},function(title){
		if(title=='On'){
			chrome.action.setTitle({'title':'Off'});
			chrome.action.setIcon({path:"icon.png"});
		}
		else{
			chrome.action.setTitle({'title':'On'});
			chrome.action.setIcon({path:"icon2.png"});
		}
	});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.check == "what")
	    chrome.action.getTitle({},function(title){
	    	if(title=="On"){
	      		sendResponse({answer: "yes"});
	    	};
    	});
	return true;
  });

chrome.action.onClicked.addListener(toggleIcon);
