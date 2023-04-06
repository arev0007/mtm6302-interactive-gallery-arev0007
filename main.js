//get id and create an array
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const pokecard = document.getElementById('pokecard')
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12];


const slectedIndex = null;
//create images 
imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `/css/images/compressed/card${i}.png`;
    image.alt = `Discover your Pokemon`;
    image.classList.add('galleryImg');

    //popup stuff
    if (i !== 12) {
        image.addEventListener('click', () =>{
            popup.style.transform = `translateY(0)`;
            selectedImage.src = `/css/images/card${i}.png`;
            selectedImage.alt = `Discover your Pokemon`;
        });
    }

    gallery.appendChild(image);
});
            popup.addEventListener('click', () =>{
            popup.style.transform = 'translateY(-100%)';

});  


//Add three images when user select add more
const lastThree = document.querySelectorAll('img:nth-child(n+13)');
lastThree.forEach(img => img.classList.add('hidden'));
    

const img12 = document.querySelector('img:nth-child(12)');
img12.addEventListener('click', () => {
 
    const img13 = document.createElement('img');
    img13.src = '/css/images/card13.png';
    img13.classList.add('hidden');
    img13.setAttribute('id', 'imagen-13');
    
    const img14 = document.createElement('img');
    img14.src = '/css/images/card14.png';
    img14.classList.add('hidden');
    img14.setAttribute('id', 'imagen-14');
    
    const img15 = document.createElement('img');
    img15.src = '/css/images/card15.png';
    img15.classList.add('hidden');
    img15.setAttribute('id', 'imagen-15');
    
    gallery.appendChild(img13);
    gallery.appendChild(img14);
    gallery.appendChild(img15);
    
    img13.classList.remove('hidden');
    img14.classList.remove('hidden');
    img15.classList.remove('hidden');

})

