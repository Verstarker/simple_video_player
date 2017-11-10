// Old Data
// var youtubeData = {
//     "videos": ['PFDElc5sfSM', 'TqQrkDXcDWU', 'm0ALrAykT38', 'wLww3KpLEoo']
// };

$('document').ready(function($){

// Video List
var videos = null;

// DOM Elements
var videoList = $('.video-list'),
    searchbox = $('.search-box'),
    heading = $('h2'),
    categoryList = $('.category-list');
    player = $('#player');

function init() {
    // Get videos from JSON file
    $.getJSON("json/videos.json", function(data){
        videos = data.videos;
        displayVideos(videos);
    })
    $.getJSON("json/categories.json", function(data){
        categories = data.categories;
        displayCategories(categories);
    })
    searchbox.on('keyup', function(evt){
        evt.preventDefault;
        if (evt.which === 13) {
            getVideoByID($(this));
            getVideoByCategory($(this));
        }
    });
}

function getVideoByCategory(searchbox) {
    var inputValue = searchbox.val();
    $.each(videos, function(i, video){
        if(video.category === inputValue){
            displayVideos([video]);
        }
    });
}

function getVideoByID(searchbox) {
    var inputValue = searchbox.val();
    $.each(videos, function(i, video){
        if(video.id === inputValue){
            displayVideos([video]);
        }
    });
    // if (videos.indexOf(inputValue) !== -1) {
    //     displayVideos([inputValue]);
    // }
}

function getHTMLVideoItem(video){
    return `<div data-id="${video.id}" class="video-list--item">
                <img src=https://img.youtube.com/vi/${video.id}/0.jpg></img>
                <div>
                    <h3>${video.title}</h3>
                    <p>Description goes here.</p>
                </div>
            </div>`;
};

// Loop through and display
function displayVideos(videos) {
    var s = '';
    $.each(videos, function(i, video) {
        s += getHTMLVideoItem(video);
    });
    // Set inner HTML of video list container with items
    videoList.html(s);
    // Target the videos
    var videos = $('.video-list--item');
    // Loop through and add event click listeners
    $.each(videos, function(i, video) {
        $(this).on('click', function(){
            playVideo($(this));
        });
    });
};

function getHTMLCategoryItem(category){
    return `<li data-category="${category.slug}" class="category-list--item">
                ${category.title}
            </li>`;
};


function displayCategories(categories) {
    var s = '';
    $.each(categories, function(i, category) {
        s += getHTMLCategoryItem(category);
    });
    // Set inner HTML of video list container with items
    categoryList.html(s);
    // Target the categories
    var categories = $('.category-list--item');
    // Loop through and add event click listeners
    $.each(categories, function(i, category) {
        $(this).on('click', function(){
            //playVideo($(this));
            var category = $(this).data(category);
            getVideosByCategory($(this));
        });
    });
}
/**
 * Get videos by their category
 * @param  {Category} category
 */
function getVideosByCategory(category) {
    //Create empty array
    var a = [];
    // Loop through the videos
    $.each(videos, function(i, video) {
        // If video catgeory equals category, add the video to array
        // if(video.category == ){
        //     ;
        // }
    })
        

    // Display the videos
}

function playVideo(listItem) {
    var videoID = listItem.data('id');
    player.attr('src', 'http://www.youtube.com/embed/' + videoID + '?autoplay=1');
};

init();

});