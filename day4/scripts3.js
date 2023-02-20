// 3. Use the same rest countries and print all countries names, regions, sub-regions and population
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
            console.log(`Name: ${data[i]['name']['official']}, Region: ${data[i]['region']}, Sub-Region: ${data[i]['subregion']} Population: ${data[i]['population']}`)
        }
    } else {
        console.log(xhr.status)
    }
}