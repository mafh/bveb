$(document).ready(function() {
    $("#cities").on("change", function() {
        send_form();
    });

    $("#saturday, #safe").on("click", function() {
        send_form();
    });

    function send_form() {
        var data = $("#offices_form").serialize();
        $.post("/local/ajax/offices.php", {data : data}, function(data) {
            $("#ajax").html(data);
            popupEvents();
            map.updateMarkers();
            placesLocation(currentPlaces);
        });
    }

    placesLocation(currentPlaces);

});

var $container;
var geolocationStatus = false;

function placesLocation(currentPlaces) {

    // console.log(currentPlaces);

    var $switch = $('#location-switch');
    $container = $('.js-places');
    var $place = $container.find('.js-place');

    $switch.off().on('change', function(event) {
        event.preventDefault();
        if ($(this).is(':checked') === true) {
            checkLocation();
        } else {
            if (geolocationStatus) {
                $container.isotope({ sortBy : 'original-order' });
                $place.find('.place-distance').addClass('is-hidden');
            }
            $container.find('.places-location-error').remove();
        }
    });

    if ($switch.is(':checked') === true) {
        checkLocation();
    }

    function checkLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
        }
        else {
            $('<div class="places-location-error">Ваш браузер не поддерживает геолокацию</div>').prependTo($container);
        }
    }

    function geolocationSuccess(position) {
        var place, latlng, distance,
            mypos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        for(var placeID in currentPlaces) {
            latlng = currentPlaces[placeID].latlng;
            latlng = latlng.split(',');
            place = new google.maps.LatLng(latlng[0], latlng[1]);
            distance = google.maps.geometry.spherical.computeDistanceBetween(mypos, place);

            setSortAttr(placeID, distance);
        }

        $container.isotope({
            itemSelector: '.js-place',
            getSortData: {
                distance: function(elem) {
                    return $(elem).data('distance');
                }
            },
            sortBy : 'distance'
        });

        geolocationStatus = true;
    }

    function geolocationFailure(positionError) {
        $('<div class="places-location-error">Не удалось определить ваше местоположение</div>').prependTo($container);
    }

    function splitToParts(fullKm){
        var kilometers, meters, santimeters, millimeters, rest;
        kilometers = Math.floor(+fullKm);
        rest = +fullKm - kilometers;
        rest *= 1000;
        meters = Math.floor(rest);
        rest -= meters;

        rest *= 100;
        santimeters = Math.floor(rest);
        rest -= santimeters;

        rest *= 10;
        millimeters = +rest.toFixed(2);
        return kilometers + ' км. ' + meters.toString().slice(0, -1) + '0 м.'
    }

    function setSortAttr(placeID, distance) {

        var distance = parseInt(distance);
        var $currentPlace = $place.eq(placeID);

        $currentPlace.attr('data-distance', distance);
        $currentPlace.find('.place-distance').removeClass('is-hidden');


        // console.log(distance);
        // console.log(splitToParts(distance/1000));

        if (distance < 10000) {
            distance = parseInt(distance.toString().slice(0, -1)) + '0 м.';
            $currentPlace.find('.place-distance > span').html(distance);
        } else {
            distance = splitToParts(distance/1000);
            $currentPlace.find('.place-distance > span').html(distance);
        }

    }

    $switch.removeAttr('disabled');
}

function containerRelayout() {
    // console.log('containerRelayout');
    $container.isotope('layout');
}

var styleMap = [
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#12608d"
            }
        ]
    },
]

var map;
var markers = [];

function mapsInit() {
    // console.log('mapsInit');
    if ($("#offices_form").length > 0) map = new Places();
}

