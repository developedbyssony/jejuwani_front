# Jejuwani 
제주 여행 플랫폼, 제주완니
![Cap 2022-08-29 19-30-43-151](https://user-images.githubusercontent.com/98148572/187181763-aa0c4e9a-d17a-4fef-a9f6-aff2a5e8e74b.jpg)

##### - 배포 링크 : https://animated-mandazi-93e439.netlify.app/


### 개발 목적
***
1. Spirng boot와 React 프레임워크를 사용하여 REST API로 통신하는 웹서비스 제작
2. 디자인 시스템을 준수, 심미성이 높으며 재사용이 가능한 컴포넌트로 구성된 Single Page Application방식의 웹서비스 제작


### Deployment Architecture
***
| 개발 환경  | 이용 프로그램 |
| ------------ | ------------- |
| 개발도구 | VS Code, Eclipse  |
| DBMS | Oracle  |
| Server | Tomcat |
| Language | JAVA, JavaScript(ES6), HTML5, CSS3, SCSS  |
| 프레임 워크 | React, Spring Boot & Spring Security, JPA  |
| UX/UI | Figma  |


### DB Schema
***
![Untitled (1)](https://user-images.githubusercontent.com/98148572/187234137-cca6f415-feea-4c01-b923-ce0ab03f64f3.png)


##### - 메인 페이지
![메인](https://user-images.githubusercontent.com/98148572/187372286-641f55dd-8b74-4d6e-a443-325da7df36ef.png)


##### - 교통 페이지
<details>
<summary>지도 검색</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/98148572/187372734-2a070b64-9980-473c-95c7-1568d32c8448.gif"/>
이벤트 발생 시 함수를 실행하여 service의 kakaoMap 컴포넌트로 props를 전달하고, 검색의 결과가 true일 경우 하단부에 검색 결과를 노출하도록 하였습니다.
</div>
</details>

<details>
<summary>데이터 시각화</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/98148572/187372899-79835502-2265-45bc-8f06-2885a6a11634.gif"/>
제주데이터허브에서 제공하는 온라인 여행 플랫폼 실 이용자의 샘플 데이터와 Recharts 라이브러리를 이용하여 인터랙티브한 데이터 시각화를 구현하여 사용자의 렌터카 선호 정보를 제공하였습니다.   (데이터 출처 : https://www.jejudatahub.net/data/view/data/911)
</div>
</details>


##### - 액티비티, 맛집 게시판
![액티비티](https://user-images.githubusercontent.com/98148572/187922640-8ca1be5b-b153-43e9-8ff7-503e35039866.gif)

<details>
<summary>예약 하기</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/98148572/187373164-eac5cd5c-3e85-41ee-b1b2-03b6b35caffe.gif"/>
액티비티 게시판의 예약하기 버튼을 통해 상세 페이지와 장바구니를 거치지 않고 빠르게 결제 페이지로 진입할 수 있습니다.  결제 정보를 입력한 뒤에는 KG이니시스 결제 모듈을 통해 액티비티 상품을 구매할 수 있습니다.
</div>
</details>
