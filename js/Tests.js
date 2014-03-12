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
	var expected = '<iframe id="picture" class="imgur-album" width="300" height="300" frameborder="0" src="http://imgur.com/a/yQiWb/embed"></iframe>';
	var actual = CleanLink(link);
	equal(actual, expected, "Returned good element");
})