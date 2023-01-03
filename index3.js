//Active page indicator
const navbtns=document.querySelectorAll('.navBtn');

//Intersection Observer for the active page id
let sections=document.querySelectorAll('.section');

// 50% of the target is visible

sections.forEach(section=>{
    let options={threshold:0.7} 
let observer=new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
    if(entry.isIntersecting){
    console.log(entry.target.id);
    activeSectionHandler(entry.target.id);

    
}
})
},options)

observer.observe(section);})

//Helper functions
let activeSectionHandler=(activeSection)=>{
 navbtns.forEach(navbtn=>{
    if(navbtn.dataset.section===activeSection){
        navbtn.classList.add('active');
    }
    else{
        navbtn.classList.remove('active');
    }
 })
}

//Arrow down and up to scroll

