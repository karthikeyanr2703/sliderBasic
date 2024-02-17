let left = document.querySelector('#left');
let right = document.querySelector('#right');
let frame= document.querySelector("#frame");
let images = document.querySelectorAll(".image");
let bottom = document.querySelector('#bottom');
const length = images.length;
let sliderNumber = 1;
let getFirstSlider = () => {
    frame.style.transform= `translateX(0px)`;
    sliderNumber=1;

}
let getLastSlider = () => {
    frame.style.transform= `translateX(-${(length-1)*400}px)`;
    sliderNumber=length;
};
let nextSlide= ()=>{
    frame.style.transform= `translateX(-${sliderNumber*400}px)`;
    sliderNumber++;
}
let prevSlide = () => {
    frame.style.transform = `translateX(-${(sliderNumber - 2) * 400}px)`;
    sliderNumber--;
  };

right.addEventListener("click",()=>{
    sliderNumber < length ? nextSlide():getFirstSlide();

})
left.addEventListener("click",()=>{
    sliderNumber > 1 ? prevSlide():getLastSlide();
});
for(let i=1;i<=length;i++){
    let div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);

}
let buttons = document.querySelectorAll(".button");
console.log(buttons);
// buttons[0].style.backgroundColor ="white";
let resetBg = ()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor ='transparent';
    
    })
}
buttons.forEach((button,index)=>{
    resetBg();
    button.style.backgroundColor ="white";
    sliderNumber = index + 1;
    buttons[index].style.transform = ""



})