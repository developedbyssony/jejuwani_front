import React, { useEffect } from 'react'
const { kakao } = window;

function KakaoMapRestaurant({height}) {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
          level: 10 // 지도의 확대 레벨
        };
        const map = new kakao.maps.Map(container, options);
    },[]);
    return (
        <div>
            <div id="map" style={{width:"570px", height:`${height}px`}}></div>
        </div>
    );
}

export default KakaoMapRestaurant;