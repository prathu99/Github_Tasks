// setTimeout(function first() {
//     console.log("Welcome")
//     setTimeout(function second() {
//         console.log("to")
//         setTimeout(function third() {
//             console.log("GUVI")
//         }, 2000)
//     }, 2000)
// }, 2000)

window.onload = function () {

    var txt = document.getElementById('text');

    txt.innerHTML = 10;
    setTimeout(function () {
        txt.innerHTML = 9;
        setTimeout(function () {
            txt.innerHTML = 8;
            setTimeout(function () {
                txt.innerHTML = 7;
                setTimeout(function () {
                    txt.innerHTML = 6;
                    setTimeout(function () {
                        txt.innerHTML = 5;
                        setTimeout(function () {
                            txt.innerHTML = 4;
                            setTimeout(function () {
                                txt.innerHTML = 3;
                                setTimeout(function () {
                                    txt.innerHTML = 2;
                                    setTimeout(function () {
                                        txt.innerHTML = 1;
                                        setTimeout(function () {
                                            msg.style.visibility = 'visible';
                                            txt.style.visibility = 'hidden';
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)

}