class UserData{
    constructor(companyName: String, firstName: String, lastName: String, email:String, password: String, phone: String){
        this.companyName = companyName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
    companyName: String;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    phone: String;
}

export default UserData;