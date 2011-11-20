var currURL;
var currName;

function readFeed( url )
{
    currURL = url;
	
    $.jGFeed( currURL, parseFeeds, 5 );
};

function changeName()
{
    $.jGFeed( currURL, parseFeeds, 5 );
}

/**
 * Takes in an array of feeds, which contain arrays of google feed API entries,
 * and adds their data to the screen
 */
function parseFeeds( feeds )
{
    var name = $("#teamNameInput")[ 0 ].value;

	// Check for errors
	if(!feeds) {
		// there was an error
		return false;
	}
	
	//clear the content in the div for the next feed.
	$("#feedContent").empty();
	
	// do whatever you want with feeds here
	for( var i = 0; i < feeds.entries.length; i++ ) 
	{
		var entry = feeds.entries[i];
		// Entry title
		var title = entry.title.replace( "Redskins", name );  //scrub( entry.title );
		var pubDate = entry.publishedDate;
		//use the snippet length to determine where to place the expander link
		var snippet = entry.contentSnippet.replace( "Redskins", name );
//		var content = entry.content;
		var link = entry.link;

                //look for Redskins in categories, if we don't find it, continue'
		var catArray = entry.categories;
                if( catArray.length > 0 )
                {
                    var foundRedskins = false;
                    for( var currCat = 0; currCat < catArray.length; currCat++ )
                    {
			if( catArray[ currCat ] == "Redskins" )
                            foundRedskins = true;
                    }
                    if( !foundRedskins )
                        continue;
                }
		
		var html = "<div class=\"entry\"><h2 class=\"postTitle\">" + title + "<\/h2>";
		html += "<em class=\"date\">" + pubDate + "</em>";
		html += "<p class=\"description\">" + snippet + "</p>";
//		html += "<div class=\"expandable\" id=\"content\">" + content + "</div>";
//		html += "<a href=\"" + link + "\" target=\"_blank\">Go to site >><\/a><\/div>";
 
		//put that feed content on the screen!
		$('#feedContent').append($(html));
	}

        scrub( $('#feedContent')[ 0 ] );
  	// simple example, using all default options unless overridden globally
/*	$('div.expandable').expander({
	    slicePoint:       snippet.length,  // default is 100
	    //expandPrefix:     ' ', // default is '... '
	    //expandText:       '[...]', // default is 'read more'
	    //collapseTimer:    5000, // re-collapses after 5 seconds; default is 0, so no re-collapsing
	    //userCollapseText: '[^]'  // default is 'read less'
	    // beforeExpand: function() {
      		// $('div.expandable').replace("Redskins", "*******")
    },
  	});*/
}

/**
 * String -> String
 * Takes in a string and returns a copy of it where all instances
 * of "Redskins" have been replaced with "********"
 */
function scrub( toScrub )
{
    var inner = toScrub.innerHTML;
    var before = inner;
    if( inner )
    {
        toScrub.innerHTML.replace( "Redskins", "*******" );
    }

    if( toScrub.childNodes )
    {
        //clean.childNodes = new Array();
        for( var i = 0; i < toScrub.childNodes.length; i++ )
        {
            scrub( toScrub.childNodes[ i ]);
            //alert( "Scrubbing a child " + toScrub.childNodes[ i ] )
            //clean.childNodes[ i ] = scrub( toScrub.childNodes[ i ])
        }
    }
}