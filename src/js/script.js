// let myUsers = [];
// let unique = [];
// let numberOfUsers = 50;
// let myUrl = 'https://randomuser.me/api/'


// function getU(method, url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result.results[0]);
//             users.push(result.results[0]);
//             if (numberOfUsers === myUsers.length) {
//                 printUsers();
//                 unique = _.map(myUsers, function(item) {
//                     const user = {};

//                     user.gender = item.gender;
//                     user.title = item.name.title;
//                     user.full_name = item.name.first + ' ' + item.name.last;
//                     user.city = item.location.city;
//                     user.state = item.location.state;
//                     user.country = item.location.country;
//                     user.postcode = item.location.postcode;
//                     user.latitude = item.location.coordinates.latitude;
//                     user.longitude = item.location.coordinates.longitude;
//                     user.timezone = item.location.timezone;
//                     user.email = item.email;
//                     user.b_date = item.dob.date;
//                     user.age = item.dob.age;
//                     user.picture_thumbnail = item.picture.thumbnail;
//                     user.phone = item.phone;
//                     user.picture_large = item.picture.large;
//                     user.state = item.location.state;
//                     user.id = null;
//                     user.favourite = false;
//                     user.course = null;
//                     user.bg_color = null;
//                     user.note = "";
//                     return user;
//                 });
//                 for (let i = 0; i < unique.length; i++) {
//                     unique[i].id = i;
//                 }
//                 printTeachers(unique);
//                 printTable(unique);
//             }
//         })
//         .catch(error => {
//             console.error('fail:' + error);
//             setTimeout(getU('GET', myUrl), 1000);
//         })

// }

// function getUsers() {

//     for (let i = 0; i < numberOfUsers - myUsers.length; i++) {
//         //getU('GET', myUrl);
//         setTimeout(getU('GET', myUrl), 1000);
//     }
// }

// function printUsers() {
//     console.log(unique);
// }


let unique = [];
let counter = 1;

function firstF() {
    let users = [];
    //AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US
    let myUrl = 'https://randomuser.me/api/?results=10';
    let params = new URLSearchParams(myUrl.search);
    let country = document.getElementById("filterCountry").value;
    let fav = document.getElementById("filterFav").checked;
    let ageFrom = document.getElementById("filterAgeFrom").value;
    let ageTo = document.getElementById("filterAgeTo").value;
    let men = document.getElementById("filterMen").checked;
    let women = document.getElementById("filterWomen").checked;

    if (unique.length < 0 || unique.length == 50) {
        myUrl = myUrl + '&page=1';
    }
    if (unique.length == 10) {
        myUrl = myUrl + '&page=2';

    }
    if (unique.length == 20) {
        myUrl = myUrl + '&page=3';
    }
    if (unique.length == 30) {
        myUrl = myUrl + '&page=4';
    }
    if (unique.length == 40) {
        myUrl = myUrl + '&page=5';
    }


    switch (country) {
        case "Australia":
            myUrl = myUrl + '&nat=au';
            break;
        case "Brazil":
            myUrl = myUrl + '&nat=br'
            break;
        case "Canada":
            myUrl = myUrl + '&nat=ca'
            break;
        case "Switzerland":
            myUrl = myUrl + '&nat=ch'
            break;
        case "Germany":
            myUrl = myUrl + '&nat=de'
            break;
        case "Denmark":
            myUrl = myUrl + '&nat=dk'
            break;
        case "Spain":
            myUrl = myUrl + '&nat=es'
            break;
        case "Finland":
            myUrl = myUrl + '&nat=fi'
            break;
        case "France":
            myUrl = myUrl + '&nat=fr'
            break;
        case "United Kingdom":
            myUrl = myUrl + '&nat=gb'
            break;
        case "Ireland":
            myUrl = myUrl + '&nat=ie'
            break;
        case "Iran":
            myUrl = myUrl + '&nat=ir'
            break;
        case "Norway":
            myUrl = myUrl + '&nat=no'
            break;
        case "Netherlands":
            myUrl = myUrl + '&nat=nl'
            break;
        case "New Zealand":
            myUrl = myUrl + '&nat=nz'
            break;
        case "Turkey":
            myUrl = myUrl + '&nat=tr'
            break;
        case "United States":
            myUrl = myUrl + '&nat=us'
            break;
        default:
            myUrl = myUrl;
    }

    console.log(myUrl);

    if (men == true) {
        myUrl = myUrl + '&gender=male'
    }
    if (women == true) {
        myUrl = myUrl + '&gender=female';
    }

    let uniqueHelper = [];
    console.log(men);
    console.log(myUrl);
    let array = []
    if (unique.length < 50); {
        $.ajax({
            url: myUrl,
            dataType: 'json',
            success: function(data) {
                console.log(data.results);
                for (let i = 0; i < 10; i++) {

                    users.push(data.results[i]);
                    array = _.map(users, function(item) {
                        const user = {};

                        user.gender = item.gender;
                        user.title = item.name.title;
                        user.full_name = item.name.first + ' ' + item.name.last;
                        user.city = item.location.city;
                        user.state = item.location.state;
                        user.country = item.location.country;
                        user.postcode = item.location.postcode;
                        user.latitude = item.location.coordinates.latitude;
                        user.longitude = item.location.coordinates.longitude;
                        user.timezone = item.location.timezone;
                        user.email = item.email;
                        user.b_date = item.dob.date;
                        user.age = item.dob.age;
                        user.picture_thumbnail = item.picture.thumbnail;
                        user.phone = item.phone;
                        user.picture_large = item.picture.large;
                        user.state = item.location.state;
                        user.id = null;
                        user.favourite = false;
                        user.course = null;
                        user.bg_color = null;
                        user.note = "";
                        return user;
                    });

                    for (let i = 0; i < unique.length; i++) {
                        unique[i].id = i;
                    }
                }
                uniqueHelper = unique;
                console.log(array);
                console.log(2);
                console.log(uniqueHelper);
                unique = _.union(uniqueHelper, array);
                console.log(unique);
                printTable(unique);
                printTeachers(array);

                let elements = document.querySelectorAll('.starWin');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].addEventListener('click', isFav);
                };
                drawChart1(unique);
                drawChart2(unique);
                drawChart3(unique);
            }
        });
    };
}


