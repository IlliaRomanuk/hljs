function student(firstName,lastName, birthday){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.marks = [];
    this.attendabce = [];
    this.getAge = function(){
        console.log(new Date().getFullYear() - birthday);
    }
    this.getAverageMarks = function(){
       const result = this.marks.reduce( (acc, item) => acc + item, 0) / this.marks.length;
        return +result;
    }
    this.setAbsent = function(){
        if(this.attendabce.length < 25){
            this.attendabce.push(false);
        }else console.log('in attendance for 25 days');
    }
    this.setPresent = function(){
        if(this.attendabce.length < 25){
            this.attendabce.push(true);
        }else console.log('in attendance for 25 days');
    }
    this.sumary = function(){
        const avgMarks = this.getAverageMarks();
       const averageAttendabce = this.attendabce.reduce((acc, item) => acc + Number(item), 0) / this.attendabce.length;
       if(avgMarks > 90 && averageAttendabce > 0.9){
        console.log("Молодець!");
       }
       else if(avgMarks > 90 || averageAttendabce> 0.9){
        console.log("Добре, але можна краще");
       }
       else{
        console.log("Редиска!");
       }
    }
}
const student1 = new student("ivan","bistro", 2008);
student1.marks = [100, 90, 89, 99];
student1.getAge();
console.log(student1.getAverageMarks());
for(let i = 1; i <= 25; i++){
    student1.setPresent();
}
student1.sumary();
const student2 = new student("kiril","chorniy", 2007);
student2.marks = [70, 80, 89, 85];
student2.getAge();
console.log(student2.getAverageMarks());
for(let i = 1; i <= 25; i++){
    student2.setAbsent();
}
student2.sumary();