   //Intersection observer for elements on the left
const descriptionTexts=document.querySelectorAll('.translatee');
descriptionTexts.forEach((descriptionText,index)=>{
  
  let options={threshold:0.3,
  }; //since you've given translate(-100%) to the description-text class, the threshold is 0 so even if the description-text is not visible at all, the observer will still observe it
  
let observer = new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    descriptionText.classList.remove('translatee');
    descriptionText.classList.remove('hide');
    descriptionText.classList.add('show');

    observer.unobserve(entry.target);
  }
})
},options);
  observer.observe(descriptionText);

})

//Intersection observer for elements on the right

let descriptionTexts2=document.querySelectorAll('.translatee2');
  
descriptionTexts2.forEach((descriptionText,index)=>{
  
  let options={threshold:0.3,
  }; //since you've given translate(-100%) to the description-text class, the threshold is 0 so even if the description-text is not visible at all, the observer will still observe it
  
let observer = new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    descriptionText.classList.remove('translatee2');
    descriptionText.classList.remove('hide');
    descriptionText.classList.add('show');

    observer.unobserve(entry.target);
  }
})
},options);
  observer.observe(descriptionText);

})

//Intersection Observer for animating text from bottom to top

let translateTexts= document.querySelectorAll('.translateText');
 let options={threshold:0};
translateTexts.forEach(translateText=>{
  let observer= new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
  translateText.classList.remove('hide');
  translateText.classList.remove('translateText');
  translateText.classList.add('show');

}
})
   
  },options);
  observer.observe(translateText);
}

)
