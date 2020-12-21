const ckPer1 = document.getElementsByName("ckPer1");
const ckPer2 = document.getElementsByName("ckPer2");
const ckPer3 = document.getElementsByName("ckPer3");
const ckPer4 = document.getElementsByName("ckPer4");
const ckPer5 = document.getElementsByName("ckPer5");

const ckPri1 = document.getElementsByName("ckPri1");
const ckPri2 = document.getElementsByName("ckPri2");
const ckPri3 = document.getElementsByName("ckPri3");
const ckPri4 = document.getElementsByName("ckPri4");
const ckPri5 = document.getElementsByName("ckPri5");

const ckInt1 = document.getElementsByName("ckInt1");
const ckInt2 = document.getElementsByName("ckInt2");
const ckInt3 = document.getElementsByName("ckInt3");
const ckInt4 = document.getElementsByName("ckInt4");
const ckInt5 = document.getElementsByName("ckInt5");

const ckPrac1 = document.getElementsByName("ckPrac1");
const ckPrac2 = document.getElementsByName("ckPrac2");
const ckPrac3 = document.getElementsByName("ckPrac3");
const ckPrac4 = document.getElementsByName("ckPrac4");
const ckPrac5 = document.getElementsByName("ckPrac5");

// resultNum이란 변수명으로 잘못 선언했는데 resultInner를 그대로 인식했음 새로운 문법인가?
const resultInner = document.getElementById("resultInner");
const surveyWrap = document.getElementsByClassName("surveyWrap");

// per와 pri는 50으로 바꾸기
let sumPer = 0;
let sumPri = 0;
let sumInt = 0;
let sumPrac = 0;
let point = 0;

function totalSum() {
    // 성능
    if(ckPer1[0].checked==true){
        sumPer += 10;
        console.log("성능값은 " + sumPer);
    }

    if(ckPer2[0].checked==true){
        sumPer += 10;
        console.log("성능값은 " + sumPer);
    }

    if(ckPer3[0].checked==true){
        sumPer += 10;
        console.log("성능값은 " + sumPer);
    }

    if(ckPer4[0].checked==true){
        sumPer += 10;
        console.log("성능값은 " + sumPer);
    }

    if(ckPer5[1].checked==true){
        sumPer += 10;
        console.log("성능값은 " + sumPer);
    }

    // 가격
    if(ckPri1[0].checked==true){
        sumPri += 10;
        console.log("가격값은 " + sumPer);
    }

    if(ckPri2[0].checked==true){
        sumPri += 10;
        console.log("가격값은 " + sumPer);
    }

    if(ckPri3[1].checked==true){
        sumPri += 10;
        console.log("가격값은 " + sumPer);
    }

    if(ckPri4[0].checked==true){
        sumPri += 10;
        console.log("가격값은 " + sumPer);
    }

    if(ckPri5
        [0].checked==true){
        sumPri += 10;
        console.log("가격값은 " + sumPer);
    }

    // 지식
    if(ckInt1[1].checked==true) {
        sumInt += 10;
        console.log("지식값은 " + sumInt);
    }

    if(ckInt2[1].checked==true) {
        sumInt += 10;
        console.log("지식값은 " + sumInt);
    }

    if(ckInt3[0].checked==true) {
        sumInt += 10;
        console.log("지식값은 " + sumInt);
    }

    if(ckInt4[0].checked==true) {
        sumInt += 10;
        console.log("지식값은 " + sumInt);
    }

    if(ckInt5[0].checked==true) {
        sumInt += 10;
        console.log("지식값은 " + sumInt);
    }

    // 실용
    if(ckPrac1[1].checked==true) {
        sumPrac += 20;
        console.log("실용성값은 " + sumPrac);
    }

    if(ckPrac2[1].checked==true) {
        sumPrac += 10;
        console.log("실용성값은 " + sumPrac);
    }

    if(ckPrac3[0].checked==true) {
        sumPrac += 15;
        console.log("실용성값은 " + sumPrac);
    }

    if(ckPrac4[0].checked==true) {
        sumPrac += 10;
        console.log("실용성값은 " + sumPrac);
    }

    if(ckPrac5[0].checked==true) {
        sumPrac += 15;
        console.log("실용성값은 " + sumPrac);
    }

    PerPripoint = sumPri-sumPer;
    const totalResult = `구매성향은 ${PerPripoint}이고 실용성은 ${sumPrac}이며 지식은 ${sumInt}입니다.`
    resultInner.innerText = totalResult;
    resultInner.style.display = "block";
    surveyWrap[0].style.display = "none";

}

// 원래는 펑션별로 가격, 성능 등 값을 따로 구현하려다가 버튼 하나로 모든 펑션을 제어할 수 없어서 펑션을 통합함