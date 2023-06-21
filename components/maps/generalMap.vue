<template>
    <div id="map"></div>
</template>

<script>
export default {
    head:{
        script:[{
            src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCTBmB2iGL0--mWkUVEewzQVMjnOpYuVDo&callback=initMap",
            defer:true,
            async:true
            }]
    },
    mounted(){
        function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.031 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
        }

        window.initMap = initMap;
    }
}
</script>
