// Hard-coded links //
/*
	This file just contains a list
	of some of the all time highest voted posts
	on /r/corgi.

	If the clean returns a null, it randomly picks a link from this
*/

function GetRandomFromHardCodes()
{
	var HardCodes = GetHardCodes();
	var index = Math.floor(Math.random()*(HardCodes.length));
	return CleanLink(HardCodes[index]);
}

function GetHardCodes()
{
	return [
		"http://i.imgur.com/DLXSjcS.gif",
		"http://i.imgur.com/IgjN3xE.gif",
		"http://i.imgur.com/a7r5bFJ.jpg",
		"http://i.imgur.com/p69VuLF.jpg",
		"http://i.imgur.com/5O0Zn.jpg",
		"http://i.imgur.com/uDuQ9E8.jpg",
		"http://imgur.com/a/lFh8V#0",
		"http://i.imgur.com/H6Veq2V.jpg",
		"http://i.imgur.com/qsFzY.jpg",
		"http://invisiblebread.com/images/wendellkitchenloop.gif",
		"http://i.imgur.com/otm9edr.jpg",
		"http://i.imgur.com/bAUZ6Sa.jpg",
		"http://i.imgur.com/t5yybLH.jpg",
		"http://i.imgur.com/smDw1Wp.gif",
		"http://i.imgur.com/MMRd1oW.jpg",
		"http://i.imgur.com/RDAUhZZ.jpg",
		"http://i.imgur.com/2rZSAwr.jpg",
		"http://i.imgur.com/zYc3iKz.jpg",
		"http://i.imgur.com/jCpJu8n.jpg",
		"http://i.imgur.com/ZVfsM4A.jpg",
		"http://i.imgur.com/W5XN3.jpg",
		"http://i.imgur.com/tDGQS.jpg",
		"http://i.imgur.com/5Y5rxu2.jpg",
		"http://i.imgur.com/DumTLUa.jpg",
		"http://i.imgur.com/kxkIRsQ.gif",
		"http://i.imgur.com/jRt6S.jpg",
	];
}