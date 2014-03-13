// Data.js //
// Data access methods to localStorage

function SaveShuffleOption(bool)
{
	localStorage.setItem("shuffle", bool);
}

function GetShuffleOption()
{
	var option = localStorage.getItem("shuffle");
	if (option == null) return false;
	return option === "true";
}

function SaveRememberIndexOption(bool)
{
	localStorage.setItem("remember", bool);
}

function GetRememberIndexOption()
{
	var option = localStorage.getItem("remember");
	if (option == null) return false;
	return option === "true";
}

function SaveIndex(ind)
{
	localStorage.setItem("index", null);
	localStorage.setItem("index", ind);
}

function GetSavedIndex()
{
	var option = localStorage.getItem("index");
	if (option == null) return 0;
	return parseInt(option);
}