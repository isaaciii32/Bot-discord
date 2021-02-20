const request = require('request');



exports.buscador=function(q) {

    var key='AIzaSyDc2MM2Yf8o4Mu1QthW3oZ5CtCOSK2d4lc';
    var cx='001226528808346532614:onj5o8nmrm8';

    let url ='https://www.googleapis.com/customsearch/v1?key='+key+'&cx='+cx+'&q='+q+'';

    return url;

}

