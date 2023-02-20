//2. Use the rest countries api and display all the country flags in the console

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://restcountries.com/v3.1/all')

// send over the request
xhr.send()

xhr.onload = function () {
    var data = JSON.parse(xhr.response);
    if (xhr.status == 200) {
        // console.log(xhr.response)
        let flags = xhr.response
        for (var i in data) {
            console.log(data[i]['flag'])
        }
    } else {
        console.log(xhr.status)
    }
}
