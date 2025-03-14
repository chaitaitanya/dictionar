// let dalyarr=[]
// let input=document.getElementById("input");
// let output=document.getElementById("output");
// let btn=document.getElementById("button");
// let synonyms=document.getElementById("synonyms");
// let antonyms=document.getElementById("antonyms");
// let gallery = document.getElementById('gallery');
// const img = document.createElement('img');
// let examples=document.getElementById("examples");

// // function where we are taking image and appind to last div;
// function getimg(imgname) {
//     const apiKey = '95W7bB2ThGyLIRIg1QgXfhCv9Ll7dCxvb2QqYTOzVPx506bJhjqKCYbL';
//     fetch(`https://api.pexels.com/v1/search?query=${imgname}`, {
//         method: 'GET',
//         headers: {
//             'Authorization': apiKey
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             img.src = data.photos[0].src.medium;
//             img.alt = data.photos[0].alt;
//             img.style.height = 400 + "px";
//             img.style.width = 400 + "px";
//             gallery.appendChild(img);
//         })
//         .catch(error => {
//             console.log('Error:', error);
            
//             alert('Error:', error);
//         });
// }

// // function for geting data of input word and returning it;
// async function getdata(value) {
//     let val=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
//     return await val.json();
// }

// //Event listener for when we get data feom getdata function then to print required data;
// btn.addEventListener("click",async function a() {
    

// fetch('https://words-api.herokuapp.com/word-of-the-day')
// .then(response => response.json())
// .then(data => {
//   console.log(data);
//   const word = data.word;
//   const definition = data.definition;
//   const example = data.example;
//   // Use the word, definition, and example as needed
// })
// .catch(error => console.error(error));


//     gallery.innerHTML=''
//     output.innerHTML=''
//     synonyms.innerHTML=''
//     antonyms.innerHTML=''
//     let inputval=input.value;
//     examples.innerHTML=''
    
//     let obj=await getdata(inputval)
//     let mean=obj[0]["meanings"];
    

//     let allAntonyms = [];
//     let allSynonyms = [];
 
//     //function to check whether the partofspeach is repited or not, if refited then return true else false;
//     function checkpartofspeach(element, meanLength) {
//         let count = 0
//         for (let i = 0; i <= meanLength; i++) {
//             if (element == mean[i]["partOfSpeech"]) {
//                 count++;
//             }
//         }
//         if (count >= 2) {
//             return true
//         } else {
//             return false;
//         }
//     }


//     // async function difination(element) {
//     //     let partOSph = element["partOfSpeech"];// PartOfSpeach;
//     //     output.innerHTML += `<h2> ${partOSph}</h2>`;

//     //     let definitionOfWord = element["definitions"][0]["definition"];
//     //     output.innerHTML += `${definitionOfWord}<br>`;
//     // }

    
//     let exampleCounter=0;//for giving number to example;
//     let meanLength=0;
//     for (const element of mean) {
//         if (checkpartofspeach(element["partOfSpeech"], meanLength)) {

//         } else {

//             let partOSph = element["partOfSpeech"];// PartOfSpeach;
//             output.innerHTML += `<h2> ${partOSph}</h2>`;

//             let definitionOfWord = element["definitions"][0]["definition"];
//             output.innerHTML += `${definitionOfWord}<br>`;

//             let exampleVar;
//             for (let i = 0; i <element["definitions"].length ; i++) {
//                 if (element["definitions"][i]["example"]) {

//                     exampleVar = `${element["definitions"][i]["example"]}<br>`
//                     if (examples.innerHTML == '') {
//                         examples.innerHTML = `<h2>Examples</h2>`;
//                     }
//                     examples.innerHTML += `${exampleCounter + 1}. ${exampleVar}`;
//                     exampleCounter++;
//                     break;

//                 } else {
//                     exampleVar = '';
//                 }
                
//             }

//             let sy = element["synonyms"]
//             let ay = element["antonyms"]

//             for (let index = 0; index < sy.length; index++) {
//                 if (sy.length == 0 && allSynonyms == '') {
//                     allSynonyms = ''
//                 } else {
//                     allSynonyms += sy[index] + ', ';
//                 }
//             }

