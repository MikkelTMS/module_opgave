export default async function searchMealByName() {

    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Search Meal By Name', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function sortAllMeals() {

    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Sort All Meals', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function MealDetailsByID() {

    return fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Lookup Full Meal Details', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function singleRandomMeal() {

    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Lookup Single Random Meal', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function allMealCategories() {

    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('List All Meal Categories', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function filterByMainIngredient() {

    return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Filter By Main Ingredient', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function filterByCategory() {

    return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Filter By Category', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function filterByArea() {

    return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Filter By Area', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}


