let wordDisplay=document.getElementById("word-container")
let input=document.getElementById("input");
let output=document.getElementById("output");
let btn=document.getElementById("button");
let synonyms=document.getElementById("synonyms");
let antonyms=document.getElementById("antonyms");
let gallery = document.getElementById('gallery');
const img = document.createElement('img');
let examples=document.getElementById("examples");
let todayWord=document.getElementById("today-word");
let inputAudio=document.getElementById("audio");
let pronous=document.getElementById("pronous");


const wordsArray = [
    "serendipity", "ephemeral", "luminous", "exuberant", "melancholy",
    "tranquil", "ethereal", "ineffable", "sagacious", "halcyon",
    "ambivalence", "quintessential", "elusive", "solitude", "euphoria",
    "dichotomy", "nostalgia", "vivacious", "labyrinth", "panacea",
    "resilience", "tenacity", "wanderlust", "zenith", "cryptic",
    "idyllic", "jubilant", "pristine", "reverie", "whimsical",
    "promise"
];

function fetchWordOfTheDay(newday) {
        // Get the current date
        let wordOfTheDay;
        let dayIndex;
        let currentDate
        if(newday!=undefined){
            currentDate=newday;
            dayIndex = currentDate.getDate() % wordsArray.length;
            wordOfTheDay = wordsArray[dayIndex];
        }else{
            currentDate = new Date();
            dayIndex = currentDate.getDate() % wordsArray.length; // Cycle through the array
            wordOfTheDay = wordsArray[dayIndex];
        }
        let cuwordofday=document.getElementById("currentDate").textContent=`${currentDate}`
        // featching word of day;
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordOfTheDay}`)
            .then(response=>response.json())
            .then((result)=>{
                console.log(result);
                wordDisplay.style.display="none";
                todayWord.style.display="flex"
                todayWord.classList.add("center-flex");
                document.getElementById("dayWord").textContent=`WORD : ${result[0].word}`;
                
                //pronounsation;
                for(let i=0;i<result[0]?.phonetics.length;i++){
                    if(result[0]?.phonetics[i]?.text){
                        document.getElementById("dayWordphonetics").innerText = `Prononsation : ${result[0]?.phonetics[i]?.text || "Sorry but no prononsation found"}`;
                        break;
                    }
                }
                //audio
                let dayWordVolume=document.getElementById("dayWordvolume")
                for(let i=0;i<result[0]?.phonetics.length;i++){
                    if(result[0]?.phonetics[i]?.text){
                        audioSrc = result[0]?.phonetics[i]?.audio || null;
                        break;
                    }
                }
                console.log(audioSrc);
                
                if (audioSrc) {
                    const audio = new Audio(audioSrc);
                    dayWordVolume.onclick = () => audio.play();
                } else {
                    dayWordVolume.onclick = () => alert("No pronunciation audio available for this word.");
                }
                //for definition
                document.getElementById("dayWordmeaning").innerHTML=`Meaning : ${result[0]?.meanings[0]?.definitions[0]?.definition}`;

                //for example
                let exampleVarOfTodayWord='';
                for (let i = 0; i < result[0]?.meanings[0]?.definitions.length; i++) {
                    if (result[0]?.meanings[0]?.definitions[i].example) {
                        exampleVarOfTodayWord = `${result[0]?.meanings[0]?.definitions[i]["example"]}`
                        break;
                    }
                }
                
                document.getElementById("dayWordexample").textContent=`Example : ${exampleVarOfTodayWord||`sorry but no example for "${result[0].word}"`}`;

                let allAntonymsTodayWord='';
                let allSynonymsTodayWord='';
                //for synonyms
                for(let i=0;i<result[0]?.meanings.length;i++){
                    if(result[0]?.meanings[i]?.synonyms.length > 0){
                    allSynonymsTodayWord+=result[0]?.meanings[i].synonyms+", "
                    }
                }
                document.getElementById("dayWordsynonyms").textContent=`Synonyms : ${allSynonymsTodayWord||`sorry but no synonyms for "${result[0].word}"`}`
                // for antononysm
                for(let i=0;i<result[0]?.meanings.length;i++){
                    if(result[0]?.meanings[i].antonyms.length>0){
                    allAntonymsTodayWord+=result[0]?.meanings[i].antonyms+", "
                    }
                }
                document.getElementById("dayWordantonyms").textContent=`Antonyms : ${allAntonymsTodayWord||`sorry but no antonyms for "${result[0].word}"`}`
                
            })
            // img for word of day;
            const apiKey = '95W7bB2ThGyLIRIg1QgXfhCv9Ll7dCxvb2QqYTOzVPx506bJhjqKCYbL';
            fetch(`https://api.pexels.com/v1/search?query=${wordOfTheDay}`, {
                method: 'GET',
                headers: {
                    'Authorization': apiKey
                }
            })
                .then(response => response.json())
                .then(data => {
                    let todayimg=document.createElement('img')
                    let todayimgbox=document.getElementById("wordofday-img");
                    todayimgbox.innerHTML='';
                    todayimg.src = data.photos[0].src.medium;
                    todayimg.alt = data.photos[0].alt;
                    todayimg.style.height = 400 + "px";
                    todayimg.style.width = 400 + "px";
                    todayimgbox.appendChild(todayimg);
                })
                .catch(error => {
                    console.log('Error:', error);
                    
                    alert('Error:', error);
            });
}
//calling specific day word
let specificday=document.getElementById("specific-day")
let specificbtn=document.getElementById("day-choice")
specificbtn.addEventListener("click",()=>{
    let newdate=new Date(specificday.value)
    fetchWordOfTheDay(newdate)
})
// calling today day word;
let todaywordbtn=document.getElementById("today-word-btn")
todaywordbtn.addEventListener("click",(e)=>{
    wordDisplay.style.display="none";
    todayWord.style.display="flex"
    todayWord.classList.add("center-flex");
    fetchWordOfTheDay()
})
fetchWordOfTheDay()//when page load then first today's word will display;