async function sendTeach() {
    let user = {};
    user.name = document.getElementById("nameAdd").value;
    user.country = document.getElementById("countryAdd").value;
    user.city = document.getElementById("cityAdd").value;
    user.phone = document.getElementById("phoneAdd").value;
    user.age = document.getElementById("ageAdd").value;
    if (document.getElementById("maleAdd").checked) user.gender = 'male';
    else user.gender = 'female';
    user.bg_color = document.getElementById("bg_color").value;


    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
    } catch (error) {
        console.error('Fail:', error);
    }
}



// console.log('start of global');
// let users = [];
// console.log(users);

// function getU(method, url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result.results[0]);
//             users.push(result.results[0]);
//         })
//         .catch(error => {
//             console.error('fail:' + error);
//         })

// }

// async function GetUsers() {
//     let myUrl = 'https://randomuser.me/api/';
//     console.log('start of function');
//     let users = [];
//     console.log(users);

//     for (let i = 0; i < 50; i++) {
//         setTimeout(await getU('GET', myUrl), 100);
//     }
//     console.log('end of function');
//     console.log(users);

// }

// function printUsers() {
//     setTimeout(console.log(users), 1000);
// }
// console.log('end of global');
// console.log(users);

// GetUsers();
// printUsers();

// console.log(users);




// console.log(myUsers)


// myUsers.concat(additionalUsers);

//let unique = myUsers.filter((set => f => !set.has(f.full_name) && set.add(f.full_name))(new Set));

//____________________________ 1 завдання __________________________________
//console.log(unique)



let pattern = /((?:[A-Z]\w+[ -]?)+)/;
let regEmail = /^[^\s@]+@[^\s@]+$/;
let regTel = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

// Validation rules
const rules = [{
        test: (user) => typeof(user.full_name) === 'string',
        message: "User's name is not String",
    },
    {
        test: (user) => typeof(user.gender) === 'string',
        message: "User's gender is not String",
    },
    {
        test: (user) => typeof(user.age) === 'number',
        message: "User's age is not number",
    },
    {
        test: (user) => typeof(user.note) === 'string',
        message: "User's note is not String",
    },
    {
        test: (user) => typeof(user.city) === 'string',
        message: "User's note is not String",
    },
    {
        test: (user) => typeof(user.state) === 'string',
        message: "User's state is not String",
    },
    {
        test: (user) => typeof(user.country) === 'string',
        message: "User's note is not String",
    },
    {
        test: (user) => pattern.test(user.full_name) === true,
        message: "User's name is not valid",
    },
    {
        test: (user) => pattern.test(user.city) === true,
        message: "User's city is not valid",
    },
    {
        test: (user) => pattern.test(user.country) === true,
        message: "User's country is not valid",
    },
    {
        test: (user) => pattern.test(user.state) === true,
        message: "User's state is not valid",
    },
    {
        test: (user) => regEmail.test(user.email) === true,
        message: "User's email is not valid",
    },
    {
        test: (user) => regTel.test(user.phone) === true,
        message: "User's phone is not valid",
    }
];

