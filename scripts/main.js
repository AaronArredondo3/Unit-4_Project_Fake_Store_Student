//! GLobal Variables
const apiUrl = 'https://fakestoreapi.com/'

const category1= document.getElementsByClassName('Cart');
const category2= document.getElementsByClassName('Electronics');
const category3= document.getElementsByClassName('Jewelery');
const category4= document.getElementsByClassName('Mens Clothing');
const category5= document.getElementsByClassName('Womens Clothing');
const displayDiv = document.getElementById('display');

//!Async Function

const fakeStore = async(endpoint)=>{
    try {
        let response = await fetch(apiUrl);
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        let data = await response.json();
        console.log(data); // Log data to console for testing
        // You can manipulate the data and update the display here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fakeStore(endpoint);