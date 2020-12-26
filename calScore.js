// resultNum이란 변수명으로 잘못 선언했는데 resultInner를 그대로 인식했음 새로운 문법인가?
// 원래는 펑션별로 가격, 성능 등 값을 따로 구현하려다가 버튼 하나로 모든 펑션을 제어할 수 없어서 펑션을 통합함
// 체크유무 확인하는 기능 만들기

// const intInner = document.getElementsByClassName("intInner");
// const deBtn = document.getElementById("deBtn");
// const ckBtn = document.getElementById("ckBtn");

const resultInner = document.getElementById("resultInner");
const mytest = document.getElementById("mytest");
const mytestDetail = document.getElementById("mytestDetail");
const surveyWrap = document.getElementById("surveyWrap");
function resultText() {
    let myPurchase;
    let purchaseDetail;
    switch (true) {
        case (PerPripoint <= -31):
            myPurchase = `누구보다 빠르게 더 빠르게<br><얼리어뎁터>`;
            purchaseDetail = `컴퓨터에 관심을 넘어선 애정을 가지고 있습니다.
            백화점이나 대형마트에 가면 가장먼저 전자제품 코너에 직행하는 당신!
            새로운 그래픽카드나 CPU가 나오면 벌써부터 자신의 컴퓨터가 구시대처럼 느껴지기도 합니다
            게다가 이미 고사양 컴퓨터를 더욱 업그레이드 하는 모습을 보이네요..
            하지만 과유불급, 가끔은 본인의 목적과 지갑사정을 되돌아보면 어떨까요?`;
            break;
        case (PerPripoint <= -11):
            myPurchase = `컴퓨터는 나의 친구<br><매니아>`;
            purchaseDetail = `컴퓨터에 상당한 관심을 가지고있습니다.
            다른 지인들보다 더 좋은 사양의 컴퓨터를 가지고 있는 경우가 많습니다.
            혹시 최신 사양에 못미치더라도 그에 준하는 고사양 PC를 가지고있지 않나요?
            하지만 떄론 가끔씩 보이는 초고사양 컴퓨터를 보고 선망의 시선을 보내기도합니다..`;
            break;
        case (PerPripoint <= 10):
            myPurchase = `성능과 가격 뭐하나 포기못해<br><밸런스 마스터>`;
            purchaseDetail = `흔히 말하는 가성비를 많이 따집니다.
            그래서 성능과 가격 둘 다 챙기기 위해 여러 방면으로 조언을 구하는데
            이때문에 컴퓨터 구매시 며칠이나 고심끝에 결정하는 모습을 보이네요..
            너무 고민하다 결국 이도저도 아닌 컴퓨터가 되지 않게 조심하세요!`;
            break;
        case (PerPripoint <= 30):
            myPurchase = `싸고 좋은걸 찾기위해<br><하이에나>`;
            purchaseDetail = `싼 제품을 위해서라면 고난과 역경에 맞서싸웁니다.
            단 1만원 차이라도 용서못하며 이를 위해 몇날 며칠이고 기다릴 인내 또한 가지고 있네요
            이를 위해 당X마켓이나 다X와에 폭풍 검색을 하기도 합니다.
            하지만 이때문에 퀄리티가 낮은 제품을 골라 낭패를 보지 않게 많은 주의가 필요합니다!`;
            break;
        case (PerPripoint <= 50):
            myPurchase = `내 돈은 절대 못준다<br><머니 디팬더>`;
            purchaseDetail = `컴퓨터에 대한 투자를 아끼는 경향이 있습니다.
            한번 장만한 컴퓨터는 고장나기 전까지 쓸 정도로 절약정신 또한 가지고 있네요.
            이런 경우 컴퓨터에 대한 관심이 크게 없는 사람이 많습니다.
            컴퓨터를 장만할때 싼걸 찾다가 철지난 제품을 사지 않게 조심하세요!`;
            break;
        default:
            myPurchase = `에러! 케이스값의 예외발생`;
            break;
    }
    const mytestText = `<h3>당신의 성향은?</h3><img src="img/deimg.png"><br><a>${myPurchase}</a>`;
    // const totalResult = `성향점수 : ${PerPripoint}, 실용성 : ${sumPrac}, 지식 : ${sumInt}`;
    // resultInner.innerText = totalResult;
    mytest.innerHTML = mytestText;
    mytestDetail.innerText = purchaseDetail;

    // resultInner.style.display = "block";
    // mytest.style.display = "block";
    // mytestDetail.style.display = "block";
    surveyWrap.style.display = "none";
}

