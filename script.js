var scrollIndex  = 900
var selectedMood;
var selectedLoneliness;
var selectedSchool;
var discoveredAlbum;
var spotifyLink;
var youtubeLink;

$(document).ready(function(){
    window.scrollTo(0, 0);
    $("body").css({"overflow":"hidden"});
    $(".scrollbutton").off().on('click',function() {
        console.log('bam!');
        $('html, body').animate({scrollTop : scrollIndex},600);
        scrollIndex *= 2;
        return false;
    });
    $("#generateButton").on('click', function() {
        DiscoverAlbum();  
    });

    function DiscoverAlbum() {
        selectedMood = $("#mood-select").val();
        selectedLoneliness = $("#lonely-select").val();
        selectedSchool = $("#school-select").val();
        switch (selectedMood) {
            case '0':
                switch (selectedLoneliness) {
                    case '0':
                        switch (selectedSchool) {
                            case '0':
                                discoveredAlbum = "warning";
                                break;
                            case '1':
                                discoveredAlbum = "warning";
                                break;
                        }
                        break;
                    case '1':
                            switch (selectedSchool) {
                                case '0':
                                    discoveredAlbum = "ai";
                                    break;
                                case '1':
                                    discoveredAlbum = "warning";
                                    break;
                            }
                        break;
                }
                break;
            case '1':
                    switch (selectedLoneliness) {
                        case '0':
                            switch (selectedSchool) {
                                case '0':
                                    discoveredAlbum = "smoothedout";
                                    break;
                                case '1':
                                    discoveredAlbum = "dookie";
                                    break;
                            }
                            break;
                        case '1':
                                switch (selectedSchool) {
                                    case '0':
                                        discoveredAlbum = "kerplunk";
                                        break;
                                    case '1':
                                        discoveredAlbum = "kerplunk";
                                        break;
                                }
                            break;
                    }    
                    break;
            case '2':
                    switch (selectedLoneliness) {
                        case '0':
                            switch (selectedSchool) {
                                case '0':
                                        discoveredAlbum = "21cb";
                                        break;
                                case '1':
                                        discoveredAlbum = "21cb";
                                        break;
                                }
                                break;
                        case '1':
                                switch (selectedSchool) {
                                    case '0':
                                        discoveredAlbum = "21cb";
                                         break;
                                     case '1':
                                        discoveredAlbum = "21cb";
                                        break;
                                    }
                                break;
                        }    
                        break;
            case '3':
                    switch (selectedLoneliness) {
                        case '0':
                            switch (selectedSchool) {
                                case '0':
                                        discoveredAlbum = "dookie";
                                        break;
                                case '1':
                                        discoveredAlbum = "nimrod";
                                        break;
                                }
                                break;
                        case '1':
                                switch (selectedSchool) {
                                    case '0':
                                            discoveredAlbum = "dookie";
                                            break;
                                    case '1':
                                            discoveredAlbum = "nimrod";
                                            break;
                                    }
                                break;
                        }    
                        break;
            case '4':
                    switch (selectedLoneliness) {
                        case '0':
                            switch (selectedSchool) {
                                case '0':
                                        discoveredAlbum = "insomniac";
                                        break;
                                case '1':
                                        discoveredAlbum = "insomniac";
                                        break;
                                }
                                break;
                        case '1':
                                switch (selectedSchool) {
                                    case '0':
                                            discoveredAlbum = "insomniac";
                                            break;
                                    case '1':
                                            discoveredAlbum = "insomniac";
                                            break;
                                    }
                                break;
                        }    
                        break;
            case '5':
                    switch (selectedLoneliness) {
                        case '0':
                            switch (selectedSchool) {
                                case '0':
                                        discoveredAlbum = "21cb";
                                        break;
                                case '1':
                                        discoveredAlbum = "ai";
                                        break;
                                }
                                break;
                        case '1':
                                switch (selectedSchool) {
                                    case '0':
                                            discoveredAlbum = "21cb";
                                            break;
                                    case '1':
                                            discoveredAlbum = "ai";
                                            break;
                                    }
                                break;
                        }    
                        break;
            case '6':
                    switch (selectedLoneliness) {
                        case '0':
                            switch (selectedSchool) {
                                case '0':
                                        discoveredAlbum = "unodostre";
                                        break;
                                case '1':
                                        discoveredAlbum = "unodostre";
                                        break;
                                }
                                break;
                        case '1':
                                switch (selectedSchool) {
                                    case '0':
                                            discoveredAlbum = "unodostre";
                                            break;
                                    case '1':
                                            discoveredAlbum = "unodostre";
                                            break;
                                    }
                                break;
                        }    
                        break;
            case '7':
                    switch (selectedLoneliness) {
                        case '0':
                            switch (selectedSchool) {
                                case '0':
                                        discoveredAlbum = "fatherofall";
                                        break;
                                case '1':
                                        discoveredAlbum = "fatherofall";
                                        break;
                                }
                                break;
                        case '1':
                                switch (selectedSchool) {
                                    case '0':
                                            discoveredAlbum = "fatherofall";
                                            break;
                                    case '1':
                                            discoveredAlbum = "fatherofall";
                                            break;
                                    }
                                break;
                        }    
                        break;   
        
        }
        console.log(selectedMood);
        console.log(selectedSchool);
        console.log(selectedLoneliness);
        console.log(discoveredAlbum);
        switch (discoveredAlbum) {
            case "smoothedout":
                $("#albumcover").attr("src","images/smoothedout.jpg");
                $("#albumname").html("1039 / SMOOTHED OUT SLAPPY HOURS")
                spotifyLink = "https://open.spotify.com/album/5xlutZ0sYfJQjVIBOkkeW8?si=OuD7aAu0Rf-nOydHVBjWYA";
                youtubeLink = "https://www.youtube.com/watch?v=mCOnOyTdu8s&list=PLnBDrwd58yXKZoEkkc5PQXyeUjOCp35xF";
                break;
            case "kerplunk":
                    $("#albumcover").attr("src","images/kerplunk.jpg");
                    $("#albumname").html("KERPLUNK")
                    spotifyLink = "https://open.spotify.com/album/1UShup0VvfxhxS7j3Omxh2?si=hUG9H51bR2WJ72LgwuofMA";
                    youtubeLink = "https://www.youtube.com/watch?v=ksJ1zJkV7LE&list=PLiNtqwnjKvGYXKnvzqINmQsp956poHRVU";
                    break;
            case "dookie":
                        $("#albumcover").attr("src","images/dookie.jpg");
                        $("#albumname").html("DOOKIE")
                        spotifyLink = "https://open.spotify.com/album/4uG8q3GPuWHQlRbswMIRS6?si=Dkc8ZoeqRReHPQOkx6lWRQ";
                        youtubeLink = "https://www.youtube.com/watch?v=XLjo0lY450c&list=PL81_CtYCym28M8c2NFVCEIEBDCu6o1tXw";
                        break;
            case "insomniac":
                    $("#albumcover").attr("src","images/insomniac.jpg");
                    $("#albumname").html("INSOMNIAC")
                    spotifyLink = "https://open.spotify.com/album/7d3nOmFvL51roNElAdpi9d?si=HEhlxpa0RoKkmbvhKrYrMQ";
                    youtubeLink = "https://www.youtube.com/watch?v=YnHtIUY7WZ0&list=PLqcrQthqM6NKuMvcQ5k7UrRS10LWWpJjG";
                    break;
            case "nimrod":
                        $("#albumcover").attr("src","images/nimrod.jpg");
                        $("#albumname").html("NIMROD")
                        spotifyLink = "https://open.spotify.com/album/3x2uer6Xh0d5rF8toWpRDA?si=oCbyy1pOTqy22KyoQFszfQ";
                        youtubeLink = "https://www.youtube.com/watch?v=vouf6QP2tzU&list=PLnBDrwd58yXKZxDpJNrdcrpofx8_gogcj";
                        break;
            case "warning":
                    $("#albumcover").attr("src","images/warning.jpg");
                    $("#albumname").html("WARNING")
                    spotifyLink = "https://open.spotify.com/album/3ifIxGNsG1XmLdoanRRIWB?si=SVDIcuJtQZ60xBb2rOta3Q";
                    youtubeLink = "https://www.youtube.com/watch?v=U51OB-jIwXM&list=PLqcrQthqM6NJ0d7Sd5wcL1UF3Kgrjg0wE";
                    break;
            case "ai":
                        $("#albumcover").attr("src","images/americanidiot.jpg");
                        $("#albumname").html("AMERICAN IDIOT")
                        spotifyLink = "https://open.spotify.com/album/5Qhn2FpGWmTjCuntF09j7g?si=Td4TGGtcSw2vUbd6ufat-g";
                        youtubeLink = "https://www.youtube.com/watch?v=VyV54YwPAkk&list=PLhkWe_r3g_rUh1LmAyTwkXToOIUnQXRDN";
                        break;
            case "21cb":
                        $("#albumcover").attr("src","images/21stcb.jpg");
                        $("#albumname").html("21ST CENTURY BREAKDOWN")
                        spotifyLink = "https://open.spotify.com/album/1AHZd3C3S8m8fFrhFxyk79?si=2W4NtvORQ7CWp_FiVx3fpA";
                        youtubeLink = "https://www.youtube.com/watch?v=XTWUD4mi_GE&list=PL81_CtYCym29fZ2TwVXjyEspKzL47LOxL";
                        break;
            case "unodostre":
                        $("#albumcover").attr("src","images/unodostre.jpg");
                        $("#albumname").html("UNO/DOS/TRE")
                        spotifyLink = "https://open.spotify.com/playlist/4GpxtulydyDjic1VnK6Vly?si=08cba253166d483c";
                        youtubeLink = "https://www.youtube.com/watch?v=0ulPf375Rs4&list=PL-wYnV1wZGnf6Kyc_rFX5LkcoGe4fdhcN";
                        break;

            case "fatherofall":
                        $("#albumcover").attr("src","images/fatherofall.jpg");
                        $("#albumname").html("FATHER OF ALL")
                        spotifyLink = "https://open.spotify.com/album/7ij8wQxCAexZiXZbMOHcxE?si=Q54fsiczRyqeJ6wdF8wopA";
                        youtubeLink = "https://www.youtube.com/watch?v=Kh3eZyD0j8g&list=PLgdd87Ys0TLhiuPnBCHwVHiifIuRq6lJw&index=1";
                        break;
        }

    }
    
    $("#spotifybutton").on('click', function() {
        console.log(spotifyLink);
        window.open(spotifyLink);
    });
    $("#youtubebutton").on('click', function() {
        console.log(youtubeLink);
        window.open(youtubeLink);
    });
});