var restricted = [
  'www.facebook.com','www.google.com/reader/view/','www.twitter.com',
  'www.tumblr.com','news.ycombinator.com','www.youtube.com',
  'www.reddit.com','www.digg.com','www.9gag.com','www.funnyjunk.com',
  'www.cracked.com','www.omegle.com','www.slashdot.org','www.break.com',
  'www.quora.com', 'www.imgur.com', 'www.lifehacker.com', 'www.twitch.tv',
  'www.buzzfeed.com'];
var lens = restricted.length;
for(var i=0;i<lens;i++)
{
	restricted.push(restricted[i].slice(4));
}

var loc = window.location;
var currentURL = loc.host;
var urlpath = loc.pathname;
//console.log(currentURL+urlpath);
//console.log("hoihoihoihoihoi");
if(restricted.indexOf(currentURL)!=-1 || restricted.indexOf(currentURL+urlpath)!=-1){
	blockDat();
}

function blockDat(){
	//console.log("BLOCKING");
	var block = document.createElement('div');
	block.setAttribute('style',"display:block;width:100%;height:100%;z-index:9998;position:fixed;left:0px;top:0px;background-color:#000;opacity:.9;");
	var message = document.createElement('div');
	var mytext=document.createTextNode('FOCUS');
	message.appendChild(mytext);
	message.setAttribute('style',"width:50%;top:25%;left:25%;border-radius:3px;z-index:9999;position:fixed;background-color:#DDD;opacity:1;text-align:center;font-size:90px;font-family:Helvetica;height:100px;padding-top:60px;padding-bottom:50px;line-height:90px !important;color:#333 !important;");
	document.getElementsByTagName("body")[0].appendChild(block);
	document.getElementsByTagName("body")[0].appendChild(message);
	//$('body').append('<div style="display:block;width:100%;height:100%;z-index:9998;position:fixed;left:0px;top:0px;background-color:#000;opacity:.9;"></div>');
	//$('body').append('<div style="width:50%;top:25%;left:25%;border-radius:3px;z-index:9999;position:fixed;background-color:#CCC;opacity:1;text-align:center;font-size:90px;font-family:Helvetica;height:100px;padding-top:60px;padding-bottom:50px;line-height:90px !important;"><div>NOPE</div></div>');
}
