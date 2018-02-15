//function that lists all students from the allStudents array in table, is called by "List Students" button
function listStudents(){
    var studentList="<table border='1'>";

    //first row of table to define columns
    studentList+="<tr>";
    studentList+="<td>"+"First Name:"+"</td>";
    studentList+="<td>"+"Last Name:"+"</td>";
    studentList+="<td>"+"Grade:"+"</td>";
    studentList+="</tr>";

    for (var i=0; i<allStudents.length; i++){
        studentList+="<tr>";
        studentList+="<td>"+allStudents[i].firstName+"</td>";
        studentList+="<td>"+allStudents[i].lastName+"</td>";
        studentList+="<td>"+allStudents[i].grade+"</td>";
        studentList+="</tr>";
    }

    studentList+="</table>";
    document.getElementById("studentList").innerHTML=studentList;
}

//function that lists all teachers from the allTeachers array in table, is called by "List Teachers" button
function listTeachers(){
    var teacherList="<table border='1'>";

    //first row of table to define columns
    teacherList+="<tr>";
    teacherList+="<td>"+"First Name:"+"</td>";
    teacherList+="<td>"+"Last Name:"+"</td>";
    teacherList+="<td>"+"Subject:"+"</td>";
    teacherList+="</tr>";

    for (var i=0; i<allTeachers.length; i++){
        teacherList+="<tr>";
        teacherList+="<td>"+allTeachers[i].firstName+"</td>";
        teacherList+="<td>"+allTeachers[i].lastName+"</td>";
        teacherList+="<td>"+allTeachers[i].subject+"</td>";
        teacherList+="</tr>";
    }

    teacherList+="</table>";
    document.getElementById("teacherList").innerHTML=teacherList;
}

//function that lists all sections from the allSections array in table, is called by "List Sections" button
function listSections(){
    var sectionList="<table border='1'>";

    //first row of table to define columns
    sectionList+="<tr>";
    sectionList+="<td>"+"Section Name:"+"</td>";
    sectionList+="<td>"+"Teacher:"+"</td>";
    sectionList+="<td>"+"Max Size:"+"</td>";
    sectionList+="</tr>";

    for (var i=0; i<allSections.length; i++){
        sectionList+="<tr>";
        sectionList+="<td>"+allSections[i].name+"</td>";
        sectionList+="<td>"+allSections[i].teacher+"</td>";
        sectionList+="<td>"+allSections[i].maxSize+"</td>";
        sectionList+="</tr>";
    }

    sectionList+="</table>";
    document.getElementById("sectionList").innerHTML=sectionList;
}

//function that creates a new student using the user input from the table and adds it to the allStudents array
function addStudent(){
    var firstName=document.getElementById("studentFirstName").value;
    var lastName=document.getElementById("studentLastName").value;
    var grade=document.getElementById("studentGrade").value;
    // if user does not fill out all boxes when adding a student, give them message "Please fill out all boxes"
    if (firstName==""||lastName==""){
        document.getElementById("messageToUser").innerHTML="Please fill out all boxes";
        return;
    }else{
        document.getElementById("messageToUser").innerHTML="Student added!";
    }
    allStudents.push(new Student(firstName,lastName,grade));
    buildSelectBoxes();
}

//function that creates a new teacher using the user input from the table and adds it to the allTeachers array
function addTeacher(){
    var firstName=document.getElementById("teacherFirstName").value;
    var lastName=document.getElementById("teacherLastName").value;
    var subject=document.getElementById("teacherSubject").value;
    // if user does not fill out all boxes when adding a teacher, give them message "Please fill out all boxes"
    if (firstName==""||lastName==""||subject==""){
        document.getElementById("messageToUser").innerHTML="Please fill out all boxes";
        return;
    }else{
        document.getElementById("messageToUser").innerHTML="Teacher added!";
    }
    allTeachers.push(new Teacher(firstName,lastName,subject));
    buildSelectBoxes();
}

//function that creates a new section using the user input from the table and adds it to the allSections array
function addSection(){
    var name=document.getElementById("sectionName").value;
    var teacher=document.getElementById("sectionTeacher").value;
    var maxSize=document.getElementById("maxSize").value;
    // if user does not fill out all boxes when adding a section, give them message "Please fill out all boxes"
    if (name==""||teacher==""||maxSize==""){
        document.getElementById("messageToUser").innerHTML="Please fill out all boxes";
        return;
    }else{
        document.getElementById("messageToUser").innerHTML="Section added!";
    }
    allSections.push(new Section(name,teacher,maxSize));
    buildSelectBoxes();
}

