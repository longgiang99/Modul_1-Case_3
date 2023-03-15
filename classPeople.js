class Student {
    constructor(name,email,address,sex) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.sex = sex
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getAddress(){
        return this.address
    }
    getSex(){
        return this.sex
    }
    setName(name){
        this.name = name
    }
    setEmail(email){
        this.email = email
    }
    setAddress(address){
        this.address = address
    }
    setSex(sex){
        this.sex = sex
    }
   
}