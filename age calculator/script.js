
function calculate() {
    let bdate, bmonth, byear, cdate, cmonth, cyear;
    let input = document.getElementById("input").value;
    bdate = new Date(input).getDate();
    bmonth = new Date(input).getMonth();
    byear = new Date(input).getFullYear();

    currentdate = new Date();
    cdate = currentdate.getDate();
    cmonth = currentdate.getMonth();
    cyear = currentdate.getFullYear();


    calculateage(bdate, bmonth, byear, cdate, cmonth, cyear);


};
function calculateage(bdate, bmonth, byear, cdate, cmonth, cyear) {
    let sdate, smonth, syear;
    syear = cyear - byear;

    if (cmonth >= bmonth) {
        smonth = cmonth - bmonth;
    }
    else {
        syear--;
        smonth = 12 + cmonth - bmonth;
    }

    if (cdate >= bdate) {
        sdate = cdate - bdate;
    }
    else {
        smonth--;
        sdate = 30 + cdate - bdate;
    }
    showdates(syear, smonth, sdate);
};




function showdates(syear, smonth, sdate) {
    document.getElementById("year").textContent = syear;
    document.getElementById("month").textContent = smonth;
    document.getElementById("day").textContent = sdate;
};
