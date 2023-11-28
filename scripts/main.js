//! GLobal Variables
const apiUrl =('https://fakestoreapi.com/products')
const cart = []; 


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
        
        displayCards(data);
    }  catch (err) {
        console.error(err)
    }
    
};

//! Function to display the cards
const displayCards = function (data) {
        const displayDiv = document.getElementById('display');
        data.forEach (product => {
        
                //* Create Elements
            let cardDiv = document.createElement('div');
            let image = document.createElement('img');
            let cardBody = document.createElement('div');
            let title = document.createElement('h5');
            let description = document.createElement('p')
            let price = document.createElement('p');
            let accordionDiv = document.createElement('div');
            let accordionButton = document.createElement('button');
            let accordionContent = document.createElement('div')
            let addToCartButton = document.createElement('button');
        
                //* Set Attributes
            cardDiv.classList.add('card', 'mb-3');
    image.src = product.image;
    image.alt = product.title;
    image.classList.add('card-img-top');
    cardBody.classList.add('card-body');
    title.textContent = product.title;
    title.classList.add('card-title');
    description.textContent = product.description;
    description.classList.add('card-text');
    price.textContent = product.description;
    price.classList.add('card-text');
    accordionDiv.classList.add('accordion');
    accordionButton.textContent = 'Show Details';
    accordionButton.classList.add('btn', 'btn-link');
    accordionContent.classList.add('accordion-content');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('btn', 'btn-primary', 'mt-2');

    //*Attach Elements
    accordionDiv.appendChild(accordionButton);
        accordionDiv.appendChild(accordionContent);

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(accordionDiv);

        cardDiv.appendChild(image);
        cardDiv.appendChild(cardBody);
        cardDiv.appendChild(addToCartButton);
        
        displayDiv.appendChild(cardDiv);
        
        addToCartButton.onclick = () => {
            accordionButton.addEventListener('click', () => {
                accordionContent.classList.toggle('show');
            });
            const newItem = {
                id: product.id,
                title: product.title,
                cost: product.price.toFixed(2),
                quantity: 1,
            };
            submitToCart(newItem);
        };
        
    });
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