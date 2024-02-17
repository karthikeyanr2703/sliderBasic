let left = document.querySelector('#left');
let right = document.querySelector('#right');
let frame= document.querySelector("#frame");
let images = document.querySelectorAll(".image");
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