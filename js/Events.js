// Events.js //
var index = 0;
if (GetRememberIndexOption())
{
	index = GetSavedIndex();
}

var queue = []

// Exit Button
$("#exit").click(function(){ window.close(); });

// Refresh Button
if ( $("#refreshButton").find('i').hasClass('fa-spin') ) return false;
$("#refreshButton").click(function(){
	SpinButton();
	WaitForIt();
	index = 0;

	$.when(function(){
		queue = GetQueue();
	}).done(function(){
		UpdateImage();
		StopSpinButton();
	});
});

// Clickable IMG's
// Can't just use hrefs - have to use this method
$("#imageContainer").click(function()
{
	var link = $( this ).find("img").prop('src');
	window.open(link);
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

// Save last position
$("#saveLast").change(function(){
	if($(this).is(":checked")) 
	{
    	SaveRememberIndexOption(true);
    }

    else
    {
    	SaveRememberIndexOption(false);
    }
});

// Shuffle option
$("#shuffle").change(function(){
	if($(this).is(":checked")) 
	{
    	SaveShuffleOption(true);
    }

    else
    {
    	SaveShuffleOption(false);
    }
});

// Donate button
$("#donate").click(function(){
	$("#payPalButton").click();
});

// Blog Link
$("#blog").click(function(){
	window.open("http://alex.reckerfamily.com");
});

// GitHub Link
$("#github").click(function(){
	window.open("http://github.com/arecker/Corgi-Break")
});

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

	// Save Index if needed
	if (GetRememberIndexOption())
	{
		SaveIndex(index);
	}
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


// Document Ready
$( document ).ready(function(){
	queue = GetQueue();
	UpdateImage();
});