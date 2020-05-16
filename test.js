var yobi = new Array("日","月","火","水","木","金","土");
var today = new Date();
var week = today.getDay();

document.write( yobi[week] + "曜日です。");
