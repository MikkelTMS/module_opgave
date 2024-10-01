

export default async function getAllProducts() {

    return fetch('https://dummyjson.com/products')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('All Products', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function getSingleProduct() {

    return fetch('https://dummyjson.com/products/1')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Single Product', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function searchProducts() {

    return fetch('https://dummyjson.com/products/search?q=phone')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('search', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function skipProducts() {

    return fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Limit, and skip', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function sortProducts() {

    return fetch('https://dummyjson.com/products?sortBy=title&order=asc')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Sort Products', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function getAllCategories() {

    return fetch('https://dummyjson.com/products/categories')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('All Categories', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function getCategoryList() {

    return fetch('https://dummyjson.com/products/category-list')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Category List', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

export async function getProductsByCategory() {

    return fetch('https://dummyjson.com/products/category/smartphones')

        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then((data) => {
            console.log('Products By Category', data);
            return data;
        })

        .catch((error) => {
            console.log(error);
            return error
        })  
}

