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


### UX/UI 설계
***
https://www.figma.com/file/BWmbBPJp8k0CGEclJt65jB/jejuwani_allPage?node-id=65%3A3598


### 대표 화면 구성
***
##### - 1) 🏝️ 메인 페이지
![메인](https://user-images.githubusercontent.com/98148572/187372286-641f55dd-8b74-4d6e-a443-325da7df36ef.png)
<img src="https://user-images.githubusercontent.com/98148572/188305741-50f26f99-649b-49f4-aeee-8f29188078e6.gif"/>
액티비티, 맛집, 블로그 정보의 게시글을 메인에 카드 UI 컴포넌트로 노출하여 주목성을 높이고, 압축적으로 정보를 전달하였습니다. <br />
또한 액티비티, 맛집, 블로그 카드 UI 컴포넌트에 유형별 변화를 주어 같은 디자인 시스템 안에서 정보의 성격에 따라 시각적인 구분을 할 수 있도록 하였습니다. 액티비티 상품의 경우, 컴포넌트의 장바구니 버튼을 통해 해당 상품을 Local Storage에 저장합니다. 회원과 비회원 모두 클릭이 가능합니다.

<details>
<summary>정보 유형 별 상태 디자인/모션</summary>
<div markdown="1">
[액티비티]  <br />
<img src="https://user-images.githubusercontent.com/98148572/188472200-24bc2382-a89e-4c1e-9b02-e7fca2d17322.gif"/> <br />
[맛집]  <br />
<img src="https://user-images.githubusercontent.com/98148572/188472193-91d95df3-f1c1-41ef-9871-f64d637cad4e.gif"/> <br />
[블로그]  <br />
<img src="https://user-images.githubusercontent.com/98148572/188472179-d7b24d65-c015-4185-ba24-a700ecc95986.gif"/> <br />
</div>
</details>

##### - 2) 🏝️ 교통 페이지
![교통페이지](https://user-images.githubusercontent.com/98148572/188305113-fdcc50c5-0724-47d9-b766-7c6cb5b92fd1.png)
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


##### - 3) 🏝️ 액티비티, 맛집 게시판
![액티비티](https://user-images.githubusercontent.com/98148572/187922640-8ca1be5b-b153-43e9-8ff7-503e35039866.gif)

<details>
<summary>예약 하기</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/98148572/187373164-eac5cd5c-3e85-41ee-b1b2-03b6b35caffe.gif"/>
액티비티 게시판의 예약하기 버튼을 통해 상세 페이지와 장바구니를 거치지 않고 빠르게 결제 페이지로 진입할 수 있습니다.  결제 정보를 입력한 뒤에는 KG이니시스 결제 모듈을 통해 액티비티 상품을 구매할 수 있습니다.
</div>
</details>
