let index = 1;
const submitBtn = document.getElementsByClassName("submitBtn");
const preBtn = document.getElementsByClassName("previousBtn");
const nextBtn = document.getElementsByClassName("nextBtn");
const x = document.getElementsByClassName("questionInner");
const progressbar = document.querySelector(".progressbar");

function nextSurvey() {
    let i;
    for(i = 0; i < x.length; i++) {
        x[i].style.display="none";
    }
    index++;
    x[index-1].style.display = "block";
    preBtn[0].style.display="inline";
    if(index == x.length) {
        submitBtn[0].style.display="block";
        nextBtn[0].style.display="none";
    }
    let pageNum = `${index} / 20`;
    progressbar.innerHTML = pageNum;
    console.log(index);
}

function previousSurvey() {
    let i;
    for(i = 0; i < x.length; i++) {
        x[i].style.display="none";
    }
    index--;
    x[index-1].style.display = "block";
    nextBtn[0].style.display="inline";
    if(index == 1) {
        preBtn[0].style.display="none";
    }
    let pageNum = `${index} / 20`;
    progressbar.innerHTML = pageNum;
    console.log(index);
}