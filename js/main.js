let recipList=[];
let navLinks= Array.from(document.querySelectorAll(".nav-link"))
for( let i=1;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",function (event){
        let recipeName=event.target.innerHTML
        getData(recipeName)
    })

}
async function getData(nameRecipe="pizza"){
    let response= await fetch(` https://forkify-api.herokuapp.com/api/search?q=${nameRecipe}`)
    let data = await response.json()
    recipList=data.recipes
    display()
}
getData()
function display(){
    let temp="";
    for(let i=0;i<recipList.length;i++){
        temp +=`
       
        <div class="col-md-3">
          <div class="item">
            <img src="${recipList[i].image_url}" class="w-100">
            <h2>${recipList[i].title}</h2>
            <p>${recipList[i].recipe_id}</p>
          </div>
          </div>
        `
    }
    document.getElementById("rowData").innerHTML=temp
}