
		let markers = [
			{
				coords:{lat:40.7516269 , lng:-73.97535},
				content:`<h3>LEXLER DELI</h3>`+ 
						` <p>405 LEXINGTON AVENUE New York NY</p> ` + 
						` <p> Number of violations: 2</p>`+
						` <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nisi eu augue vestibulum porttitor. Nam iaculis orci id ligula consectetur, nec pharetra nunc tincidunt. Aenean interdum vestibulum ante, vitae fringilla velit pellentesque a. Morbi porta maximus ex eu tincidunt. In viverra nisl ut lorem scelerisque tincidunt. Etiam hendrerit eu tellus a viverra. Donec mattis posuere diam, sit amet suscipit velit fermentum nec. Mauris venenatis quis tellus sit amet auctor. </p>`
			},
		]
		
		function formSubmit() {
		 	    let value = document.getElementById("restaurant").value;
		 	    console.log(value);
			  //   markers.push({
		 		// 		coords:{lat: parseFloat(lat1), lng: parseFloat(lng1)},
		 		// 		content: "test"
					// })
		 	 //    initMap();
		 	}

		function initMap(){
			//map options
			let options = {
				zoom: 11,
				center: {lat: 40.712772, lng: -74.006058},
				styles: [
		            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
		            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
		            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
		            {
		              featureType: 'administrative.locality',
		              elementType: 'labels.text.fill',
		              stylers: [{color: '#d59563'}]
		            },
		            {
		              featureType: 'poi',
		              elementType: 'labels.text.fill',
		              stylers: [{color: '#d59563'}]
		            },
		            {
		              featureType: 'poi.park',
		              elementType: 'geometry',
		              stylers: [{color: '#263c3f'}]
		            },
		            {
		              featureType: 'poi.park',
		              elementType: 'labels.text.fill',
		              stylers: [{color: '#6b9a76'}]
		            },
		            {
		              featureType: 'road',
		              elementType: 'geometry',
		              stylers: [{color: '#38414e'}]
		            },
		            {
		              featureType: 'road',
		              elementType: 'geometry.stroke',
		              stylers: [{color: '#212a37'}]
		            },
		            {
		              featureType: 'road',
		              elementType: 'labels.text.fill',
		              stylers: [{color: '#9ca5b3'}]
		            },
		            {
		              featureType: 'road.highway',
		              elementType: 'geometry',
		              stylers: [{color: '#746855'}]
		            },
		            {
		              featureType: 'road.highway',
		              elementType: 'geometry.stroke',
		              stylers: [{color: '#1f2835'}]
		            },
		            {
		              featureType: 'road.highway',
		              elementType: 'labels.text.fill',
		              stylers: [{color: '#f3d19c'}]
		            },
		            {
		              featureType: 'transit',
		              elementType: 'geometry',
		              stylers: [{color: '#2f3948'}]
		            },
		            {
		              featureType: 'transit.station',
		              elementType: 'labels.text.fill', 
		              stylers: [{color: '#d59563'}]
		            },
		            {
		              featureType: 'water',
		              elementType: 'geometry',
		              stylers: [{color: '#17263c'}]
		            },
		            {
		              featureType: 'water',
		              elementType: 'labels.text.fill',
		              stylers: [{color: '#515c6d'}]
		            },
		            {
		              featureType: 'water',
		              elementType: 'labels.text.stroke',
		              stylers: [{color: '#17263c'}]
		            }
		          ]
			}
			// new map
			let map = new google.maps.Map(document.getElementById('map'), options);
			
			var heatMapData = [
			];
			// for (var i = 0; i < 2000; i++) {
			// 	heatMapData.push(new google.maps.LatLng(parseFloat(data[i].Lat), parseFloat(data[i].Lng)))
			// }
			var heatmap = new google.maps.visualization.HeatmapLayer({
			  data: heatMapData
			});
			heatmap.setMap(map);


			 
			 
			
			for (var i = 0; i < 100; i++) {
				
				markers.push({
					coords:{lat: parseFloat(data[i].Lat), lng: parseFloat(data[i].Lng)},
					content:`<h3>${data[i].Name}</h3>`
				})
			}


				for(let i = 0; i < markers.length; i++){
					addMarker(markers[i]);
				}
			
		

			function addMarker(props){
				var marker = new google.maps.Marker({
					position: props.coords,
					map: map,
					content: props.content

				});
					if(props.content){
					let infoWindow = new google.maps.InfoWindow({
						content: props.content
					});
 					marker.addListener('click', function(){
						infoWindow.open(map,marker)
					})
				}
				}


			}
		



		

		
		//console.log(data);
		console.log(markers);
	