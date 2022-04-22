"use strict";
(function () {


    function multi(){
        let x = 1;
        while (x < 65536){
            x *= 2;
            console.log(x)
        }
    }
    multi();


})();