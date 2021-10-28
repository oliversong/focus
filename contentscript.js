chrome.extension.sendMessage({check:"what"},function(response){
	if(response.answer=='yes'){
		injectjs('script.js');
		//injectcss('shoop.css');
	};
});

function injectjs(name){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(name);
	s.onload = function() {
	    this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(s);
}

function injectcss(name){
	var path = chrome.extension.getURL(name);
	style = '<link rel="stylesheet" href="'+path+'" type="text/css" media="screen">'
	parser = new DOMParser();
	stylenode = parser.parseFromString(style,"text/xml");
	document.getElementsByTagName("head")[0].appendChild(stylenode.firstChild);
}
