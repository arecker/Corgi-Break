// Queue.js //

function GetListOfLinks()
{
	var listOfLinks = new Array();

	$.ajax({
		url: 'http://www.reddit.com/r/corgi/hot.json',
		async: false,
		dataType: "json",

		success: function(returnedData) {
			for (var i=0 ; i<returnedData.data.children.length ; i++)
				listOfLinks.push(returnedData.data.children[i].data.url);
		},

		error: function() {
			// TODO: Handle a failure to handshake reddit
		}
	});

	if (GetShuffleOption())
	{
		return shuffle(listOfLinks);
	}

	return listOfLinks;
}

function GetQueue()
{
	var list = GetListOfLinks();
	var cleanList = new Array();
	for (var i=0 ; i<list.length ; i++)
	{
		cleanList.push(CleanLink(list[i]));
	}
	// TODO: If False, maybe stuff with a randomed cached img?
	return cleanList;
}

// This function Swaps in the Spinning Gif while you wait
function WaitForIt()
{
	var newElement = '<img id="picture" src="icons/spinner.gif" />';
	$(newElement).replaceAll('#picture');
}