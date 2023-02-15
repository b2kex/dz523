class User{
    constructor(name, surname, year){
        this.name = name;
        this.surname = surname;
        this.year = year;
    }   
}
class Students extends User{
    constructor(name, surname, year)
    {super(name, surname, year)}

fullname(){
    console.log(`Student full name ${this.surname} ${this.name}`)
}

_actualyear = 2023;
_actualyear(){
    console.log(`Actual Year ${this._actualyear}`);
}
getcorse(){
    console.log( this._actualyear - this.year )
}
}

const Student = new Students('Sheldon', 'Cooper', 2020 )

Student.fullname()
Student.getcorse()