// let users = [];
// let numberOfUsers = 50;

// function getU(method, url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result.results[0]);
//             users.push(result.results[0]);
//             if (numberOfUsers === users.length) {
//                 printUsers();
//                 printTeachers(users);
//             }
//         })
//         .catch(error => {
//             console.error('fail:' + error);
//             setTimeout(getU('GET', myUrl), 1000);
//         })

// }

// function getUsers() {
//     let myUrl = 'https://randomuser.me/api/';

//     for (let i = 0; i < numberOfUsers - users.length; i++) {
//         //getU('GET', myUrl);
//         setTimeout(getU('GET', myUrl), 1000);
//     }
// }

// function printUsers() {
//     console.log(users);
// }