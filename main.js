class Person{
   
   constructor(name,age,country){
   this.name=name
   this.age=age
   this.country=country

   }

   details(){
    document.write(`My name is ${this.name} <br><br>
    Age: ${this.age}<br><br>
    My country: ${this.country}<br><br><br>`)
    }


}

let per1=new Person(prompt("Enter the  name1"),prompt("Enter the age1"),prompt("enter the your country1"))
per1.details()

let per2=new Person(prompt("Enter the  name2"),prompt("Enter the age2"),prompt("enter the your country2"))
per2.details()



