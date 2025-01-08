// slider page-home
const sliderItems = document.querySelector('.slider-items');
const sliderItemWidth = document.querySelector('.slider-item').offsetWidth;
const sliderItemCount = sliderItems.children.length;
const sliderWidth = (sliderItemWidth + 2) * sliderItemCount;
let currentSlide = 0;

sliderItems.style.width = sliderWidth + 'px';

const sliderControlPrev = document.querySelector('.slider-control-prev');
const sliderControlNext = document.querySelector('.slider-control-next');

sliderControlPrev.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentSlide > 0) {
        currentSlide--;
        sliderItems.style.transform = 'translateX(-' + (currentSlide * (sliderItemWidth + 4)) + 'px)';
    }
});

sliderControlNext.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentSlide < (sliderItemCount - 3)) {
        currentSlide++;
        sliderItems.style.transform = 'translateX(-' + (currentSlide * (sliderItemWidth + 4)) + 'px)';
    }
});
// slider page-home

//////////////

// اپلود عکس
var selectedImage = null;

function addImage() {
var input = document.createElement("input");
input.type = "file";
input.accept = "image/*";
input.onchange = function(event) {
    selectedImage = event.target.files[0];
    var reader = new FileReader();
    var imgtag = document.getElementById("image");
    imgtag.title = selectedImage.name;
    reader.onload = function(event) {
    imgtag.src = event.target.result;
    };
    reader.readAsDataURL(selectedImage);
};
input.click();
}
// اپلود عکس