// Validation function
function validate(obj, rules) {
    const errors = rules.reduce((errs, rule) => {
        const result = rule.test(obj);
        if (result === false) {
            errs.push(rule.message);
        }
        return errs;
    }, []);

    return {
        errors,
        isValid: errors.length === 0,
    };
};

function validateArr(rules) {
    let val = _.each(unique, validate(rules));
    for (let i = 0; i < arr.length; i++) {
        val.push('user №' + (i + 1), validate(arr[i], rules))
    }
    return console.log(val);
}


// //____________________________ 2 завдання __________________________________
// //console.log(validateArr(unique, rules));


function filterByAge(valueFrom, valueTo) {
    return unique => unique.age >= valueFrom && unique.age <= valueTo;
}

// //console.log(unique.filter(filterByAge(44, 56)));

function filterBySth(value, key) {
    return unique => unique[value] === key;
}


// //____________________________ 3 завдання __________________________________
// // console.log(unique.filter(filterBySth('country', 'Finland')));
// // console.log(unique.filter(filterByAge(44, 56)));
// // console.log(unique.filter(filterBySth('gender', 'female')));
// // console.log(unique.filter(filterBySth('favourite', true)));

// (function() {
//     var keyPaths = [];

//     var saveKeyPath = function(path) {
//         keyPaths.push({
//             sign: (path[0] === '+' || path[0] === '-') ? parseInt(path.shift() + 1) : 1,
//             path: path
//         });
//     };

//     var valueOf = function(object, path) {
//         var ptr = object;
//         for (var i = 0, l = path.length; i < l; i++) ptr = ptr[path[i]];
//         return ptr;
//     };

//     var comparer = function(a, b) {
//         for (var i = 0, l = keyPaths.length; i < l; i++) {
//             aVal = valueOf(a, keyPaths[i].path);
//             bVal = valueOf(b, keyPaths[i].path);
//             if (aVal > bVal) return keyPaths[i].sign;
//             if (aVal < bVal) return -keyPaths[i].sign;
//         }
//         return 0;
//     };

//     Array.prototype.sortBy = function() {
//         keyPaths = [];
//         for (var i = 0, l = arguments.length; i < l; i++) {
//             switch (typeof(arguments[i])) {
//                 case "object":
//                     saveKeyPath(arguments[i]);
//                     break;
//                 case "string":
//                     saveKeyPath(arguments[i].match(/[+-]|[^.]+/g));
//                     break;
//             }
//         }
//         return this.sort(comparer);
//     };
// })();

// //____________________________ 4 завдання __________________________________
// // console.log(unique.sortBy('age'));
// // console.log(unique.sortBy('-country'));
// // console.log(unique.sortBy('country'));

// function searchObjectArrayProperties(search, arrayToSearch) {
//     var matches = [];
//     for (var i = 0; i < arrayToSearch.length; i++) {
//         for (var prop in arrayToSearch[i]) {
//             if (arrayToSearch[i][prop] === search) {
//                 matches.push(arrayToSearch[i]);
//                 break;
//             }
//         }
//     }
//     return matches;
// }

// //____________________________ 5 завдання __________________________________
// // console.log(searchObjectArrayProperties(55, unique));
// // console.log(searchObjectArrayProperties('Elias Tikkanen', unique));

// function perByAge(valueFrom, valueTo) {
//     let all = myUsers.length;
//     let arr = myUsers.filter(filterByAge(valueFrom, valueTo));
//     let per = (arr.length * 100) / all;
//     return per + "%";
// }

// function perBySth(value, key) {
//     let all = unique.length;
//     let arr = unique.filter(filterBySth(value, key));
//     let per = (arr.length * 100) / all;
//     return per + "%";
// }


// //____________________________ 6 завдання __________________________________
// //console.log(perBySth('gender', 'male'));
// //console.log(perBySth('country', 'Germany'));

//____________________________ 1 завдання __________________________________


