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
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++){
            sum += +this.marks[i];
        }
        console.log(sum / this.marks.length)
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
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++){
            sum += +this.marks[i];
        }
       let result = sum / this.marks.length;

       let averageAttendabce = 0
       for (let i = 0; i < this.attendabce.length; i++){
        averageAttendabce += Number(this.attendabce[i]);
       }
       let resultAverageAttendabce = averageAttendabce / this.attendabce.length;
       if(+result > 90 && resultAverageAttendabce > 0.9){
        console.log("Молодець!");
       }
       else if(+result > 90 || resultAverageAttendabce > 0.9){
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
student1.getAverageMarks();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.setPresent();
student1.sumary();
const student2 = new student("kiril","chorniy", 2007);
student2.marks = [70, 80, 89, 85];
student2.getAge();
student2.getAverageMarks();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.setAbsent();
student2.sumary();