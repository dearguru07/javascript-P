
// ----------------sorting in assending Order ----------

// const div=document.getElementById('newDiv')
// const array=[10,20,50,4,0,3,1,9,7]
// const res=array.sort((a,b)=>{
//     return a-b
// })
// document.write(res)


// -----------------sorting in dessending Order ------------

// const newArry=[25,10,46,8,6,752,8,54]
// const resArry=newArry.sort((c,d)=>{
//     return d-c
// })
// document.write(resArry)


// -----------------sorting in String in assending Order ----------

// const months=['janu','feb','mar','apr','jun','july','aug']
// const result=months.sort()
// document.write(result)


// ------------------finding the unique values in Array---------------.

// const Array=[10,20,52,54,78,64,64,48,25,36,1,90,10,20]
// const output=Array.filter((a,c,b)=>b.indexOf(a)==c)
// document.write(output)


// function download(){
//     let data=fetch("https://type.fit/api/quotes")
//     let Odata= data.json()
//     console.log(Odata)
// }


// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

// let data=null
// console.log(typeof(data))
// console.log(data)

// let ams
// console.log(ams)


// let array=[1,2,5,4,7,8,5,2,1,4,5,8,9]
// let res=[...new Set(array)]
// console.log(res)


async function download(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

// function download(){
//     let data=fetch('https://type.fit/api/quotes')
//     .then((data)=>{
//         let originalData=data.json()
//         return originalData
//     })
//     .then((originalData)=>{
//         document.getElementById('heading').innerHTML=originalData[0]
//     })
// }

// function download(){
//     let data=fetch("https://type.fit/api/quotes")
//     let originalData=data.json()
//     console.log(originalData)
// }