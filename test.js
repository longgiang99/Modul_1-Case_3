function add() {
    let temp = new Student();
    let formData = getFormData();
    temp.setName(formData.name);
    temp.setEmail(formData.email);
    temp.setAddress(formData.address);
    temp.setSex(formData.sex);
    people.push(temp);
    display();
    clearFormData();
}

function edit(i) {
    setFormData(i);
    document.getElementById('temp').value = i;
    document.getElementById('save').style.display = 'none';
    document.getElementById('update').style.display = 'inline-block';
    display();
}

function update() {
    let index = document.getElementById('temp').value;
    let formData = getFormData();
    people[index].setName(formData.name);
    people[index].setEmail(formData.email);
    people[index].setAddress(formData.address);
    people[index].setSex(formData.sex);
    document.getElementById('save').style.display = 'inline-block';
    document.getElementById('update').style.display = 'none';
    display();
    clearFormData();
}
function getFormData() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let sex = document.querySelector('input[name="sex"]:checked').value;
    return { name, email, address, sex };
}

function setFormData(index) {
    document.getElementById('username').value = people[index].getName();
    document.getElementById('email').value = people[index].getEmail();
    document.getElementById('address').value = people[index].getAddress();

    if (people[index].getSex() === 'Male') {
        document.getElementById('male').checked = true;
    } else {
        document.getElementById('female').checked = true;
    }
}

function clearFormData() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    let radio = document.getElementsByName('sex');
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}
