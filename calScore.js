// resultNum이란 변수명으로 잘못 선언했는데 resultInner를 그대로 인식했음 새로운 문법인가?
const resultInner = document.getElementById("resultInner");
const mytest = document.getElementById("mytest");
const surveyWrap = document.getElementsByClassName("surveyWrap");

// per와 pri는 50으로 바꾸기
let sumPer = 50;
let sumPri = 50;
let sumInt = 0;
let sumPrac = 0;
let point = 0;

// 체크유무 확인하는 기능 만들기
function resultText() {
    let myPurchase;
    let purchaseDetail;
    switch (true) {
        case (PerPripoint <= -31):
            myPurchase = `누구보다 빠르게 더 빠르게 <얼리어뎁터>`;
            purchaseDetail = `컴퓨터에 관심을 넘어선 애정을 가지고 있습니다.
            백화점이나 대형마트에 가면 가장먼저 전자제품 코너에 직행하는 당신!
            새로운 그래픽카드나 CPU가 나오면 벌써부터 자신의 컴퓨터가 구시대처럼 느껴지기도 합니다
            게다가 이미 고사양 컴퓨터를 더욱 업그레이드 하는 모습을 보이네요..
            하지만 과유불급! 가끔은 본인의 목적과 지갑사정을 되돌아보면 어떨까요?`;
            break;
        case (PerPripoint <= -11):
            myPurchase = `컴퓨터는 나의 친구 <매니아>`;
            purchaseDetail = `컴퓨터에 상당한 관심을 가지고있습니다.
            컴퓨터에 관한 기본지식을 갖추고 있는 경우가 많아 지인들에게 견적 상담을 들어주기도합니다.
            최신 사양에 못미치더라도 그에 준하는 고사양 PC를 소유하고있지 않나요?
            하지만 가끔씩 보이는 초고사양 컴퓨터를 보고 선망의 시선을 보내기도합니다..`;
            break;
        case (PerPripoint <= 10):
            myPurchase = `성능과 가격 뭐하나 포기못해 <균형의 수호자>`;
            purchaseDetail = `흔히 말하는 가성비를 많이 따집니다.
            목적과 가격에 맞게 적절히 `;
            break;
        case (PerPripoint <= 30):
            myPurchase = `싸고 좋은걸 찾기위해 <하이에나>`;
            purchaseDetail = ``;
            break;
        case (PerPripoint <= 50):
            myPurchase = ``;
            purchaseDetail = ``;
            break;
        default:
            myPurchase = `에러! 케이스값의 예외발생`;
            break;
    }
    const mytestText = `당신의 성향은? ${myPurchase}`;
    const totalResult = `성향점수 : ${PerPripoint}, 실용성 : ${sumPrac}, 지식 : ${sumInt}`
    resultInner.innerText = totalResult;
    mytest.innerText = mytestText;

    resultInner.style.display = "block";
    mytest.style.display = "block";
    surveyWrap[0].style.display = "none";
}

function totalSum() {
    const ckPer = new Array(5);
    // 궁금점 : ckPer는 2차원 배열선언을 안한거같은데 알아서 2차원으로 인식함
    for(let i = 1; i <= 5; i++) {
        ckPer[i] = document.getElementsByName("ckPer" + i)
        if (ckPer[i][0].checked == true) {
            sumPer += 10;
            console.log(sumPer)
        }
    }
    const ckPri = new Array(5);
    for(let j = 1; j <= 5; j++) {
        ckPri[j] = document.getElementsByName("ckPri" + j)
        if (ckPri[j][0].checked == true) {
            sumPri += 10;
            console.log(sumPri)
        }
    }
    const ckInt = new Array(5);
    for(let k = 1; k <= 5; k++) {
        ckInt[k] = document.getElementsByName("ckInt" + k)
        if (ckInt[k][1].checked == true) {
            sumInt += 10;
            console.log(sumInt)
        }
    }
    const ckPrac = new Array(5);
    for(let l = 1; l <= 5; l++) {
        ckPrac[l] = document.getElementsByName("ckPrac" + l)
        if (ckPrac[l][1].checked == true) {
            sumPrac += 10;
            console.log(sumPrac)
        }
    }
    PerPripoint = sumPri - sumPer;
    resultText();
}

// 원래는 펑션별로 가격, 성능 등 값을 따로 구현하려다가 버튼 하나로 모든 펑션을 제어할 수 없어서 펑션을 통합함