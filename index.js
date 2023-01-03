//console.log(`Alright, It's Day28! let's go!`);
let carouselContainer=document.querySelector('.carousel-container');
const parent=document.getElementById('parent');
const carouselParent=document.getElementById('carousel-parent');
const info=document.querySelector('.info');
const infoHeading=document.querySelector('.info-head');
const infoApartmentRooms=document.querySelector('.info-apartment-rooms');
const infoApartmentLocation=document.querySelector('.info-apartment-location');
const infoAgentPic=document.querySelector('.info-agent-pic');
const infoAgentName=document.querySelector('.info-agent-name');
const arrowRight=document.querySelector('.arrow-right');
const arrowLeft=document.querySelector('.arrow-left');


const objects=[
  {image:'material2/newHouse1Edited.jpg',
    infoHeading:'SCARSTEDT RESIDENCE',
    infoApartmentRooms: '5Bedrooms 2Kitchens',
    infoApartmentLocation:' New Jersey',
    infoAgentPic:'/material/PhilDunphy.jpg',
    infoAgentName: 'PHIL DUNPHY(Top Agent)'},

  {image:'material2/cpsHouse1.jpg',
    infoHeading:'CAMP TETON',
    infoApartmentRooms: '1Bedroom 1Kitchen',
    infoApartmentLocation:'Jackson Hole/Wyoming',
    infoAgentPic:'material/Gloria Delgado Pritchhet.webp',
    infoAgentName: 'GLORIA DELGADO PRITCHHET'},

  {image:'material2/keagan-henman-NpjIH7ohvFI-unsplash.jpg',
    infoHeading:'SHELLDOR RESIDENCE',
    infoApartmentRooms: '5Bedrooms 2Kitchens',
    infoApartmentLocation:'Ohio',
    infoAgentPic:'material2/andy2.jpg',
    infoAgentName: 'ANDY BAILEY'},

  {image:'material2/cpsHouse2.jpg',
     infoHeading:'TERRY HILL RESIDENCE',
     infoApartmentRooms: '3Bedrooms 2Kitchens',
     infoApartmentLocation:'AUSTIN/Texas',
     infoAgentPic:'material/GilThorpe.png',
     infoAgentName: 'GIL THORPE'},
    ];

//const text=[,'This is the second image','This is the third image'];




var divs=[]; //Since we can't access the div element created in the for-loop outside the loop we are creating an empty array and then pushing the div into that array

//Creating carousel-container divs
for(let i=0;i<objects.length;i++){
  const div= document.createElement('div');
  div.style.backgroundImage=`url('${objects[i].image}')`;
  div.setAttribute('id','carousel-item1');
  div.setAttribute('class',' bg-cover bg-center bg-no-repeat  ');
  
  carouselContainer.appendChild(div);
  divs.push(div);
  const heading=document.createElement('h1');
    heading.setAttribute('class','text-4xl text-black font-bold -mb-60');
    heading.innerHTML=objects[i].text;
  //  div.appendChild(heading);

    const bgdiv=document.createElement('div');
    bgdiv.setAttribute('class', 'min-h-screen min-w-full');

    div.appendChild(bgdiv);
    
  
  /*const info=document.createElement('div');
  info.setAttribute('class','relative mt-80  bg-black min-h-10 min-w-10');
  info.innerText='hiiiiii';
  div.appendChild(info);*/
}





//Carousel items scroll and Intersection Observer check
  divs.forEach((div,index)=>{
    const itom= div.getBoundingClientRect();
   // console.log(itom);
    let itomWidth= itom.width;
   // console.log(itomWidth);
  
      arrowRight.addEventListener('click',(e)=>{
      carouselContainer.scrollLeft+=itomWidth;   
     // console.log(itomWidth);  
      e.preventDefault();
     });

     arrowLeft.addEventListener('click',(e)=>{
      carouselContainer.scrollLeft-=itomWidth;   
     // console.log(itomWidth);  
      e.preventDefault();
     });




        //Intersection Observer
      let options={threshold:0.7, // 50% of the target is visible
                   };
      let observer = new IntersectionObserver((entries,observer)=>{
       entries.forEach(entry=>{
  
      if(entry.isIntersecting){  
      // entry.target.style.backgroundImage=`url('${objects[0].image}')`;
       //  observer.unobserve(entry.target);
      
       infoHeading.innerHTML=objects[index].infoHeading;
       infoApartmentRooms.textContent=objects[index].infoApartmentRooms;
       infoApartmentLocation.textContent=objects[index].infoApartmentLocation;
       infoAgentPic.src=`${objects[index].infoAgentPic}`;
       infoAgentName.textContent=objects[index].infoAgentName;
       info.classList.toggle('show',entry.isIntersecting);
       info.classList.remove('hide');
      
       console.log(index);

       if(index==0){
        arrowLeft.style.display='none';
       }
       else if(index==objects.length-1){
        arrowRight.style.display='none';

      }}
      else{
       // entry.target.style.backgroundImage=`url('${objects[index].image}')`;
    //  info.classList.remove('show');
      info.classList.add('hide');
      arrowLeft.style.display='block';
      arrowRight.style.display='block';
      }
      })
      },options);
           observer.observe(divs[index]); // here we are observing the divs
      })

   //menu bar toggle
const menu=document.querySelector('.Menu');

   let hamburger=document.querySelector('.hamburger');
   hamburger.addEventListener('click',e=>{
  // menu.classList.toggle('menuBarHeight');
   menu.classList.toggle('menuBarHeightAfterClick');
   hamburger.classList.toggle('hamburgerRotate');
    e.preventDefault();
   })
   



    
 
