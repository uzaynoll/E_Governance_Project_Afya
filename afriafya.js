var noticeList = ['OFFICIAL WORKING HOURS : SUN – THU (10 AM TO 5 PM ) ,FRIDAY (10 AM TO 3 PM )', ' TOTAL NUMBER OF MRPs ISSUED IN FISCAL YEAR 2076/77 : 398,842', 'TOTAL NUMBER OF MRPs ISSUED AS OF SEPTEMBER, 2020 :6,395,135']
function ChangeValue(x) {
 document.getElementById("notices").innerHTML = noticeList[x];
 document.getElementById(x).className = "scroll-btn scroll-active";
 RefershBtn(x);
 x = parseInt(x);
}
function RefershBtn(x) {
 x = parseInt(x);
 for (var i = 0; i < 3; i++) {
 if (i != x)
 document.getElementById(i).className = "scroll-btn";
 }
}