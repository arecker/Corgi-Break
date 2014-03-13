// Repopulate.js //

// Shuffle option
if (GetShuffleOption())
{
	$("#shuffle").attr("checked", true);
}

// Save index
if (GetRememberIndexOption())
{
	$("#saveLast").attr("checked", true);
}