const intResult = document.getElementById("intResult");
function resultInt() {
    let myInt;
    let myIntNum;
    switch (true) {
        case (sumInt <= 10):
            myInt = `Lv.1`;
            myIntNum = 1;
            break;
        case (sumInt <= 20):
            myInt = `Lv.2`;
            myIntNum = 2;
            break;
        case (sumInt <= 30):
            myInt = `Lv.3`;
            myIntNum = 3;
            break;
        case (sumInt <= 40):
            myInt = `Lv.4`;
            myIntNum = 4;
            break;
        case (sumInt <= 50):
            myInt = `Lv.5`;
            myIntNum = 5;
            break;
        default:
            myInt = `에러!`;
            break;
    }
    intResult.innerHTML = `<a>지식 : ${myInt}</a>`;

}

const diffInner = document.getElementById("diffInner");
let diffGagePoint;
function diffReult() {
    let diffPoint = Math.abs(PerPripoint - sumPrac);
    let diffText;
    switch (true) {
        case (diffPoint > 40):
            diffText = `매우불일치`; diffGagePoint = 0;
            console.log(diffPoint);
            break;
        case (diffPoint <= 10):
            diffText = `매우일치`; diffGagePoint = 5;
            console.log(diffPoint);
            break;
        case (diffPoint <= 20):
            diffText = `일치`; diffGagePoint = 4;
            console.log(diffPoint);
            break;
        case (diffPoint <= 30):
            diffText = `보통`; diffGagePoint = 3;
            console.log(diffPoint);
            break;
        case (diffPoint <= 40):
            diffText = `불일치`; diffGagePoint = 2;
            console.log(diffPoint);
            break;
        default:
            diffText = `에러!`;
            break;
    }
    // diffGagePoint = 3;
    diffInner.innerHTML = `<a>${diffText}</a>`;
}

const ckPer = new Array(5);
const ckPri = new Array(5);
const ckInt = new Array(5);
const ckPrac = new Array(5);
// per와 pri는 기본값50
let sumPer = 50;
let sumPri = 50;
let sumInt = 0;
let sumPrac = 0;
let point = 0;
let i, j, k, l;
function calSum() {
    // 궁금점 : ckPer는 2차원 배열선언을 안한거같은데 알아서 2차원으로 인식함
    for (i = 1; i <= 5; i++) {
        ckPer[i] = document.getElementsByName("ckPer" + i)
        if (ckPer[i][0].checked == true) {
            sumPer += 10;
            console.log("퍼포먼스 : " + sumPer);
        }
    }
    for (j = 1; j <= 5; j++) {
        ckPri[j] = document.getElementsByName("ckPri" + j)
        if (ckPri[j][0].checked == true) {
            sumPri += 10;
            console.log("가격점수 : " + sumPri);
        }
    }
    for (k = 1; k <= 5; k++) {
        ckInt[k] = document.getElementsByName("ckInt" + k)
        if (ckInt[k][1].checked == true) {
            sumInt += 10;
            console.log("지식점수 : " + sumInt);
        }
    }
    for (l = 1; l <= 5; l++) {
        ckPrac[l] = document.getElementsByName("ckPrac" + l)
        if (ckPrac[l][1].checked == true) {
            sumPrac += 10;
            console.log("실용성 : " + sumPrac);
        } else if (ckPrac[l][0].checked == true) {
            sumPrac -= 10;
            console.log("실용성 : " + sumPrac);
        }
    }
    PerPripoint = sumPri - sumPer;
}

const diffGageBar = document.getElementsByClassName("diffGageBar");
function diffGage() {
    diffGageBar[0].value = diffGagePoint;
}

const testResult = document.getElementsByClassName("testResult");
function totalSum() {
    calSum();
    resultText();
    resultInt();
    diffReult();
    diffGage();
    testResult[0].style.display = "block";
}