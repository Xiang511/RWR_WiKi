let Introduction = document.getElementById("Introduction");
let IntroductionText =  document.querySelectorAll('.usage');
Introduction.addEventListener("click", function() {
    IntroductionText.forEach(function(text) {
        if (text.style.display === "block") {
            text.style.opacity = "0";
            setTimeout(function() {
                text.style.display = "none";
            }, 500);
        } else {
            text.style.display = "block";
            setTimeout(function() {
                text.style.opacity = "1";
            }, 10);
        }
    });
});



//即時查詢總人數
const firstSpan = document.querySelector('.sitestatesJs');
//取得字串
const text = firstSpan.textContent;
//取得數字
const Real_Time_Number = text.substring(text.length - 4);


//今日訪客
const spans = document.querySelectorAll(".sitestatesJs");
const secondSpan = spans[1];
const secondSpan_txt = secondSpan.textContent;
const secondSpan_result = secondSpan_txt.substring(text.length - 4);

//線上人數
const online = document.querySelectorAll(".sitestatesJs");
const onlineSpan = online[2];
const onlineSpan_txt = onlineSpan.textContent;
const onlineSpan_result = onlineSpan_txt.substring(text.length - 4);

document.getElementById("Total").innerHTML = "Cumulative visitors:" + "&ensp;" + Real_Time_Number;
// document.getElementById("month").innerHTML = "本月訪客:"+ month;
document.getElementById("Today").innerHTML = "Today’s visitors:" + "&ensp;" + secondSpan_result;
document.getElementById("online").innerHTML = "Number of people online:" + "&ensp;" + onlineSpan_result;