# granhand_project 24.06.10 ~
## 그랑핸드 반응형 웹페이지 리디자인
### 기존 웹페이지 바로가기
https://granhand.com/
## 📃 작업 과정
## 24.06.10 
### 브랜드 조사 및 웹페이지 분석 & 메인페이지 와이어프레임 제작
## 24.06.21 
## 24.06.26
### 반응형(모바일) 페이지 제작 & 장바구니/검색 페이지 프로토타입 제작 및 피그마 작업 마무리(8시간 소요)
## 24.06.27
### 메인 html & header css 작업 (4시간 소요)
* 미리 swiper 플러그인 넣고 작업 진행하기!
* **select 필수 디자인 적용**
* `border:0`, `background-color:transparent`, `outline:0` -> 기본으로 적용되어 있는 디자인 없애기
* **select 속성에서 초기 옵션 숨기기**
* select 옵션 선택 시 바로 위에 보이는 글씨를 없애고 싶다면?
1. html 작성 시 비어있는 옵션값 작성
2. css - `option:first-child {display:none;}` 초기 옵션 숨기기
* **select 속성에서 화살표 디자인 바꾸기**
1. css - `select {appearance:none;}` 기존 화살표 숨기기
2. 크기 설정 + 이미지삽입
3. (추가) `background-img`에 두 개 이상 이미지를 넣을 수 있다! `url(), url()...` / 두 개 각각 사이즈, 위치 지정하고 싶으면 쉼표 간격으로 차례로 작성하면 됨.
```
header .lnb #lang_frm .lang_wrap #lang_option {
    width:60px; height:30px;
    background-image:url(../images/language_icn.svg),url(../images/arrow_drop_down_icn.svg);
    background-repeat:no-repeat; background-position:left, right;
    outline:0; cursor:pointer; transform:translateY(-1.5px); filter:brightness(180%);
}
```
## 24.07.23
### 반응형 서브페이지 제작 (Shop / Store / Journal / Wallpaper)
#### 어려웠던 점
* 모바일 크기로 페이지를 확인할 때 오른쪽 화면이 넓어지는 오류가 생김
* 오류의 원인 : `header` - `m_nav`
* 메인화면에서는 `header`가 `position:fixed`로 설정되어있지만, 나머지 서브페이지에서는 `position:sticky`로 설정되어있음 -> 이 과정에서 오류가 생김
* 오류 해결 : `header`의 포지션을 변경
## 24.07.24
### 반응형 서브페이지 제작 (검색창 / 장바구니)
#### 어려웠던 점
* 스크롤이 이중으로 나오는 오류 발생
* 오류의 원인 : html 자체에 css를 적용해서 발생됨. 수정됨
