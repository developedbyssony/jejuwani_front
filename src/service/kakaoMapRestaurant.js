import React, { useEffect } from 'react'
const { kakao } = window;

function KakaoMapRestaurant({latitude,longitude,title}) {
    useEffect(() => {
        const markerz = {position:new kakao.maps.LatLng(latitude, longitude),text:title};
        const container = document.getElementById('staticMap');
        const options = {
          center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
          marker:markerz,
        };
        const staticMap = new kakao.maps.StaticMap(container, options);

        // 마커를 생성하고 지도에 표시합니다
        //var placePosition = new kakao.maps.LatLng(latitude, longitude), marker = addMarker(placePosition);

        /* 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position, title) {
        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new kakao.maps.Point(0, 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage,
        });
  
    marker.setMap(map); // 지도 위에 마커를 표출합니다
  
    return marker;} */
  })
        /*
        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function(marker, title) {
            kakao.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });
  
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
  
            itemEl.onmouseover =  function () {
                displayInfowindow(marker, title);
            };)(marker, places[i].place_name);
  
            itemEl.onmouseout =  function () {
                infowindow.close();})(marker, placePosition.place_name);
            */
    return (
        <div>
            <div id="staticMap" style={{width:"570px", height:"400px"}}></div>
        </div>
    );
}

export default KakaoMapRestaurant;