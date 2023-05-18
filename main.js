Webcam.set({
    height:400,
    Width:400,
    image_format:'png',
    png_quaity:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snapshot" src="'+data_uri+'">';
    });
}

console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/isTW-QuBS/'modelLoaded);