//function that adds a student to a section
function addStudentToSection(){
    var studentId=document.getElementById("studentSelectBoxAdd").value;
    var sectionId=document.getElementById("sectionSelectBoxAdd").value;

    if (studentId==""||sectionId==""){
        document.getElementById("messageToUser").innerHTML="Please fill out all boxes";
        return;
    }else {
        document.getElementById("messageToUser").innerHTML="Student added to section!";
    }

    for (var i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id == studentId) {
            var student = allStudents[i];
        }

    }

    for (var x = 0; x < allSections.length; x++) {
        if (allSections[x].id == sectionId) {
            var section = allSections[x];
        }
    }

    section.studentsEnrolled.push(student);

    console.log(section.studentsEnrolled);
}

//function that removes a student from a section
function removeStudentFromSection(){
    var studentId=document.getElementById("studentSelectBoxAdd").value;
    var sectionId=document.getElementById("sectionSelectBoxAdd").value;

    if (studentId==""||sectionId==""){
        document.getElementById("messageToUser").innerHTML="Please fill out all boxes";
        return;
    }else {
        document.getElementById("messageToUser").innerHTML="Student removed from section!";
    }


    for (var x = 0; x < allSections.length; x++) {
        if (allSections[x].id == sectionId) {
            var section = allSections[x];
            break;
        }
    }

    for (var i = 0; i < section.studentsEnrolled.length; i++) {
        if (section.studentsEnrolled[i].id == studentId) {
            var student = section.studentsEnrolled[i];
            break;
        }
    }


    section.studentsEnrolled.splice(i,1);

    console.log(section.studentsEnrolled);
}

//function that lists students currently enrolled in a section by listing the objects in the array studentsEnrolled
function listStudentsInSection(){
    var sectionId=document.getElementById("sectionSelectBoxList").value;

    var section="";
    //find  section using Section Id
    for (var i = 0; i < allSections.length; i++) {
        if (allSections[i].id == sectionId) {
            section = allSections[i];
            break;
            // console.log(section);
        }
    }

    var studentsInSectionList="<table border='1'>";

    //first row of table to define columns
    studentsInSectionList+="<tr>";
    studentsInSectionList+="<td>"+"First Name:"+"</td>";
    studentsInSectionList+="<td>"+"Last Name:"+"</td>";
    studentsInSectionList+="<td>"+"Grade:"+"</td>";
    studentsInSectionList+="</tr>";

    for (var x=0; x<section.studentsEnrolled.length; x++){
        studentsInSectionList+="<tr>";
        studentsInSectionList+="<td>"+section.studentsEnrolled[x].firstName+"</td>";
        studentsInSectionList+="<td>"+section.studentsEnrolled[x].lastName+"</td>";
        studentsInSectionList+="<td>"+section.studentsEnrolled[x].grade+"</td>";
        studentsInSectionList+="</tr>";
    }

    studentsInSectionList+="</table>";
    document.getElementById("studentsInTheSection").innerHTML=studentsInSectionList;

    //calculate how many seats are remaining in this section
    document.getElementById("sectionSeatsRemaining").innerHTML=(section.maxSize-section.studentsEnrolled.length);
}

//function that builds a a section select box and a student select box
function buildSelectBoxes(){
    //builds a select box containing the names of all sections in the array allSections
    var sectionSelectBox="";
    for (var i=0;i<allSections.length;i++){
        sectionSelectBox+="<option value=" + allSections[i].id + ">" + allSections[i].name + "</option>"
    }
    document.getElementById("sectionSelectBoxList").innerHTML=sectionSelectBox;
    document.getElementById("sectionSelectBoxAdd").innerHTML=sectionSelectBox;

    //builds a select box containing the names of all students in the array allStudents
    var studentSelectBox="";
    for (var x=0;x<allStudents.length;x++){
        studentSelectBox+="<option value=" + allStudents[x].id + ">" + allStudents[x].firstName +" "+ allStudents[x].lastName + "</option>"
    }
    document.getElementById("studentSelectBoxAdd").innerHTML=studentSelectBox;

}

