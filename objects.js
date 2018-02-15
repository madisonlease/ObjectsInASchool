var currentStudentId=1;
var currentTeacherId=1;
var currentSectionId=1;

//student constructor
function Student(firstName,lastName,grade){
    this.id=currentStudentId++;
    this.firstName=firstName;
    this.lastName=lastName;
    this.grade=grade;
}

//teacher constructor
function Teacher(firstName,lastName,subject){
    this.id=currentTeacherId++;
    this.firstName=firstName;
    this.lastName=lastName;
    this.subject=subject;
}

//section constructor
function Section(name,teacher,maxSize){
    this.studentsEnrolled=[];
    this.id=currentSectionId++;
    this.name=name;
    this.teacher=teacher;
    this.maxSize=maxSize;
}

