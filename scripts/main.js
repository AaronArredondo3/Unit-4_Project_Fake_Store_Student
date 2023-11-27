//! GLobal Variables
const apiUrl =('https://fakestoreapi.com/products')
// const endPoint= 

const category1= document.getElementsByClassName('Cart');
const category2= document.getElementById('Electronics');
const category3= document.getElementById('Jewelery');
const category4= document.getElementById('Mens Clothing');
const category5= document.getElementById('Womens Clothing');
const displayDiv = document.getElementById('display');

//!Async Function

const fakeStore = async(endpoint) => {
    try{
        const res= await fetch (`${apiUrl}/${endpoint}`);
        const data = await res.json();
        console.log(data[0]);
    }  catch (err) {
        console.error('err')
    }

};

//! Eventlistener for each category

category2.addEventListener('click', e => {
    fakeStore('Electronics');
});

category3.addEventListener('click', e => {
    fakeStore('Jewekery');
});

category4.addEventListener('click', e => {
    fakeStore('Mens Clothing');
});

category5.addEventListener('click', e => {
    fakeStore('Womens CLothing');
});

//! Window onload event
window.onload = () => {
    fakeStore('?sort=asc');
};
