// Events.js //
WaitForIt();
var index = 0;
var queue = GetQueue();
UpdateImage();

// Exit Button
$("#exit").click(function(){ window.close(); });

// Refresh Button
if ( $("#refreshButton").find('i').hasClass('fa-spin') ) return false;
$("#refreshButton").click(function(){
	//SpinButton();
	WaitForIt();
	index = 0;
	queue = GetQueue();
	UpdateImage();
	StopSpinButton();
});

// Next Button
$("#nextButton").click(function() { MoveNext(); });
function MoveNext()
{
	if (index == queue.length -1) return false;
	WaitForIt();
	index++;
	UpdateImage();
}

// Prev Button
$("#prevButton").click(function(){ MovePrev(); });
function MovePrev()
{
	if (index == 0) return false;
	WaitForIt();
	index--;
	UpdateImage();
}

// Settings Button
$("#settingsButton").click(function(){ ToggleSettingsPage(); });
$("#backButton").click(function(){ ToggleSettingsPage(); });
function ToggleSettingsPage()
{
	$("#mainContainer").slideToggle();
	$("#settingsContainer").slideToggle();
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


// The Refresh button spins after you click it
function SpinButton()
{
	$("#refreshButton").find('i').addClass('fa-spin');
}

function StopSpinButton()
{
	$("#refreshButton").find('i').removeClass('fa-spin');
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