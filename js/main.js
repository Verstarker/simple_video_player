// Data
var youtubeData = {
    "videos": ['PFDElc5sfSM', 'TqQrkDXcDWU', 'm0ALrAykT38', 'wLww3KpLEoo']
};

$('document').ready(function($){

// DOM Elements
var videoList = $('.video-list');

function getHTMLItem(youtubeID){
    return `<div class="video-list--item">
                <img src=https://img.youtube.com/vi/${youtubeID}/0.jpg></img>
                <div>
                <h2>Title</h2>
                <p>Description goes here.</p>
                </div>
            </div>`;
};

// Loop through and display
function displayVideos() {
    var s = '';
    $.each(youtubeData.videos, function(i, youtubeID) {
        s += getHTMLItem(youtubeID);
    });
    videoList.html(s);
};

displayVideos();

});