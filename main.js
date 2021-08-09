
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    });

    window.alert("Please Click Ok To Captured Your Image")
}
console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/kkJRGlo3T/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded !');
    console.log('This Web Application Is Made By Suryaveer')
    
}
