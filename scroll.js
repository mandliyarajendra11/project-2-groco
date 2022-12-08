var header = document.querySelector('.header');
var top = document.querySelector('.top');

window.addEventListener('scroll',()=>{
const scheight = window.pageYOffset   //return the number of pixel the document scroll verticallyy
const headerHeight = header.getBoundingClientRect().height;
if(scheight>headerHeight){
    header.classList.add('po');
 } 
else{
    header.classList.remove('po')
}
})

//log in
let user  = document.querySelector('#user');
let log  = document.querySelector('#log');
let closes  = document.querySelector('.close');

log.addEventListener('click',()=>{
    user.style.display="flex";
})
closes.addEventListener('click',()=>{
    user.style.display="none";
})

// scroll links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const id= e.currentTarget.getAttribute('href').slice(1);
        if(id==="home"){ 
            window.scrollTo({
                left :0,
                top : 0,
            })}
            if(id==="features"){ 
                window.scrollTo({
                    left :0,
                    top : 350,
                })}
                if(id==="products"){ 
                    window.scrollTo({
                 left :0,
                 top :  884,
                })}
                if(id==="categories"){ 
                    window.scrollTo({
                        left :0,
                        top : 1760,
                    })}
                    if(id==="reviews"){ 
                        window.scrollTo({
                            left :0,
                            top : 2200,
                        })}  if(id==="blogs"){ 
                            window.scrollTo({
                                left :0,
                                top : 2800,
                            })}
                       if (id==="top") {
                        window.scrollTo({
                                left :0,
                                top : 0,
                            })} 
                         }) 
})