let people = []

function add() {
    let temp = new Student()
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let sex = document.querySelector('input[name="sex"]:checked').value;
    temp.setName(name)
    temp.setEmail(email)
    temp.setAddress(address)
    temp.setSex(sex)
    people.push(temp)
    display()
    reset()
}

function edit(i) {

    let replace = document.getElementById('value')

    document.getElementById('username').value = people[i].getName();
    document.getElementById('email').value = people[i].getEmail();
    document.getElementById('address').value = people[i].getAddress();
    document.getElementById('male').value = people[i].getSex();
    
    people.push(replace)
    display()
    reset()
}

function remote(index) {
    people.splice(index, 1)
    display()
}

function display() {
    let display = `
       <tr>
         <th>stt</th>
         <th>name</th>
         <th>email</th>
         <th>address</th>
         <th>sex</th>
         <th>edit</th>
         <th>delete</th>
       </tr>`
    for (let i = 0; i < people.length; i++) {
        display += `<tr>
                       <td>${i + 1}</td>
                       <td>${people[i].getName()}</td>
                       <td>${people[i].getEmail()}</td>
                       <td>${people[i].getAddress()}</td>
                       <td>${people[i].getSex()}</td>
                       <td><input type="button" value="Edit" onclick="edit(${i})"></td>
                       <td><input type="button" value="Delete" onclick="remote(${i})"></td>
                    </tr>`
    }
    document.getElementById('table').innerHTML = `<table>${display}</table>`
}
function reset(){
    document.getElementById('username').value = ''
    document.getElementById('email').value = ''
    document.getElementById('address').value = ''
    document.getElementsByName('sex').value = false
    
}