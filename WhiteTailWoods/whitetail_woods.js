
/*
    Finds open cabin dates in the White Tail Woods Cabins in MN.

    To Run:
        Go to the following URL
        https://web2.vermontsystems.com/wbwsc/mndakotactywt.wsc/search.html?Action=Start&SubAction=&begindate=04%2F05%2F2021&rnwebsearch_search=Yes&nights=1&display=Listing&module=RN&multiselectlist_value=&rnwebsearch_buttonsearch=Search

        Update the "nights, months, years" variables.
        Paste the code in the console - it will print each day in succession and if there are open cabins (<5 closed cabins) it will
        print the number of cabins.
*/

// Options
var nights = 1; // Number of nights to search for
var months = [12, 1, 2, 3, 4];
var years = [2020, 2021, 2021, 2021, 2021];

// Code
function count(re, str) {
    if (typeof re !== "string") {
        return 0;
    }
    re = (re === '.') ? ('\\' + re) : re;
    var cre = new RegExp(re, 'g');
    return ((str || '').match(cre) || []).length;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cabins(month, day, year, nights){
    var url = "https://web2.vermontsystems.com/wbwsc/mndakotactywt.wsc/search.html?Action=Start&SubAction=&begindate=" + month.toString() + "%2F" + day.toString() + "%2F" + year.toString() + "&rnwebsearch_search=Yes&nights=" + nights.toString() + "&display=Listing&module=RN&multiselectlist_value=";
    let response = await fetch(url);
    if (response.ok){
        let text = await response.text();
        console.log("Date: " + month.toString() + "-" + day.toString() + "-" + year.toString());
        var c = count("button error cart-button", text);
        if (c < 5) {
            console.log("\tClosed Cabins: " + c);
        }
        return true;
    } else {
        return false;
    }
}

var a = 0;
for (a = 0; a < months.length; a++){
    var day = 0;
    for (day = 1; day <= 31; day++) {
        await sleep(500);
        cabins(months[a], day, years[a], nights);
    }
}
