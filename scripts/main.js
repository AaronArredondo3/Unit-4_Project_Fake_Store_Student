//! GLobal Variables
const apiUrl =('https://fakestoreapi.com/products')
const cart = []; 


const category0= document.getElementsByClassName('Cart');
const category1= document.getElementById('Electronics');
const category2= document.getElementById('Jewelery');
const category3= document.getElementById('Mens Clothing');
const category4= document.getElementById('Womens Clothing');
const displayDiv = document.querySelector('#display');

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
    // const displayDiv = document.querySelector('#display');
    data.forEach (product => {
    
        //* Create Elements
        let cardContainer = document.createElement('div');
        let card = document.createElement('div');
        let image = document.createElement('img');
        let cardBody = document.createElement('div');
        let title = document.createElement('h5');
        let accordion = document.createElement('div');
        let accordionItem = document.createElement ('div');
        let accordionHeader = document.createElement('h2');
        let accordionButton = document.createElement('button');
        let accordionCollapse = document.createElement('div');
        let accordionBody = document.createElement('div');
        let description = document.createElement('p')
        let price = document.createElement('p');
        let addToCartButton = document.createElement('button');
    
        //* Set Attributes
        cardContainer.className ='col';
        cardContainer.style.row = "row-cols-1 row-cols-md-1 g-4"
        card.className = 'card';
        image.src = product.image;
        image.alt = product.title;
        image.className = 'card-img-top';
        cardBody.className = 'card-body';
        title.textContent = product.title;
        title.className = 'card-title';
        accordion.classList.add('accordion', 'my-3');
        accordion.setAttribute('id', `accordion-${data.id}`);
        accordionItem.classList.add('accordion-item');
        accordionHeader.classList.add('accordion-header');
        accordionButton.classList.add('accordion-button');
        accordionButton.type = 'button';
        accordionButton.dataset.bsToggle = 'collapse';
        accordionButton.dataset.bsTarget = `#collapse-${data.id}`;
        accordionButton.ariaExpanded = 'true';
        accordionButton.ariaControls = `collapse-${data.id}`;
        accordionButton.textContent = 'Description';
        accordionCollapse.classList.add('accordion-collapse', 'collapse', 'show');
        accordionCollapse.setAttribute('id', `collapse-${data.id}`);
        accordionBody.classList.add('accordion-body');
        accordionBody.textContent = `Accordion body for ${product.description}`;
        description.textContent = product.description;
        description.className = 'card-text';
        price.textContent = `$${product.price.toFixed(2)}`;
        price.className = 'card-text';

        addToCartButton.classList.add('btn', 'btn-primary', 'mt-2');
        addToCartButton.textContent = 'Add to Cart';
        
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
        
        //*Attach Elements
        // accordionDiv.appendChild(accordionContent);
        
        accordionHeader.appendChild(accordionButton);
        accordionBody.appendChild(description);
        accordionBody.appendChild(price);
        accordionCollapse.appendChild(accordionBody);
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionCollapse);
        accordion.appendChild(accordionItem);
        cardBody.appendChild(title);
        card.appendChild(image);
        card.appendChild(cardBody);
        card.appendChild(accordion)
        card.appendChild(addToCartButton);
        cardContainer.appendChild(card);
    
        displayDiv.appendChild(cardContainer);
    
    
});
};



//! Eventlistener for each category

category1.addEventListener('click', e => {
    e.preventDefault();
    fakeStore('category/electronics');  
});

category2.addEventListener('click', e => {
    e.preventDefault();
    fakeStore('category/jewelery');
});

category3.addEventListener('click', e => {
    e.preventDefault();
    fakeStore("category/men's clothing");
});

category4.addEventListener('click', e => {
    e.preventDefault();
    fakeStore("category/women's clothing");
});


//! Window onload event
window.onload = () => {
    fakeStore('?sort=asc');
};