
let text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tenetur sit unde delectus nam a laudantium necessitatibus perspiciatis repudiandae quam facere repellat itaque iusto, accusamus, beatae eos sunt asperiores tempora?";

let num=4;

let list=document.getElementsByClassName("proj-text");


for(let i=0;i<num;i++){
    // list[0].innerHTML+=text+'<br>';
}
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });
  
  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
      target: mainCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
  });
  
  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });





  
  window.addEventListener("DOMContentLoaded", function(event) {
    
  
  
    var video, output;
    var scale = 0.3;
    var initialize = function() {
    output = document.getElementsByClassName("output");
    console.log(output);
    video = document.getElementById("video");
    console.log(video);
    video.addEventListener('loadeddata',captureImage);

    };
     
    var captureImage = function() {
                console.log("event start")
                var canvas = document.createElement("canvas");
                canvas.width = video.videoWidth * scale;
                canvas.height = video.videoHeight * scale;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
     
                var img = document.createElement("img");
                img.src = canvas.toDataURL("image/png");
                console.log(img.src);
                for(i=0;i<output.length;i++){
                    output[i].setAttribute("src",img.src);
                }
                
                
    };
     
    initialize();
    

});