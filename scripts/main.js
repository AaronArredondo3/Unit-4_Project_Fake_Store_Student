//! GLobal Variables
const apiUrl =('https://fakestoreapi.com/products')
// const endPoint= 

const category0= document.getElementsByClassName('Cart');
const category1= document.getElementById('Electronics');
const category2= document.getElementById('Jewelery');
const category3= document.getElementById('Mens Clothing');
const category4= document.getElementById('Womens Clothing');
const displayDiv = document.getElementById('display');

//!Async Function

const fakeStore = async(endpoint) => {
    try{
        const res= await fetch (`${apiUrl}/${endpoint}`);
        const data = await res.json();
        console.log(data);
    }  catch (err) {
        console.error(err)
    }

};

//! Eventlistener for each category

category1.addEventListener('click', e => {
    e.preventDefault();
    fakeStore('category/electronics');  
});

category2.addEventListener('click', e => {
    fakeStore('category/jewelery');
});

category3.addEventListener('click', e => {
    fakeStore("category/men's clothing");
});

category4.addEventListener('click', e => {
    fakeStore("category/women's clothing");
});

//! Window onload event
window.onload = () => {
    fakeStore('?sort=asc');
};
