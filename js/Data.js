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
	return Boolean(option);
}

function SaveRememberIndexOption(bool)
{
	localStorage.setItem("remember", bool);
}

function GetRememberIndexOption()
{
	var option = localStorage.getItem("remember");
	if (option == null) return false;
	return Boolean(option);
}