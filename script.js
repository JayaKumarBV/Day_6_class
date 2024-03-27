//!class
class Movie {
    constructor(title,studio,rating="PG"){
        this.title - title; //key: value //leo : title
        this.studio = studio;
        this.rating = rating;
    }
}
    const obj = new Movie("leo","7-screen","7.2");
    const obj1 = new Movie("Vikram","RK","8.5");

    console.log(obj1.title,obj1.studio,obj1.rating);


   // !class person => name,age,gender,marital,status,contact,email



    class Person {

        constructor(name,age,gender,marital,status,contact,email){

            this.name = name;
            this.age = age;
            this.gender = gender;
            this.marital = marital;
            this.status = status;
            this.contact = contact;
            this.email = email;
        }
    }
    const obj2 = new Person("Jay",30,"Male","Married","M","987654321","xyz@abc.com");
    console.log(obj2.name,obj2.age,obj2.gender,obj2.marital,obj2.status,obj2.contact,obj2.email);