/*-----------------------10CIPRIAN WEB-DEV © --------------- */


//VARIABLES
const item = document.querySelector('.sub-items').firstElementChild;
const subitems = document.querySelectorAll('.subitem');
const i = subitems.length;
const hamburger = document.querySelector('.hamburger');
const itemsActive = document.querySelectorAll('.item');
const cnt = itemsActive.length;
const logo = document.querySelector('.logo');
const items = document.querySelector('.items');
const subitem2 = document.querySelector('.sub-items');
const header = document.querySelector('header');
const hmtl = document.querySelector('html');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const about = itemsActive[1];
const contact = subitems[1];

//ACTIVE DROPDOWN SERVICES
item.addEventListener('click', function(e){
    e.preventDefault();
    for(j=0; j<i; j++){
        if(subitems[j].classList.contains('active')){
            subitems[j].classList.remove('active');
        }else{
            subitems[j].className="subitem active";
        }
    }
} , false);
//HAMBURGER MENU
hamburger.addEventListener('click', function(e){
    e.preventDefault();
    if(items.classList.contains('flex')){
        items.classList.remove('flex');
        subitem2.classList.remove('active');
        logo.className = "logo active";
        header.className= " ";
        hmtl.style.backgroundColor="#5CDB95";
        subitem2.style.backgroundColor="#5CDB95";
        main.style.display="block";
        footer.style.display="block";
        hamburger.style.backgroundColor="#5CDB95";
        
    }else{
        items.className="items flex";
        subitem2.className='sub-items active';
        logo.className="logo dezactive";
        header.className= "column all-center";
        var test = hmtl.style.backgroundColor="#8EE4AF";
        subitem2.style.backgroundColor="#8EE4AF";
        main.style.display="none";
        footer.style.display="none";
        hamburger.style.backgroundColor="white";
       
    }
} , false);

function test(){
    if(main.style.display=="block"){
        document.getElementById('about').scrollIntoView();
    }
}
about.addEventListener('click', (e)=>{
    e.preventDefault();
    items.classList.remove('flex');
    subitem2.classList.remove('active');
    logo.className = "logo active";
    header.className= " ";
    hmtl.style.backgroundColor="#5CDB95";
    subitem2.style.backgroundColor="#5CDB95";
    main.style.display="block";
    footer.style.display="block";
    hamburger.style.backgroundColor="#5CDB95";
    test();
});



