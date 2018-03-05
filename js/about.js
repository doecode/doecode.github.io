const ABOUT_IMG_URLS = [
    './images/DOEcodeFeatures_main710px-min.png',
    './images/DOEcodeFeatures_doi710px-min.png',
    './images/DOEcodeFeatures_Repository710px-min.png',
    './images/DOEcodeFeatures_Catalog710px-min.png',
    './images/DOEcodeFeatures_Policy710px-min.png',
    './images/DOEcodeFeatures_GitHub710px-min.png',
    './images/DOEcodeFeatures_SocialCode710px-min.png',
    './images/DOEcodeFeatures_Easy710px-min.png'
];

const ABOUT_TOP_URLS = [
    './images/Discover-min.png', './images/Discover_hover-min.png',
    './images/Create-min.png', './images/Create_hover-min.png',
    './images/Submit-min.png', './images/Submit_hover-min.png'
];

/*Handles the 3 images on teh top of the about page*/
var handleAboutTopMouseEnter = function () {
    var dataHover = $(this).data('hover');
    $(this).attr('src', ABOUT_TOP_URLS[parseInt(dataHover)]);
};

/*Turns about page image back to normal when you are no longer hovering over*/
var handleAboutTopMouseLeave = function () {
    var dataNoHover = $(this).data('nohover');
    $(this).attr('src', ABOUT_TOP_URLS[parseInt(dataNoHover)]);
};

/*Handles the silly image in the center of the about page*/
var handleAboutMouseEnter = function () {
    var dataHover = $(this).data('hover');
    $("#about-doecode-features").attr('src', ABOUT_IMG_URLS[parseInt(dataHover)]);
};

/*Turns about page image back to normal when you are no longer hovering over*/
var handleAboutMouseLeave = function () {
    $("#about-doecode-features").attr('src', ABOUT_IMG_URLS[0]);
};


/*Make the top 3 image hovers work*/
$(".about-top-img").hover(handleAboutTopMouseEnter, handleAboutTopMouseLeave);
$(".about-urls-area").hover(handleAboutMouseEnter, handleAboutMouseLeave);
/*Had to add false href's to these to pass 508 compliance. This is here to prevent the clicking from doing anything*/
$(".about-urls-area").on('click', function (event) {
    event.preventDefault();
});

