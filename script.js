const statsValues = [255, 190, 230, 194, 230, 180];
let values = [45, 49, 49, 65, 65, 45];
const stats = ["#hp", "#atk", "#def", "#spAtk", "#spDef", "#speed"];

for (var st in stats) {
    barChart(values, st)
}

function barChart(values, st) {
    let bar = document.querySelector(stats[st]);
    let width = 0;
    var loadBar = setInterval(function(){
        if (width >= values[st] * 100/ statsValues[st]) {
            clearInterval(loadBar);
        } else {
            width += 1;
            bar.style.width = width + '%';
        }
    }, 20);  
}