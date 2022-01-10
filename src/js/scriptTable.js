//____________________________ 3 завдання __________________________________

function printTable(array) {
    const myNode = document.getElementById("content-table");
    myNode.innerHTML = '';
    const teachers_wrapper = document.getElementById("content-table");

    unique.forEach(user => {
        const div_wrapper = document.createElement("tr");
        div_wrapper.innerHTML =
            ` 
          <td>${user.full_name}</td> 
          <td>${user.age}</td> 
          <td>${user.gender}</td> 
          <td>${user.country}</td> 
 
      `
        teachers_wrapper.appendChild(div_wrapper);
    })
};

//printTable(unique);

function sortByName() {
    unique = _.sortBy(unique, 'full_name');
    printTable(unique);
}

function sortByAge() {
    unique = _.sortBy(unique, 'age');
    printTable(unique);
}

function sortByGender() {
    unique = _.sortBy(unique, 'gender');
    printTable(unique);
}

function sortByCountry() {
    unique = _.sortBy(unique, 'country');
    printTable(unique);
}