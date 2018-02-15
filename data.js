var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Joe","Cohn",11));
allStudents.push(new Student("Jane","Smith",12));
allStudents.push(new Student("Trent","Arrington",10));
allStudents.push(new Student("Becky","Powers",9));
allStudents.push(new Student("Jen","Ramirez",12));

allTeachers.push(new Teacher("Masha","Albrecht","Math"));
allTeachers.push(new Teacher("Nakia","Baird","Math"));
allTeachers.push(new Teacher("Keldon","Clegg","History"));
allTeachers.push(new Teacher("Matt","Albinson","CS"));
allTeachers.push(new Teacher("Carl","Rogers","English"));

allSections.push(new Section("Math 2","Albrecht",30));
allSections.push(new Section("Math 3","Weitz",45));
allSections.push(new Section("US History","Clegg",100));
allSections.push(new Section("CS","Albinson",52));
allSections.push(new Section("English","Rogers",7));

// var allItems = [allStudents,allTeachers,allSections];