
	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
        center: listings.geometry.coordinates, // starting position
        zoom: 11 // starting zoom
    });

    map.addControl(new mapboxgl.FullscreenControl());
    // console.log(listings.geometry.coordinates)

    const markerHeight = 50;
    const markerRadius = 10;
    const linearOffset = 25;
    const popupOffsets = {
        'top': [0, 0],
        'top-left': [0, 0],
        'top-right': [0, 0],
        'bottom': [0, -markerHeight],
        'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'left': [markerRadius, (markerHeight - markerRadius) * -1],
        'right': [-markerRadius, (markerHeight - markerRadius) * -1]
    };

    // Create a popup
    const popup = new mapboxgl.Popup({ offset: popupOffsets })
    .setHTML(`<h5>${listings.location}</h5><p>Exact Loaction will be provided after location</p>`);

    // Create a marker and attach the popup
    new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listings.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);