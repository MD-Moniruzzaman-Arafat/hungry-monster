
const searceitem = () =>{
    const searceText = document.getElementById('searce-fild').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searceText}
    `
    fetch(url)
    .then(res => res.json())
    .then(meals => displayItem(meals.meals))
}

const displayItem = item => {
    const itemContainer = document.getElementById('meals-item');
    itemContainer.innerHTML = '';
    item.forEach(item => {
        console.log(item)
        const itemDiv = document.createElement("div");
        itemDiv.className = 'col-md-3';
        itemDiv.innerHTML =`
            <div class="card h-100" onclick="itemDetail('${item.idMeal}')">
            <img src="${item.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
            </div>
            </div>`;
        itemContainer.appendChild(itemDiv);
    });
}

const itemDetail = (id) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(meals => mealsdital(meals.meals[0]));
}
const mealsdital = sss =>{
    
    const ddd = document.getElementById('meals-details');
    
    ddd.innerHTML = `
    <img src="${sss.strMealThumb}">
     <h1>${sss.strMeal}</h1>
     <h6>${sss.strIngredient1}</h6>
     <h6>${sss.strIngredient2}</h6>
     <h6>${sss.strIngredient3}</h6>
     <h6>${sss.strIngredient4}</h6>
     <h6>${sss.strIngredient5}</h6>
     <h6>${sss.strIngredient6}</h6>
     <h6>${sss.strIngredient7}</h6>
     <h6>${sss.strIngredient8}</h6>
     <h6>${sss.strIngredient9}</h6>
     <h6>${sss.strIngredient10}</h6>
    `
}