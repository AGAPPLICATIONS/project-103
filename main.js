//https://teachablemachine.withgoogle.com/models/sD3ea-uVT/
Webcam.set({
height:300,
width:350,
image_format:'png',
png_quality:90




}
);
camera = document.getElementById("camera");
Webcam.attach("camera");
function capturepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("capture").innerHTML ='<img id ="img_self" src="'+data_uri+'">';
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sD3ea-uVT/model.json',modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
