// Helpers.js //


/* CLEANLINK(LINK) */
/*
	This Function takes in a reddit link and creates
	A valid html element out of it.  If given an imgur link,
	It makes and <img src=""/> out of it.  If given a YouTube video 
	Or an imgur album, it returnes an <iframe>
*/
function CleanLink(link) {
    //TODO: Add support for gallery links

    // Clean imgur link
    if (link.indexOf('http://i.imgur.com') !== -1) {
        return GetIMGElement(link);
    }

    // Imgur Gallery link
    if (link.indexOf('imgur.com/gallery') !== -1) {
        var strippedLink = link.replace('gallery/', '');
        // If trailing "/"
        if (strippedLink.slice(-1) == '/') strippedLink = strippedLink.substring(0, strippedLink.length - 1);
        var strippedLinkAgain = strippedLink.replace('imgur.com', 'i.imgur.com') + '.jpg';
        return GetIMGElement(strippedLinkAgain);
    }

    // Imgur Album
    if (link.indexOf('imgur.com/a/') !== -1) {
        // This gets messy.
        var key = link.substring(link.indexOf('/a/' + 3));

        // Sometimes the imgur album will have an anchor tag that screws up the embed link
        if (key.indexOf('#0') !== -1) {
            key = key.substring(0, key.length - 2) + '/';
        }

        var element = '<iframe id="picture" class="imgur-album" width="300" height="300" frameborder="0" src="' + key + '/embed"></iframe>'
        return element;
    }

    // Regular Imgur link
    if (link.indexOf('http://imgur.com') !== -1 && link.indexOf('imgur.com/a/') == -1) {
        var fixed_link = link.substring(0, 7) + 'i.' + link.substring(7) + '.png';
        return GetIMGElement(fixed_link);
    }

    // YouTube link
    if (link.indexOf('www.youtube.com') !== -1) {
        var key = link.substring(link.indexOf('=') + 1);
        var element = '<iframe id="picture" width="300" height="300" src="http://www.youtube.com/embed/' + key + '" frameborder="0" allowfullscreen></iframe>'
        return element;
    }

    // Unknown site, but might be a valid IMG resource
    if (link.indexOf('.jpg') !== -1 || link.indexOf('.png') !== -1 || link.indexOf('.jpeg') !== -1  || link.indexOf('.gif') !== -1) {
        return GetIMGElement(link);
    }

    // If the link was bad, just get a hard-coded one
    console.log("Fall through: " + link);
    return GetRandomFromHardCodes();

}

function GetIMGElement(src)
{
    return '<img id="picture" src="' + src + '"/>';
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};