


// const myfunc =(a,b,c)=>{

//     var k = 0;
//     while (a >= c || b >=c) {
//         a -=c;
//         b -=c;
//         k++;
//     }

//     console.log(k*2);

// }

// myfunc(10,2,1)




// 1. Object kalitlari va qiymatlarini tengligini tekshirish
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// const areEqual =() => {
//     (data.a === data2.a && data.b === data2.b) ? console.log('true') : console.log('false');
// }

// areEqual();






// 2. Object ichidagi Objectni qiymatlari mavjudligini tekshirish
// const data = { a: { b: undefined } };
// const data2 = { a: { b: 'it does exits' } };
// const data3 = { a: { b: 'it does exits', innerKey: null } };


// var myData = Object.values(data);

// myData.map((val)=>{
    
//     if(Object.values() == 'null'){
//         console.log('ddd');
//     }
// })

// nestedValueExists =(data) =>{
//    var asd = data.a;
   
// } 

// nestedValueExists();

// nestedValueExists(data2)  => true
// nestedValueExists(data3)  => false



// 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// const data3 = { c: 3, b: 5 };

// checkSame( data, data2 )  => true
// checkSame( data2, data3 )  => false




// const carry =(a,b)=>{
//     for (let i = a; i <= b; i++) {
        
//         for (let j = a; j <= b; j++) {
            
//             console.log(`${i} * ${j} = ${i*j}`);
                        
//         }
//         console.log('=================');
        
//     }
// }


// carry(1,9);





// const curry =(a)=>{
//     return (b)=>{
//         console.log(`${a} x ${b} = ${a * b}`);
//     }
// }
// for (let i = 1; i <= 9; i++) {
//     for (let j = 0; j <= 9; j++) {
        
//         curry(i)(j);
//     }
//     console.log('------------');
    
// }







// let students = [
//     {
//         id : 1,
//         Name : 'Eldor',
//         MiddleName : 'WebDeveloper',
//         Status : 'Talaba',
//         Year : 1999,
//     },
//     {
//         id : 2,
//         Name : 'Ali',
//         MiddleName : 'Coder',
//         Status : 'Talaba',
//         Year : 2001,
//     },
//     {
//         id : 3,
//         Name : 'Vali',
//         MiddleName : 'AndroidDeveloper',
//         Status : 'Talaba',
//         Year : 2021,
//     },
//     {
//         id : 4,
//         Name : 'Messi',
//         MiddleName : 'IosDeveloper',
//         Status : 'Talaba',
//         Year : 1992,
//     },
// ]


// const onSort_onDelete =(value,key)=>{

//     students.filter((v)=>{
//         (v[`${key}`] == value) && console.log(v); 
//     })
// }
// onSort_onDelete('Ali','Name');



                                    //   vazifa

// const array = [4, 5, 9, 11, 15, 3, 7, 1, 5, 8, 9, 10];

// const mySort =()=>{
//     array.sort((a, b) => b - a);
// }
// mySort();

// console.log(array);

// while (array.length > 1) {
//     if(array[0] - array[1] != 0){
        
//         array[1] = array[0] - array[1];
//         (array.shift());
//         mySort();
//         console.log(array);

//     }else{

//         array.splice(0,2);
//         console.log(array);
//     }
// }






// user = {
//     id : 1,
//     name: 'Eldor',
//     status : 'WebDeveloper',
//     fullName : function() {
//         console.log(this.name + ' ' + this.status);
//     }
// }

// user.fullName();



// user = {
//     id : 1,
//     name: 'Eldor',
//     status : 'WebDeveloper',
//     fullName : {
//         name : 'Asaka',
//        getName : function() {
//             console.log(this);
//         }
//     }
// }
// user.fullName.getName();




                             // CLASS && EXTENDS

// class Student{
   
//     constructor(value){
//         this.Locat = value;
//     }
    
//     id = 123;
//     name = 'Eldor';
//     surname ='Eshmanov';
//     status = 'Talabasi';
    
//     fullName = function (a) {
//         this.a = a;
//         console.log(this);
//         console.log(a);
//         console.log(this.name + ' ' + this.surname + ' ' + this.Locat + ' ' + this.status);
//     }
// }

// // new Student('WebBrain').fullName('salom !!!');

// class Deportment extends Student{
//     constructor(title){
//         super(title);
//     }
// }

// new Deportment('Univer').fullName('salom !!!');