function Places() {

    var instance = this;

    var select = $("#offices_form").find('[data-select]');

    var mapItems = [];

    var locations = [];

    var marker;

    var i;

    var bounds = new google.maps.LatLngBounds();

    var markerImage;

    var infowindow = new google.maps.InfoWindow({
        maxWidth: 300,
        content: "Загрузка..."
    });

    google.maps.visualRefresh = true;

    placesMap = new google.maps.Map(document.getElementById('places_map'), mapOptions);

    markerImage = {
        url: '/local/templates/.default/i/map-marker.png',
        url: 'i/map-marker.png',
        size: new google.maps.Size(67, 70),
        anchor: new google.maps.Point(27, 70),
        labelOrigin: new google.maps.Point(27, 35),
    };

    var mapOptions = {
        scrollwheel: false,
        zoom: 3,
        maxZoom: 10,
        center: new google.maps.LatLng(53.898396, 27.542926),
        styles: styleMap
    };

    var infowindow = new google.maps.InfoWindow({
        maxWidth: 300,
        content: "Загрузка..."
    });



    this.getMarkers =  function() {
        locations = [];

        mapItems = currentPlaces;

        $.each(mapItems, function(index, val) {

            var latlng = [];

            var lat = parseFloat(val.latlng.split(',', 2)[0]);
            var lng = parseFloat(val.latlng.split(',', 2)[1]);

            latlng.push(lat);
            latlng.push(lng);

            locations.push(latlng);
        });

        instance.setMarkers();
    }

    this.setMarkers = function() {
        for (i = 0; i < locations.length; i++) {

            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                map: placesMap,
                icon: markerImage,
                html: '<p><b>' + mapItems[i].title + '</b><br/>' + mapItems[i].adress + '</p><p><b>Для физ. лиц:</b><br/>' + mapItems[i].work_fiz + '</p><p><b>Для юр. лиц:</b><br/>' + mapItems[i].work_ur + '</p>'
            });

            google.maps.event.addListener(marker, "click", function () {
                infowindow.open(placesMap, this);
                infowindow.setContent(this.html);
            });

            markers.push(marker);

            bounds.extend(new google.maps.LatLng(locations[i][0], locations[i][1]));

            placesMap.fitBounds(bounds, {padding: [50, 50] });
			var zoom = placesMap.getZoom();
			placesMap.setZoom(zoom > 17 ? 17 : zoom);
        }


        placesMap.setCenter(bounds.getCenter());
    }

    this.updateMarkers =  function() {

        // clear
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }

        markers = [];

        bounds = new google.maps.LatLngBounds();
        instance.getMarkers();
    }

    this.init = function() {
        // console.log('init');
        instance.getMarkers();
    }


    instance.init();

    //need to init/hide tabs after map init
    google.maps.event.addListenerOnce(placesMap, 'tilesloaded', placesTabs);
}


function placesTabs() {

    // console.log('placesTabs');

    var tabs = $('.js-places-tabs');

    var hideCss = {
        'height': '0',
        'overflow': 'hidden'
    };

    var showCss = {
        'height': 'auto',
        'overflow': 'auto'
    };

    $.each(tabs, function(index, val) {

        var tabs = $(val),
            tab = tabs.find('.tabs a'),
            tabContent = tabs.find('.tab-content'),
            activeID = tabs.find('.is-active').attr('href') || tab.eq(0).attr('href');

        var IDList = [];

        $.each(tab, function(index, val) {
            var id = $(this).attr('href');
            IDList.push(id);
            $(id).css(hideCss);
        });

        $(activeID).css(showCss);

        tab.eq(0).addClass('is-active');

        tab.on('click', function(event) {

            event.preventDefault();

            var tab = $(this),
                tabID = tab.attr('href'),
                tabValue = tab.text();

            if (!tab.hasClass('is-active')) {
                tab.addClass('is-active').siblings().removeClass('is-active');

                $.each(IDList, function(index, val) {
                    $(val).css(hideCss);
                });

                $(tabID).css(showCss);

                if (!$('#offices_map').is(':visible')) {
                    map.updateMarkers();
                }

                if (geolocationStatus) {
                    containerRelayout();
                }

            }
        });

    });

    if (geolocationStatus) {
        'geolocationStatus relayout'
        containerRelayout();
    }
}