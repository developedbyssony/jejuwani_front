import { useState } from "react";
import { BarChart, Cell, Bar, XAxis, YAxis,  Tooltip,  CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
    {name:"코나 일렉트릭 EV",USE_TIME_CO:"1996"}
    ,
    {name:"K5 2세대",USE_TIME_CO:"1752"}
    ,
    {name:"쏘나타 DN8",USE_TIME_CO:"1568"}
    ,
    {name:"K5 3세대",USE_TIME_CO:"1528"}
    ,
    {name:"쏘나타 뉴 라이즈",USE_TIME_CO:"1176"}
    ,
    {name:"올 뉴 카니발(9인승)",USE_TIME_CO:"1156"}
    ,
    {name:"아반떼 AD",USE_TIME_CO:"1156"}
    ,
    {name:"올 뉴 K3",USE_TIME_CO:"896"}
    ,
    {name:"카니발 4세대(9인승)",USE_TIME_CO:"844"}
    ,
    {name:"더 뉴 K5 2세대",USE_TIME_CO:"840"}
    ,
    {name:"QM6",USE_TIME_CO:"544"},
    {name:"올 뉴 아반떼 CN7",USE_TIME_CO:"536"}
    ,
    {name:"더 뉴 레이",USE_TIME_CO:"476"}
    ,
    {name:"베뉴",USE_TIME_CO:"464"}
    ,
    {name:"베리 뉴 티볼리",USE_TIME_CO:"380"}
    ,
    {name:"더 뉴 그랜저",USE_TIME_CO:"360"}
    ,
    {name:"모닝 어반",USE_TIME_CO:"348"}
    ,
    {name:"더 뉴 그랜드 스타렉스(12인승)",USE_TIME_CO:"344"}
    ,
    {name:"그랜저IG",USE_TIME_CO:"340"}
    ,
    {name:"2019 엑센트",USE_TIME_CO:"332"}
    ,
    {name:"더 뉴 아반떼 AD",USE_TIME_CO:"324"}
    ,
    {name:"엑센트",USE_TIME_CO:"324"}
    ,
    {name:"팰리세이드",USE_TIME_CO:"296"}
    ,
    {name:"더 뉴 스파크",USE_TIME_CO:"284"}
    ,
    {name:"싼타페 TM(7인승)",USE_TIME_CO:"276"}
    ,
    {name:"아이오닉5",USE_TIME_CO:"264"}
    ,
    {name:"LF쏘나타",USE_TIME_CO:"224"}
    ,
    {name:"니로 EV",USE_TIME_CO:"196"}
    ,
    {name:"더 뉴 K3",USE_TIME_CO:"192"}
    ,
    {name:"SM6",USE_TIME_CO:"188"},
    {name:"더 뉴 카니발(9인승)",USE_TIME_CO:"184"}
    ,
    {name:"셀토스",USE_TIME_CO:"184"}
    ,
    {name:"K8",USE_TIME_CO:"176"},
    {name:"올 뉴 카니발(11인승)",USE_TIME_CO:"172"}
    ,
    {name:"그랜드 스타렉스(12인승)",USE_TIME_CO:"168"}
    ,
    {name:"SM3 Z.E.",USE_TIME_CO:"160"},
    {name:"코나",USE_TIME_CO:"160"}
    ,
    {name:"쏘울 부스터",USE_TIME_CO:"152"}
    ,
    {name:"미니쿠퍼 컨버터블",USE_TIME_CO:"152"}
    ,
    {name:"K7 Premier",USE_TIME_CO:"144"},
    {name:"올 뉴 K7",USE_TIME_CO:"132"}
    ,
    {name:"올뉴 K3",USE_TIME_CO:"128"}
    ,
    {name:"올 뉴 투싼",USE_TIME_CO:"128"}
    ,
    {name:"아반떼 MD",USE_TIME_CO:"128"}
    ,
    {name:"더 뉴 그랜드 스타렉스 (12인승)",USE_TIME_CO:"128"}
    ,
    {name:"i30 (PD)",USE_TIME_CO:"124"},
    {name:"올 뉴 모닝(JA)",USE_TIME_CO:"120"}
    ,
    {name:"더 넥스트 스파크",USE_TIME_CO:"108"}
    ,
    {name:"더 뉴 모닝",USE_TIME_CO:"104"}
    ,
    {name:"QM3",USE_TIME_CO:"104"},
    {name:"액센트(17년형 후방카메라)",USE_TIME_CO:"100"}
    ,
    {name:"올 뉴 말리부",USE_TIME_CO:"100"}
    ,
    {name:"쏠라티",USE_TIME_CO:"96"}
    ,
    {name:"소나타DN8 (19_21년형 후방카메라)",USE_TIME_CO:"96"}
    ,
    {name:"레이",USE_TIME_CO:"96"}
    ,
    {name:"제네시스 G80",USE_TIME_CO:"92"}
    ,
    {name:"K5 3세대  (20년형 후방카메라)",USE_TIME_CO:"92"}
    ,
    {name:"쏘렌토 4세대(7인승)",USE_TIME_CO:"88"}
    ,
    {name:"올 뉴 모닝",USE_TIME_CO:"80"}
    ,
    {name:"K3(16_18년형 후방카메라)",USE_TIME_CO:"80"}
    ,
    {name:"XM3",USE_TIME_CO:"76"},
    {name:"제네시스 G70",USE_TIME_CO:"76"}
    ,
    {name:"올뉴모닝럭셔리(17_18년형 후방카메라)",USE_TIME_CO:"72"}
    ,
    {name:"더 뉴 싼타페(7인승)",USE_TIME_CO:"72"}
    ,
    {name:"싼타페 더 프라임(7인승)",USE_TIME_CO:"72"}
    ,
    {name:"트레일블레이저",USE_TIME_CO:"72"}
    ,
    {name:"엑센트",USE_TIME_CO:"72"}
    ,
    {name:"제네시스 G80 (RG3)",USE_TIME_CO:"68"}
    ,
    {name:"카니발9인승(19_21년형 후방카메라)",USE_TIME_CO:"68"}
    ,
    {name:"레이(14_17년형)",USE_TIME_CO:"64"}
    ,
    {name:"투싼 NX4",USE_TIME_CO:"64"}
    ,
    {name:"더 뉴 K5",USE_TIME_CO:"56"}
    ,
    {name:"더뉴아반떼AD (19년형 후방카메라)",USE_TIME_CO:"56"}
    ,
    {name:"올뉴아반떼CN7(20년형 후방카메라)",USE_TIME_CO:"56"}
    ,
    {name:"소나타DN8 (19년형 후방카메라)",USE_TIME_CO:"56"}
    ,
    {name:"더 뉴 카니발 리무진(7인승)",USE_TIME_CO:"52"}
    ,
    {name:"더뉴스파크(19년형 후방카메라)",USE_TIME_CO:"52"}
    ,
    {name:"올 뉴 크루즈",USE_TIME_CO:"48"}
    ,
    {name:"더 뉴 그랜드 스타렉스 어반(9인승)",USE_TIME_CO:"44"}
    ,
    {name:"아반떼AD(15_18년형 후방카메라)",USE_TIME_CO:"44"}
    ,
    {name:"스포티지 더 볼드",USE_TIME_CO:"44"}
    ,
    {name:"더뉴레이(18_21년형 후방카메라)",USE_TIME_CO:"44"}
    ,
    {name:"쏘렌토 더 마스터(7인승)",USE_TIME_CO:"44"}
    ,
    {name:"올 뉴 모닝 (JA)",USE_TIME_CO:"40"}
    ,
    {name:"싼타페 DM(7인승)",USE_TIME_CO:"40"}
    ,
    {name:"더 뉴 그랜저 하이브리드",USE_TIME_CO:"40"}
    ,
    {name:"뷰티풀 코란도",USE_TIME_CO:"36"}
    ,
    {name:"올 뉴 투싼 TL",USE_TIME_CO:"36"}
    ,
    {name:"더 뉴 K3 2세대",USE_TIME_CO:"36"}
    ,
    {name:"GV80(7인승)",USE_TIME_CO:"36"}
    ,
    {name:"테슬라 모델3",USE_TIME_CO:"32"}
    ,
    {name:"스토닉",USE_TIME_CO:"32"}
    ,
    {name:"BMW i3",USE_TIME_CO:"32"},
    {name:"올 뉴 카니발 리무진(7인승)",USE_TIME_CO:"32"}
    ,
    {name:"G4 렉스턴(7인승)",USE_TIME_CO:"32"}
    ,
    {name:"지프 올 뉴 랭글러 루비콘 4도어",USE_TIME_CO:"32"}
    ,
    {name:"아이오닉 하이브리드  하이브리드",USE_TIME_CO:"32"}
    ,
    {name:"더뉴그랜저(19_20년형 후방카메라)",USE_TIME_CO:"28"}
    ,
    {name:"올 뉴 쏘렌토(7인승)",USE_TIME_CO:"28"}
    ,
    {name:"소나타 (16_18년형 후방카메라)",USE_TIME_CO:"28"}
    ,
    {name:"쏘렌토4세대5(20년형 후방카메라)",USE_TIME_CO:"24"}
    ,
    {name:"스포티지 4세대",USE_TIME_CO:"24"}
    ,
    {name:"쏘울 부스터 EV",USE_TIME_CO:"24"}
    ,
    {name:"셀토스 (19_20년형 후방카메라)",USE_TIME_CO:"24"}
    ,
    {name:"미니쿠퍼 컨트리맨",USE_TIME_CO:"24"}
    ,
    {name:"더뉴싼타페(21년형 후방카메라)",USE_TIME_CO:"24"}
    ,
    {name:"벤츠 E클래스 250 아방가르드",USE_TIME_CO:"24"}
    ,
    {name:"벤츠 C클래스 카브리올레",USE_TIME_CO:"24"}
    ,
    {name:"티볼리 에어",USE_TIME_CO:"24"}
    ,
    {name:"제네시스GV70(21년형 후방카메라)",USE_TIME_CO:"20"}
    ,
    {name:"K3",USE_TIME_CO:"20"},
    {name:"더넥스트스파크(15_18년형 후방카메라)",USE_TIME_CO:"20"}
    ,
    {name:"더올뉴투싼(21년형 후방카메라)",USE_TIME_CO:"20"}
    ,
    {name:"싼타페 더 프라임(5인승)",USE_TIME_CO:"20"}
    ,
    {name:"K3(20년형 후방카메라)",USE_TIME_CO:"20"}
    ,
    {name:"포드 머스탱 컨버터블",USE_TIME_CO:"20"}
    ,
    {name:"폭스바겐 티록",USE_TIME_CO:"20"}
    ,
    {name:"벤츠 CLA 220 AMG",USE_TIME_CO:"20"}
    ,
    {name:"올뉴카니발 9인승(15_17년형 후방카메라)",USE_TIME_CO:"20"}
    ,
    {name:"BMW Z4",USE_TIME_CO:"16"},
    {name:"더뉴그랜드스타렉스 12인승(19년형 후방카메라)",USE_TIME_CO:"16"}
    ,
    {name:"K5 3세대 (20년형 후방카메라)",USE_TIME_CO:"16"}
    ,
    {name:"팰리세이드(19_20년형 후방카메라)",USE_TIME_CO:"16"}
    ,
    {name:"그랜저IG(16_18년형 후방카메라)",USE_TIME_CO:"16"}
    ,
    {name:"아이오닉(16_17년형)",USE_TIME_CO:"16"}
    ,
    {name:"니로 하이브리드  하이브리드",USE_TIME_CO:"16"}
    ,
    {name:"올뉴크루즈(17년형 후방카메라)",USE_TIME_CO:"16"}
    ,
    {name:"지프컴패스",USE_TIME_CO:"16"}
    ,
    {name:"쏘렌토 더 마스터",USE_TIME_CO:"16"}
    ,
    {name:"벨로스터(JS)",USE_TIME_CO:"16"}
    ,
    {name:"스토닉(18년형 후방카메라)",USE_TIME_CO:"16"}
    ,
    {name:"카니발 4세대(11인승)",USE_TIME_CO:"12"}
    ,
    {name:"올란도",USE_TIME_CO:"12"}
    ,
    {name:"올 뉴 쏘울",USE_TIME_CO:"12"}
    ,
    {name:"포드 익스플로러",USE_TIME_CO:"12"}
    ,
    {name:"SM3 EV(19년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"BMW430I컨버터블(18_19년형)",USE_TIME_CO:"12"}
    ,
    {name:"그랜저IG (17_18년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"싼타페 DM(5인승)",USE_TIME_CO:"12"}
    ,
    {name:"올뉴쏘렌토5(17_18년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"뉴싼타페TM(17_19년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"코나(16_17년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"카니발 하이리무진(7인승)",USE_TIME_CO:"12"}
    ,
    {name:"스팅어",USE_TIME_CO:"12"}
    ,
    {name:"니로(16년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"더올뉴제네시스G80(21년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"테슬라 모델3 롱레인지",USE_TIME_CO:"12"}
    ,
    {name:"쏘렌토4세대7(20년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"쏘울부스터(19_20년형 후방카메라)",USE_TIME_CO:"12"}
    ,
    {name:"쏘울 EV",USE_TIME_CO:"12"}
    ,
    {name:"2022 스포티지",USE_TIME_CO:"8"}
    ,
    {name:"미니쿠퍼컨버터블(15_17년형)",USE_TIME_CO:"8"}
    ,
    {name:"폭스바겐 제타 1.4 TSI",USE_TIME_CO:"8"}
    ,
    {name:"올뉴K5  (15_17년형)",USE_TIME_CO:"8"}
    ,
    {name:"벤츠 E클래스 카브리올레",USE_TIME_CO:"8"}
    ,
    {name:"카니발 4세대 리무진(7인승)",USE_TIME_CO:"8"}
    ,
    {name:"제네시스 GV70",USE_TIME_CO:"8"}
    ,
    {name:"제네시스 G90",USE_TIME_CO:"8"}
    ,
    {name:"BMW 430i 컨버터블",USE_TIME_CO:"8"}
    ,
    {name:"소나타DN8(19년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"스포티지",USE_TIME_CO:"8"}
    ,
    {name:"코나 아이언맨",USE_TIME_CO:"8"}
    ,
    {name:"뉴티볼리(19년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"모하비 더 마스터(7인승)",USE_TIME_CO:"8"}
    ,
    {name:"더뉴K5 (19년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"더뉴K5  (18년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"SM6 (19년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"더 뉴 제네시스 G70",USE_TIME_CO:"8"}
    ,
    {name:"XM3(20년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"모하비더마스터(19년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"더 뉴 싼타페(5인승)",USE_TIME_CO:"8"}
    ,
    {name:"카니발11인승(19년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"K7 프리미어(19_20년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"티볼리",USE_TIME_CO:"8"}
    ,
    {name:"벤츠E220D카브리올레(20년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"마스터(19년형 후방카메라)",USE_TIME_CO:"8"}
    ,
    {name:"더 뉴 말리부",USE_TIME_CO:"8"}
    ,
    {name:"폭스바겐 티록(2021년형)",USE_TIME_CO:"4"}
    ,
    {name:"푸조 3008",USE_TIME_CO:"4"}
    ,
    {name:"제네시스GV80(20년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"티볼리 아머",USE_TIME_CO:"4"}
    ,
    {name:"코란도(20년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"체로키 AWD",USE_TIME_CO:"4"}
    ,
    {name:"티볼리(15_17년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"티볼리에어(16년형  후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"카니발하이리무진 7인승(21년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"소나타(17년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"제네시스G80(16_17년형)",USE_TIME_CO:"4"}
    ,
    {name:"더 뉴 스포티지",USE_TIME_CO:"4"}
    ,
    {name:"BMW 420i 컨버터블",USE_TIME_CO:"4"}
    ,
    {name:"BMW 520d",USE_TIME_CO:"4"},
    {name:"BMW X1",USE_TIME_CO:"4"},
    {name:"EV6",USE_TIME_CO:"4"},
    {name:"K3(20_21년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"K5",USE_TIME_CO:"4"},
    {name:"K5 3세대 1.6 터보",USE_TIME_CO:"4"}
    ,
    {name:"K8",USE_TIME_CO:"4"},
    {name:"LF쏘나타 장애우컨트롤(왼쪽)",USE_TIME_CO:"4"}
    ,
    {name:"SM6(17년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"i30 (17년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"뉴SM7(19년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"뉴아반떼AD(15~16년형)",USE_TIME_CO:"4"}
    ,
    {name:"니로EV(18_19년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"더뉴K3(22년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"올란도(17년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"더뉴그랜저 (20년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"베뉴(20년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"벤츠 E클래스 220d",USE_TIME_CO:"4"}
    ,
    {name:"볼보 XC40",USE_TIME_CO:"4"}
    ,
    {name:"2021 더 뉴 제네시스 G70",USE_TIME_CO:"4"}
    ,
    {name:"스타리아",USE_TIME_CO:"4"}
    ,
    {name:"쏘나타DN8(흰색)",USE_TIME_CO:"4"}
    ,
    {name:"쏘렌토4세대7(20_21년형) 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"쏠라티 15인승(17_18년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"아우디 A5 스포트백 콰트로",USE_TIME_CO:"4"}
    ,
    {name:"아이오닉 일렉트릭",USE_TIME_CO:"4"}
    ,
    {name:"올 뉴 모닝",USE_TIME_CO:"4"}
    ,
    {name:"올뉴K7 (18_19년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"올뉴그랜드카니발11인승(15_16년형 후방카메라)",USE_TIME_CO:"4"}
    ,
    {name:"푸조 5008",USE_TIME_CO:"4"}
    ];    


export default function App(dataImg) {
    const [ activeIndex, setState ] = useState(0);
    const [ imgUrl, setUrl ] = useState( "/assets/sub/rent/kona-electric.jpg");

    const handleClick = (data, index) => {
		setState(index);
        setUrl(dataImg.dataImg[index].img);
        console.log(imgUrl);
	}
    return (
        <>
        <li className="like-list-item" id="rent-card">
            <div className="tag"><strong>{activeIndex + 1}</strong>위</div>
        <div className="like-list-item-contents">
        <div className="like-card-left-sec">
                <h1 claassName="info-tit" id="info-tit">{data[activeIndex].name}</h1>
                <p>
                제주도를 찾는 여행객과
                <strong>  {data[activeIndex].USE_TIME_CO}</strong>
                <span>시간 함께하였습니다.</span>
                </p>
        </div>
        <div className="like-card-right-sec">
            <div className="like-list-item-ic-cart" id="rent-img">
            <img src={`${process.env.PUBLIC_URL}${imgUrl}`} alt="차량이미지" style={{width:'100px', height:'100px', objectFit:'cover'}}/>
            </div>
            <div className="like-card-price">
                <div className="price-20">
                <strong className="amount"></strong>
                </div>
            </div>
        </div>
    </div>
    </li>
    <ResponsiveContainer 
        width={1800} height={350}>
    <BarChart width={1800} height={400} data={data.slice(0,13)} barSize={40}   margin={{
        top: 180,
        left:200
      }}>
        <XAxis padding={{left: 60}} tickMargin="10" tickSize="10" interval="preserveStart" width={1200} scale="point" type="category" tick={{fontSize: 13, padding: "6px"}} dataKey="name"></XAxis>
        <YAxis hide={true} padding={{bottom: 10}} domain={[0, '2000']} type="number" tickFormatter={(value) => `${value}시간`} tick={{fontSize: "13px"}} dataKey="USE_TIME_CO"/>
        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
        <Bar dataKey="USE_TIME_CO"
                 onClick={handleClick}
                 label={{fontSize: 13, position: "top"}}
            >
                	{
							data.slice(0,13).map((entry, index) => (
                                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#4e6a75'} key={`cell-${index}`} />
                                ))
						}
            </Bar>
            <Tooltip />
    </BarChart>
    </ResponsiveContainer>
    </>
  );
}
