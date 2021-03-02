let d = new Date();
let newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

// Event listener to add function to existing HTML DOM element

// Function called by event listener
export function handleSubmit(e){
    const url=document.getElementById('url').value;
   
    e.preventDefault();
    if(Client.checkUrl(url))
    fetch("http://localhost:8000/add", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
       "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
      })
      .then((res) => res.json())
      .then((res) => {
        updateUI(res);
          console.log(res);
      })
   else{
       alert( "Invalid url Enter url with http:// or https:// ");
    console.log("invalid url");
   }
 

  console.log("::: Form Submitted :::")

    set.reset();
}



// Function to GET Project Data 
async function updateUI(res) {
  
 document.getElementById('section2').style.display='block';
 document.querySelector('.result').innerHTML=`Confidence: ${res.confidence}%`;
 document.querySelector('.subjectivity').innerHTML=`Subjectivity: ${res.subjectivity}`;
 document.querySelector('.score').innerHTML=`Polarity score: ${score(res.score_tag)}`;
    
}

export const score = (score_tag) => {
 if (score_tag === "P+" || score_tag === "P") {
     return "Positive";
 } else if (score_tag === "N+" || score_tag === "N") {
     return "Negative";
 } else if (score_tag === "NEU") {
     return "Neutral";
 } else {
     return "Non Sentimental";
 }
};

