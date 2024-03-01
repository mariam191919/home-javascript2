"Use Strict"
//მოცემულია მასიცი:
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray=array2.map(eL =>{
  if(typeof eL=='number'){
    return eL ** 2;
  } else if ( typeof eL=="string"){
    return eL.toUpperCase();
  } else{
    return eL
  }
})
console.log(newArray);

//შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
//თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.





//მოცემულია სტრინგი: let info= ‘good day”, 
//ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთო დის საშუალებით.
let info= 'good day'
let newinfoslice=info.slice(0,1);
console.log(newinfoslice);


//დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.
let  value="Hello"
console.log(value.length);

//prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? 
//სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, 
//გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. 
//თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.






//მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით,
// შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  
//splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.
let fruits= [“apple”, “mango”, “avocado”,”kiwi”];
fruits.splice(fruits.length-1, 'Strawberry');
console.log(fruits);







//შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;


let array9 =[5, 25, 89, 120, 36];
array9.push("javascript", "python");
array9.unshift('html', 'css');
console.log(array9.length);
array9.shift();
array9.pop();
console.log(array9);
 // მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
  //მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
  //გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  //წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;


//შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;
let array= ['ფორთოხალი', 'ბანანი', 'კივი'];
console.log(array.length);
array.push('ვაშლი', 'ანანასი');
array.unshift('საზამთრო');
array.splice(2,0, 'მანგო');
array.shift();
array.pop();
console.log(array.length);
console.log(array);


  //გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
  //მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
  //მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო; 
  //გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  //მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
  //წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
  //გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;



//მოცემულია მასივი  splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].	
let array3 =[1, 2, 3, 4, 5]
array3.splice(3, 0, "a", "b", "c" );
console.log(array3);


 

//მოცემულია მასივი:
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
//map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი 
//იქნება 3-ზე გაყოფილი;
let newArray5= array5.map(function(eL){
  return eL / 3;
}
)
console.log(newArray5);


//მოცემულია მასივი: 
//წაშალეთ ამ მასივიდან რიცხვი 10;
let array7 =  [15, 100, 25, 10, 36]
array7.splice(3,1)
console.log(array7);


  //მოცემულია მასივი: 
//მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;

 let array8 = [1, 2, 3 , 4 , 5]
 array8.splice(2, 1,  "three");
 console.log(array8);


//მოცემულია მასივი, შემდეგი მნიშვნელობებით გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;

let array1 =[“hello1”, 14, 24, “hello2”]



//მოცემულია მასივი:
//foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
let array4 = [1, 2, 3, 4, 5];
let sum=0
array4.forEach(function(array4){
    sum +=array4;
})
console.log(sum);

//მოცემულია მასივი:
//ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების 
//რაოდენობა იქნება 3-ზე მეტი;
//let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
//for (let item of languages){
   // if (item.length > 3){
     //   console.log(item);
    //}
//}

//languages.forEach(function(item)){
    //if(item.length >3){
    //console.log(item);
//}
//})
let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
let newlanguagesFilter= languages.filter(function(item){
  return item.length > 3;
})
console.log(newlanguagesFilter);


//მოცემულია მასივი:
let words = ['Madrid', 'rome', 'Milan', 'berlin'];


//filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს
// ასო m-ს ან M-ს;



