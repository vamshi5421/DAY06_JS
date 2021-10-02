const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelCount);

function vowelCount() { 
    const word = document.querySelector(".input-text").value;

    let len = word.length;
    let start = word.toLowerCase();
    let vowelArray = start.split("");
    
    
    let count = 0;
    for( i = 0; i < len; i++){
        
        if(vowelArray[i].match(/([a,e,i,o,u])/)){
            count++;
        }
    }
    console.log(count);
    let str = "The rain in SPAIN stays mainly in the plain";
    str.match(/ain/g);
    console.log(str.match(/ain/g));

    result.innerHTML = `${word} has ${count} number of vowels`;
}


