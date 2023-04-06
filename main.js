//get id and create an array
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const pokecard = document.getElementById('pokecard')
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12];
const imageExtra= [13, 14,15];
const more = [12];
const slectedIndex = null;
//create images 
imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `/css/images/card${i}.png`;
    image.alt = `Discover your Pokemon`;
    image.classList.add('galleryImg');
    
    //popup stuff
    image.addEventListener('click', () =>{
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/css/images/card${i}.png`;
        selectedImage.alt = `Discover your Pokemon`;
    });

    gallery.appendChild(image);
});

    popup.addEventListener('click', () =>{
        popup.style.transform = 'translateY(-100%)';
      


});
more.addEventListener('click', () =>{
    more.classList.add('imageExtra');
  


});
