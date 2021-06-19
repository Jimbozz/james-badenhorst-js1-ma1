
//Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();


//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6 

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`;

    //resultsContainer.style.backgroundColor = "yellow";


//Question 7


function printListItems(list) {
    
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

printListItems(cats);

//Question 8 


function createCats(cats){

    const container = document.querySelector(".cat-container");

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let age = "Age unknown";
    
        if(cats[i].age) {
            age = cats[i].age
        }
        
        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>Age: ${age}</p>
                </div>
                `;
    
        console.log(html);
    }

    container.innerHTML = html;
}

createCats(cats);

