// Tests.js //

// Test Template
// module("File - Function")
//test( "Test Name", function() {
//  var expected = "something hardcoded";
//  var actual = FunctionYouAreTesting();
//  equal(actual, expected, "How it passed");
//});

/***** /* HELPERS.JS */ /*****/
module("Helpers - CleanLink");
test("Good Imgur Resource", function() {
	var link = "http://.i.imgur.com/assman.jpeg";
	var expected = '<img id="picture" src="http://.i.imgur.com/assman.jpeg"/>'
	var actual = CleanLink(link);
	equal(actual, expected, "Returned good element");
});

test("Rough Imgur Resource", function(){
	var link = "http://imgur.com/assman";
	var expected = '<img id="picture" src="http://i.imgur.com/assman.png"/>'
	var actual = CleanLink(link);
	equal(actual, expected, "Returned good element");
});

test("YouTube Link", function(){
	var link = "http://www.youtube.com/watch?v=iyJ3fcvpEFI";
	var expected = '<iframe id="picture" width="300" height="300" src="http://www.youtube.com/embed/iyJ3fcvpEFI" frameborder="0" allowfullscreen></iframe>';
	var actual = CleanLink(link);
	equal(actual, expected, "Returned good element");
})

test("Imgur Album", function(){
	var link = "http://imgur.com/a/yQiWb#0";
	var expected = '<iframe id="picture" class="imgur-album" width="300" height="300" frameborder="0" src="http://imgur.com/a/yQiWb//embed"></iframe>';
	var actual = CleanLink(link);
	equal(actual, expected, "Returned good element");
})

/***** /* QUEUE.JS */ /*****/
var LinkList = GetListOfLinks();
module("Queue.js - GetListOfLinks")
test("List isn't null", function(){
	var actual = LinkList;
	ok(actual != null, "GetListOfLinks did not return null");
});

test("List has at least one value", function(){
	var actual = LinkList.length;
	var limit = 0;
	ok(actual > limit, "List has at least one");
});

test("List Contains Links", function(){
	var looksOk = true;
	for (var i=0 ; i < LinkList.length ; i++)
		if (LinkList[i].indexOf("http") == -1)
			looksOk = false;
	ok(looksOk == true, "Link list contains valid links");
});

test("Get Queue isn't null", function(){
	var actual = GetQueue();
	ok(actual != null, "GetQueue did not return null");
});

/***** /* EVENTS.JS */ /*****/
module("Events.js - Next/Prev");
test("Next advances index", function(){
	SetIndex(3);
	MoveNext();
	var actual = GetIndex();
	var expected = 4;
	equal(actual, expected, "Next advanced index");
});

test("Prev backed up index", function(){
	SetIndex(9);
	MovePrev();
	var actual = GetIndex();
	var expected = 8;
	equal(actual, expected, "Prev backed up index");
});

test("Next stops at limit", function(){
	var expected = SetIndex(LinkList.length -1);
	expected = 24;
	MoveNext();
	var actual = GetIndex();
	equal(actual, expected, "Next stopped at end of queue");
});

/***** /* HARHCODES.JS */ /*****/
module("HardCodes.js - GetRandomFromHardCodes")
test("100 != Null", function(){
	var test = true;
	for (var i=0 ; i<100 ; i++)
		if (GetRandomFromHardCodes() == null)
			test = false;
	ok(test, "100 Randoms were legit");
});

test("Passing in dumb link gets a random", function(){
	var link = "not even remotely a link (I hope not at least)";
	var actual = CleanLink(link);
	var HardCodes = GetHardCodes();
	ok($.inArray(actual, HardCodes) == -1, "Cleaning a dumb link returned a random");
});

/***** /* DATA.JS */ /*****/
module("Data.js - Get/Save Shuffle")
test("Can save and get shuffle", function(){
	var expected = true;
	SaveShuffleOption(expected);
	ok(localStorage["shuffle"] != null, "Successfully wrote non null to localStorage");
	var actual = GetShuffleOption();
	equal(actual, expected, "Retrieved saved value from localStorage");
	// Clear cache
	localStorage.removeItem("shuffle");
	ok(localStorage["shuffle"] == null, "Cleared cache");
});
module("Data.js - Get/Save remember index");
test("Can save and get remember index", function(){
	var expected = true;
	SaveRememberIndexOption(expected);
	ok(localStorage["remember"] != null, "Successfully wrote non null to localStorage");
	var actual = GetRememberIndexOption();
	equal(actual, expected, "Retrieved saved value from localStorage");
	// Clear cache
	localStorage.removeItem("remember");
	ok(localStorage["remember"] == null, "Cleared cache");
});
module("Data.js - Get/Save last index");
test("Can save and get last index", function(){
	var expected = 9;
	SaveIndex(expected);
	ok(localStorage["index"] != null, "Saved a non null index");
	var actual = GetSavedIndex();
	equal(actual, expected, "Got index back");
	// Clear
	localStorage.removeItem("index");
	ok(localStorage["index"] == null, "Cleared cache");
});