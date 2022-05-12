const sections =document.querySelectorAll('.section');//list of elements that matches a css selector
const sectBtns= document.querySelectorAll('controls');
const sectBtn= document.querySelectorAll('.control');
const allSections= document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class// Only want to get active class
    for(let i=0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn= document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            this.className+= ' active-btn';
        })
    }
    //Sections Active Class
    allSections.addEventListener('click',(e)=>{ // takes an event for sections when click happens
        const id=e.target.dataset.id; //dataset refers to elemnt clicked//  attached to data-id// clicking on element then target dataset
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{// loop through each individual button
                btn.classList.remove('active')
            })
            e.target.classList.add('active')//add active to class clicked

            //hide other sections
            sections.forEach((section)=>{ // click active button and set translation to default
                section.classList.remove('active')
            }) 
            const element=document.getElementById(id); // saving id based on element
            element.classList.add('active');
        }
    })
    //TOGGLE THEME
    const themeBtn= document.querySelector('.theme-btn'); // classname btn has
    themeBtn.addEventListener('click', ()=>{
        let element =document.body; // targeting body
        element.classList.toggle('light-mode') // applies light mode
    })
}


PageTransitions(); 
