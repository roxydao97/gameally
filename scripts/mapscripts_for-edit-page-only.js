function initAutocomplete01() {
  var map = new google.maps.Map(document.getElementById('map'), { //edit profile i = 2
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap',
  });
  var map01 = new google.maps.Map(document.getElementById('map01'), { //find match i = 0
    center: new google.maps.LatLng(51.508742,-0.120850),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var map02 = new google.maps.Map(document.getElementById('map02'), { //create match i = 1
    center: new google.maps.LatLng(51.508742,-0.120850),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  // Create the search box and link it to the UI element.
  var input = document.getElementsByClassName('searchbox');
//  var searchBox = [];
  for(i=0; i<input.length;i++) {
    //searchBox = new google.maps.places.SearchBox(input[i]);
    if(i==2) {
      var searchBox = new google.maps.places.SearchBox(input[i]);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input[i]);
      // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
      });
      var markers = [];
      searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    }
    else if (i==0) {
      var searchBox01 = new google.maps.places.SearchBox(input[i]);

      map01.controls[google.maps.ControlPosition.TOP_LEFT].push(input[i]);
      // Bias the SearchBox results towards current map's viewport.
      map01.addListener('bounds_changed', function() {
        searchBox01.setBounds(map01.getBounds());
      });
      var markers = [];
      searchBox01.addListener('places_changed', function() {
        var places = searchBox01.getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map01.fitBounds(bounds);
      });
    }
    else if (i==1) {
      var searchBox02 = new google.maps.places.SearchBox(input[i]);

      map02.controls[google.maps.ControlPosition.TOP_LEFT].push(input[i]);
      // Bias the SearchBox results towards current map's viewport.
      map02.addListener('bounds_changed', function() {
        searchBox02.setBounds(map02.getBounds());
      });
      var markers = [];
      searchBox02.addListener('places_changed', function() {
        var places = searchBox[i].getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map02.fitBounds(bounds);
      });
    }
  }
} //end func