//             for (let index = 0; index < ay.length; index++) {
//                 if (ay.length == 0 && allAntonyms == '') {
//                     allAntonyms = ''
//                     // console.log(allAntonyms);
//                 } else {
//                     allAntonyms += ay[index] + ', ';
//                     // console.log(allAntonyms);
//                 }
//             }


//             meanLength++;
//         }

//     }

//     // console.log(obj,typeof obj);
//     allAntonyms=(allAntonyms=='')?"sorry but in my api no antonyms found":allAntonyms
//     allSynonyms=(allSynonyms=='')?"sorry but in my api no synonyms found":allSynonyms
//     let allAntonymsarr=Array(allAntonyms);
//     synonyms.innerHTML=`<h2>synonyms</h2>${allSynonyms}`
//     antonyms.innerHTML=`<h2>antonyms</h2>${allAntonyms}`
//     getimg(inputval)
    
// }
// )









// // let o = element["partOfSpeech"]
// // output.innerHTML +=`<h2> ${o}</h2>`;
// // for(let i=0;i<1;i++){
// //     let definitionOfWord = element["definitions"][i]["definition"];
// //     let a;
// //     if(element["definitions"][i]["example"]){
// //         a=`example : ${element["definitions"][i]["example"]}<br>`
// //         console.log(a);
// //     }else{
// //         a='';
// //     }
// //     output.innerHTML +=`${i+1}. ${definitionOfWord}<br>${a}`;
// // }


// // let sy=element["synonyms"]  
// // let ay=element["antonyms"]      
// // //     console.log(o);
// // //    console.log(sy);


// // for (let index = 0; index < sy.length; index++) {
// //     if(sy.length==0&&allSynonyms==''){
// //         allSynonyms=''
// //         console.log(allSynonyms);
        
// //     }else{
// //         allSynonyms+=sy[index]+', ';
// //         console.log(allSynonyms);
// //     }
// // }
// // for (let index = 0; index < ay.length; index++) {
// //     if(ay.length==0&&allAntonyms==''){
// //         allAntonyms=''
// //         console.log(allAntonyms);
// //     }else{
// //         allAntonyms+=ay[index]+', ';
// //         console.log(allAntonyms);
// //     }
// // }


// const appId = '	8716f708';
// const appKey = 'd5e77a385edccf3ccb2c449206e93a0e';
// const apiUrl = `https://api.oxforddictionaries.com/api/v2/words/daily_word?source=dictionaries&fields=definitions&registers=off&strictMatch=false`;

// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth() + 1; // Months are 0-based
// const day = today.getDate();

// const url = `${apiUrl}&date=${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

// fetch(url, {
//   headers: {
//     'app_id': appId,
//     'app_key': appKey
//   }
// })
// .then(response => response.json())
// .then(data => {
//   const word = data.results[0].word;
//   console.log(word);
// })
// .catch(error => console.error(error));


// const appId = '8716f708';
// const appKey = 'd5e77a385edccf3ccb2c449206e93a0e';
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const apiUrl = 'https://api.oxforddictionaries.com/api/v2/words/daily_word?source=dictionaries&fields=definitions&registers=off&strictMatch=false';

// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth() + 1; 
// const day = today.getDate();

// const url = `${proxyUrl}${apiUrl}&date=${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

// fetch(url, {
//   headers: {
//     'app_id': appId,
//     'app_key': appKey
//   }
// })
// .then(response => response.json())
// .then(data => {
//   const word = data.results[0].word;
//   console.log(word);
// })
// .catch(error => console.error(error));


const appId = '8716f708';
const appKey = 'd5e77a385edccf3ccb2c449206e93a0e';
const proxyUrl = 'https://crossorigin.me/';
const apiUrl = 'https://api.oxforddictionaries.com/api/v2/words/daily_word?source=dictionaries&fields=definitions&registers=off&strictMatch=false';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();

const url = `${proxyUrl}${apiUrl}&date=${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

fetch(url, {
  headers: {
    'app_id': appId,
    'app_key': appKey
  }
})
.then(response => response.json())
.then(data => {
  const word = data.results[0].word;
  console.log(word);
})
.catch(error => console.error(error));