// function where we are taking image and appind to last div;
function getimg(imgname) {
    const apiKey = '95W7bB2ThGyLIRIg1QgXfhCv9Ll7dCxvb2QqYTOzVPx506bJhjqKCYbL';
    fetch(`https://api.pexels.com/v1/search?query=${imgname}`, {
        method: 'GET',
        headers: {
            'Authorization': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            img.src = data.photos[0].src.medium;
            img.alt = data.photos[0].alt;
            img.style.height = 400 + "px";
            img.style.width = 400 + "px";
            gallery.appendChild(img);
        })
        .catch(error => {
            console.log('Error:', error);
            
            alert('Error:', error);
        });
}

// function for geting data of input word and returning it;
async function getdata(value) {
    let val=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    return await val.json();
}

//Event listener for when we get data feom getdata function then to print required data;
btn.addEventListener("click",async function a() {
    gallery.innerHTML=''
    output.innerHTML=''
    synonyms.innerHTML=''
    antonyms.innerHTML=''
    let inputval=input.value;
    examples.innerHTML=''
    
    let obj=await getdata(inputval)
    document.getElementById("word-heading").textContent=`${obj[0].word}`
    let mean=obj[0]["meanings"];
    

    let allAntonyms ='' ;
    let allSynonyms ='';
    
    
    todayWord.style.display="none"
    wordDisplay.style.display="flex";
    wordDisplay.classList.add("center-flex");

    //function to check whether the partofspeach is repited or not, if refited then return true else false;
    function checkpartofspeach(element, meanLength) {
        let count = 0
        for (let i = 0; i <= meanLength; i++) {
            if (element == mean[i]["partOfSpeech"]) {
                count++;
            }
        }
        if (count >= 2) {
            return true
        } else {
            return false;
        }
    }

    //audio;
    for(let i=0;i<obj[0]?.phonetics.length;i++){
        if(obj[0]?.phonetics[i]?.audio){
            audioSrc = obj[0]?.phonetics[i]?.audio || null;
            break;
        }
    }
    console.log(audioSrc);
    if (audioSrc) {
        const audio = new Audio(audioSrc);
        inputAudio.onclick = () => audio.play();
    } else {
        inputAudio.onclick = () => alert("No pronunciation audio available for this word.");
    }

    //pronounsation;
    for(let i=0;i<obj[0]?.phonetics.length;i++){
        if(obj[0]?.phonetics[i]?.text){
            document.getElementById("pronous").innerText = `Prononsation : ${obj[0]?.phonetics[i]?.text || "Sorry but no prononsation found"}`;
            break;
        }
    }
    
    let exampleCounter=0;//for giving number to example;
    let meanLength=0;
    for (const element of mean) {
        if (checkpartofspeach(element["partOfSpeech"], meanLength)) {

        } else {

            let partOSph = element["partOfSpeech"];// PartOfSpeach;
            output.innerHTML += `<h2> ${partOSph}</h2>`;

            let definitionOfWord = element["definitions"][0]["definition"];
            output.innerHTML += `${definitionOfWord}<br>`;

            let exampleVar;
            for (let i = 0; i <element["definitions"].length ; i++) {
                if (element["definitions"][i]["example"]) {

                    exampleVar = `${element["definitions"][i]["example"]}<br>`
                    if (examples.innerHTML == '') {
                        examples.innerHTML = `<h2>Examples</h2>`;
                    }
                    examples.innerHTML += `${exampleCounter + 1}. ${exampleVar}`;
                    exampleCounter++;
                    break;

                } else {
                    exampleVar = '';
                }
                
            }

            let sy = element["synonyms"]
            let ay = element["antonyms"]

            for (let index = 0; index < sy.length; index++) {
                if (sy.length == 0 && allSynonyms == '') {
                    allSynonyms = ''
                } else {
                    allSynonyms += sy[index] + ', ';
                }
            }

            for (let index = 0; index < ay.length; index++) {
                if (ay.length == 0 && allAntonyms == '') {
                    allAntonyms = ''
                } else {
                    allAntonyms += ay[index] + ', ';
                }
            }
            meanLength++;
        }
    }
    allAntonyms=(allAntonyms=='')?"sorry but in my api no antonyms found":allAntonyms
    allSynonyms=(allSynonyms=='')?"sorry but in my api no synonyms found":allSynonyms
    let allAntonymsarr=Array(allAntonyms);
    synonyms.innerHTML=`<h2>synonyms</h2>${allSynonyms}`
    antonyms.innerHTML=`<h2>antonyms</h2>${allAntonyms}`
    getimg(inputval)  
}
)
