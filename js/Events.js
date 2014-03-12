// Events.js //
WaitForIt();
var index = 0;
var queue = GetQueue();

// Exit Button
$("#exit").click(function(){ window.close(); });

// Refresh Button
$("#refreshButton").click(function(){
	WaitForIt();
	index = 0;
	queue = GetQueue();
	UpdateImage();
});

// Next Button
$("#nextButton").click(MoveNext());
function MoveNext()
{
	if (index == queue.length -1) return false;
	WaitForIt();
	index++;
	UpdateImage();
}

// Prev Button
$("#prevButton").click(MovePrev());
function MovePrev()
{
	if (index == 0) return false;
	WaitForIt();
	index--;
	UpdateImage();
}

function UpdateImage()
{
	// Check Prev and Next buttons with Index
	$('.changer') // Resets both buttons
		.addClass('btn-primary')
		.removeAttr('disabled');
	if (index == 0)
		$("#prevButton")
			.removeClass('btn-primary')
			.attr('disabled');
	if (index == queue.length - 1)
		$("#nextButton")
			.removeClass('btn-primary')
			.attr('disabled');

	// Swap out picture
	var newElement = queue[index];
	$(newElement).replaceAll('#picture');
}

// Accessors for testing
function SetIndex(number)
{
	index = number;
	return index;
}

function GetIndex()
{
	return index;
}