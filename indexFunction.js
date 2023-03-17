let people = []

function add() {
    let temp = new Student()
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let sex = document.querySelector('input[name="sex"]:checked').value;
    
        temp.setName(name);
        temp.setEmail(email);
        temp.setAddress(address);
        temp.setSex(sex);
    people.push(temp);
    display();
    reset();
}


function edit(i) {
    
    document.getElementById('username').value = people[i].getName();
    document.getElementById('email').value = people[i].getEmail();
    document.getElementById('address').value = people[i].getAddress();

    if(people[i].getSex() === 'Male'){
        document.getElementById('male').checked = true;
    }else {
        document.getElementById('female').checked = true;
    }
    document.getElementById('temp').value = i;
    document.getElementById('save').style.display= 'none';
    document.getElementById('update').style.display= 'inline-block';
    
    
    display();
   
}
function update(){
    
    let index = document.getElementById('temp').value
    let name =  document.getElementById('username').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let sex = document.querySelector('input[name="sex"]:checked').value;
    
    people[index].setName(name);
    people[index].setEmail(email);
    people[index].setAddress(address);
    people[index].setSex(sex);
    document.getElementById('save').style.display= 'inline-block';
    document.getElementById('update').style.display= 'none';
    display()
    reset()
}

function deletes(index) {
    people.splice(index, 1)
    display()
}

function display() {
    let display = `
       <tr>
         <th>STT</th>
         <th>Student name</th>
         <th>Email</th>
         <th>Address</th>
         <th>Sex</th>
         <th>Edit</th>
         <th>Delete</th>
       </tr>`
    for (let i = 0; i < people.length; i++) {
        display += `<tr>
                       <td>${i + 1}</td>
                       <td>${people[i].getName()}</td>
                       <td>${people[i].getEmail()}</td>
                       <td>${people[i].getAddress()}</td>
                       <td>${people[i].getSex()}</td>
                       <td><input type="button" value="Edit" onclick="edit(${i})"></td>
                       <td><input type="button" value="Delete" onclick="deletes(${i})"></td>
                    </tr>`
    }
    document.getElementById('table').innerHTML = `<table>${display}</table>`
}
function reset(){
    document.getElementById('username').value = ''
    document.getElementById('email').value = ''
    document.getElementById('address').value = ''
    // let radio = document.getElementsByName('sex')
    // for (let i = 0; i < radio.length; i++) {
    //     radio[i].checked = false
    // }
    //
}