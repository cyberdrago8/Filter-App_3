MustacheX = 0;
MustacheY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/B6T2jjhn/m.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Inialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        MustacheX = results[0].pose.Mustache.x;
        MustacheY = results[0].pose.Mustache.y;
        console.log("Mustache x = " + MustacheX);
        console.log("Mustache y = " + MustacheY);
    }
}

function draw() {
image(video,0 ,0 ,300 ,300);
image(Mustache, MustacheX, MustacheY, 30, 30);
}

function takesnapshot() {
    save('myFilter.png');
}
