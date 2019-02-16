
//1
var studentList = [ student_1 = {
  name: 'Vasay',
  dataStart: 2001,
  dataEnd: 2006
},  student_2 = {
  name: 'Petya',
  dataStart: 2003,
  dataEnd: 2008
},student_3 = {
  name: 'Andrey',
  dataStart: 2004,
  dataEnd: 2007
}, student_4 = {
  name: 'Kiril',
  dataStart: 2005,
  dataEnd: 2007
}];

getListStudent(2001, 2008);
 
function getListStudent(dataStart, dataEnd) {
 var arrayStudent = [];
   for (var i = 0; i < studentList.length; i++) {
    if ( dataStart <=  studentList[i].dataStart  || dataEnd <= studentList[i].dataEnd ) {
        console.log(studentList[i]);
         arrayStudent.push(studentList[i]);

    }
  }
  return arrayStudent;
}

//2

getMaxStudentYear();

function getMaxStudentYear(dataStart, dataEnd) {



}