let navLinks = Array.from(document.querySelectorAll(".nav-link")) 
let recipesData=[];


for (let i = 0; i < navLinks.length; i++) {
	    navLinks[i].addEventListener("click",function(e){
	       let recipe= e.target.getAttribute("recipe")
           getData(recipe)
	    })
	    
	
}

async function getData(nameRecipe="pizza"){
   let response= await fetch(`https://forkify-api.herokuapp.com/api/search?q=${nameRecipe}`)
   let data = await response.json()
   recipesData=data.recipes;
   console.log(recipesData)
   displayData()
}

getData()
function displayData(){
    temp=""
    for(let i=0 ;i<recipesData.length ; i++){
          temp+=`<div class="col-md-3">
          <div class="item">
            <img src="${recipesData[i].image_url}" class="w-100">
            <h2>${recipesData[i].title}</h2>
          </div>
        </div>`
    }
    document.getElementById("rowData").innerHTML=temp
}


