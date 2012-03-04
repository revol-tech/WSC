	function initialize() {
		var latlng = new google.maps.LatLng(27.73091, 85.29552);
		var settings = {
			zoom: 11,
			center: latlng,
			mapTypeControl: true,
			mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
			navigationControl: true,
			navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
			mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
    var companyPos = new google.maps.LatLng(27.72787, 85.3043483);
  var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      title:"Balaju"


  });
  var companyPos = new google.maps.LatLng(27.725778913600468, 85.31330108642578);
  var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      title:"Manamaiju"


  });
  var companyPos = new google.maps.LatLng(27.7421742477618, 85.33227168023586);
  var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      title:"Basundhara"


  });
  var companyPos = new google.maps.LatLng(27.6966187, 85.3414027);
  var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      title:"Mahadevsthan"


  });
  var companyPos = new google.maps.LatLng(27.6862726, 85.2948778);
  var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      title:"Balkhu"


  });
   var companyPos = new google.maps.LatLng(27.7453956, 85.355444);
  var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      title:"Mahankal"


  });
}
