let veryGoodVotes = 0;
let goodVotes = 0;
let normal = 0;
let bad = 0;
let veryBad = 0;

function refreshResults() {
    let results = document.getElementById('results');
    results.innerHTML = ' ' + veryGoodVotes + '  ' +
        '  ' + goodVotes + '  ' + normal + '  ' + bad + '  ' + veryBad;
}

document.getElementById('very_good').addEventListener('click', function () {
    veryGoodVotes++;
    refreshResults();
});

document.getElementById('good').addEventListener('click', function () {
    goodVotes++;
    refreshResults();
});

document.getElementById('normal').addEventListener('click', function () {
    normal++;
    refreshResults();
});
document.getElementById('bad').addEventListener('click', function () {
    bad++;
    refreshResults();
});
document.getElementById('very_bad').addEventListener('click', function () {
    veryBad++;
    refreshResults();
});