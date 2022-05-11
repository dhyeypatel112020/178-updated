 mapboxgl.accessToken="pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"
 var latitude=23.0225
 var longitude=72.5714
 //object of mapbox

var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[latitude , longitude],
    zoom:1,

})


map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true



    })

)


map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)
var image_1=document.querySelector("#qutub_minar")

var marker1=new mapboxgl.Marker({
    element:image_1
})
.setLngLat([77.1855,28.5245])
.addTo(map)

map.addImage('delhi-monument-fort-landscape-qutub-minar-wallpaper', image)
map.addSource('point', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [77.1855,28.5245]

                }
            }
        ]
    }
});