function printTeachers(array) {
    const myNode = document.getElementById('wrapper');
    myNode.innerHTML = '';
    const teachers_wrapper = document.getElementById("wrapper");



    array.forEach((array, ind) => {
        const bd_date_valid = getBirth(array.b_date);
        const div_wrapper = document.createElement("div");
        div_wrapper.innerHTML =
            ` 
 
            <details>
            <summary>
                <a href="#okno${ind}" > <img src="${array.picture_large}" alt="pic" class="photo1"></a>
                <div id="okno${ind}" class="container popup_window">
<a href="#" class="x"><img src="X.png" class="x" alt=""></a>
<div class="winText">Teacher Info</div>
<img src="${array.picture_large}" alt="" class="winPhoto">
<img src="s.png" class="starWin" id="starButt" alt="${array.id}">

<div class="wrapper2">
<span class="winName">${array.full_name}</span>
<span class="info">${array.city}, ${array.country}</span>
<span class="info">${array.age}, ${array.gender}</span>
<span class="infoE">${array.email}</span>
<span class="info">${array.phone}</span>
<p class="info">Birthday in ${bd_date_valid} days.</p>
</div>
<div class = "map" id="map${ind}"></div>
</div>
                <p class="name">${array.full_name}</p>
                <span class="country">${array.country}</span>
            </summary>
        </details>
 
      `


        teachers_wrapper.appendChild(div_wrapper);

        addMap(ind, array.latitude, array.longitude);

    })

};

//printTeachers(unique);

let elements2 = document.querySelectorAll('#user');
console.log(elements2);
for (let i = 0; i < elements2.length; i++) {
    elements2[i].addEventListener('click', addMap);
};


function addMap(ind, latitude, longitude) {
    // initialize the map
    let map = L.map('map' + ind).setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(map);

    let marker = new L.Marker([latitude, longitude]);

    marker.addTo(map);
}



let elements = document.querySelectorAll('.starWin');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', isFav);
};

function isFav(e) {
    let user = e.target;
    let img = user.getAttribute('src');
    // console.log(img);
    let id = user.getAttribute('alt');
    if (img === "s.png") {
        user.setAttribute('src', 's2.png');
        unique[id].favourite = true;
    } else {
        user.setAttribute('src', 's.png');
        unique[id].favourite = false;
    }
    console.log(unique[id]);
}





// //____________________________ 2 завдання __________________________________

function filterArray() {
    let country = document.getElementById("filterCountry").value;
    let fav = document.getElementById("filterFav").checked;
    let ageFrom = document.getElementById("filterAgeFrom").value;
    let ageTo = document.getElementById("filterAgeTo").value;
    let men = document.getElementById("filterMen").checked;
    let women = document.getElementById("filterWomen").checked;

    console.log(country);
    console.log(women);
    let unique2 = unique;

    if (country !== "") unique2 = _.filter(unique2, function(item) {
        return item.country === country
    });


    if (fav !== false) unique2 = unique.filter(filterBySth('favourite', true));

    if (men !== true && women === true) unique2 = _.filter(unique2, function(item) {
        return item.gender === 'female'
    });

    if (women !== true && men === true) unique2 = _.filter(unique2, function(item) {
        return item.gender === 'male'
    });

    if (ageFrom !== "" && ageTo !== "") unique2 = unique.filter(filterByAge(ageFrom, ageTo));

    printTeachers(unique2);

}

document.getElementById('filterButton').addEventListener('click', filterArray);


//____________________________ 4 завдання __________________________________


document.getElementById('searchButt').addEventListener('click', findSth);


//lodash 
function findSth() {
    let findTeach = new Array(0);
    let key = document.getElementById('searchIn').value;
    if (key === "") {
        printTeachers(unique);
    } else {
        console.log(key);
        findTeach.push(_.find(unique, function(item) {
            return (item.full_name === key);

        }));
        printTeachers(findTeach);
    }
    key == 0;
}


//____________________________ 5 завдання __________________________________

document.getElementById('addWinBut').addEventListener('click', addTeacher);

function addTeacher() {
    let myTeacher = {
        full_name: document.getElementById('nameAdd').value,
        country: document.getElementById('countryAdd').value,
        city: document.getElementById('cityAdd').value,
        phone: document.getElementById('phoneAdd').value,
        email: document.getElementById('emailAdd').value,
        age: document.getElementById('ageAdd').value,
        gender: document.getElementById('maleAdd').value ? 'male' : 'female',
        picture_large: 'anonym.png'
    }
    console.log(validate(myTeacher, rules));
    unique.unshift(myTeacher);

    printTeachers(unique);
}


// chart1
function drawChart1(array) {
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext('2d');


    const countGenderMale = array.filter((obj) => obj.gender === "female").length;

    // Global Options:
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontSize = 16;

    var data = {
        labels: ["Male", "Female"],
        datasets: [{
            fill: true,
            backgroundColor: [
                'black',
                'white'
            ],
            data: [countGenderMale, array.length - countGenderMale],
            // Notice the borderColor 
            borderColor: ['black', 'black'],
            borderWidth: [2, 2]
        }]
    };

    var options = {
        title: {
            display: true,
            text: 'Age',
            position: 'top'
        },
        rotation: -0.7 * Math.PI
    };

    // Chart declaration:
    var myBarChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}


// chart2
function drawChart2(array) {
    var canvas2 = document.getElementById("mycanvas2");
    var ctx2 = canvas2.getContext('2d');


    var a1 = array.filter((obj) => obj.country === "Australia").length;
    var a2 = array.filter((obj) => obj.country === "Canada").length;
    var a3 = array.filter((obj) => obj.country === "Denmark").length;
    var a4 = array.filter((obj) => obj.country === "Finland").length;
    var a5 = array.filter((obj) => obj.country === "France").length;
    var a6 = array.filter((obj) => obj.country === "Germany").length;
    var a7 = array.filter((obj) => obj.country === "Iran").length;
    var a8 = array.filter((obj) => obj.country === "Ireland").length;
    var a9 = array.filter((obj) => obj.country === "Netherlands").length;
    var a10 = array.filter((obj) => obj.country === "New Zealand").length;
    var a11 = array.filter((obj) => obj.country === "Norway").length;
    var a12 = array.filter((obj) => obj.country === "Spain").length;
    var a13 = array.filter((obj) => obj.country === "Switzerland").length;
    var a14 = array.filter((obj) => obj.country === "Turkey").length;
    var a15 = array.filter((obj) => obj.country === "United States").length;

    var data2 = {
        labels: ["Australia", "Canada", "Denmark", "Finland", "France", "Germany", "Iran", "Ireland", "Netherlands", "New Zealand", "Norway", "Spain", "Switzerland", "Turkey ", "United States"],
        datasets: [{
            fill: true,
            backgroundColor: ["#E5E5D7", "#DEDC9C", "#EFEB7B", "#FFF833", "#FFE833", "#E6CB00", "#C7AE00", "#FAC247", "#FAA147", "#F27B02", "#BA5F03", "#BA4803", "#F6955A", "#F6BE9C", "#D68A00"],
            data: [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15],
        }]
    };

    var options2 = {
        title: {
            display: true,
            text: 'Nationality',
            position: 'top'
        },
        rotation: -0.7 * Math.PI
    };

    // Chart declaration:
    var myBarChart2 = new Chart(ctx2, {
        type: 'pie',
        data: data2,
        options: options2
    });
}


// chart3
function drawChart3(array) {
    var canvas3 = document.getElementById("mycanvas3");
    var ctx3 = canvas3.getContext('2d');


    var b1 = array.filter((obj) => obj.age > 40).length;


    var data3 = {
        labels: ["More than 40", "Less than 40"],
        datasets: [{
            fill: true,
            backgroundColor: ["#f75c49", "white"],
            data: [b1, array.length - b1],
            borderColor: ['black', 'black'],
            borderWidth: [2, 2]
        }]
    };

    var options3 = {
        title: {
            display: true,
            text: 'Age',
            position: 'top'
        },
        rotation: -0.7 * Math.PI
    };

    // Chart declaration:
    var myBarChart3 = new Chart(ctx3, {
        type: 'pie',
        data: data3,
        options: options3
    });
}

function getBirth(birthdayData) {

    var bd = new Date(birthdayData);
    var first = new Date(bd.getFullYear(), 0, 1);
    var daysFromBirthday = Math.round(((bd - first) / 1000 / 60 / 60 / 24) + .5, 0);


    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var daysFromToday = Math.floor(diff / oneDay);

    const birthday = dayjs(birthdayData);
    const today = dayjs(new Date());


    const daysToBirthday = daysFromBirthday > daysFromToday ?
        daysFromBirthday - daysFromToday :
        birthday.add(today.year() - birthday.year() + 1, 'year').diff(today, 'day');

    return (daysToBirthday);
}