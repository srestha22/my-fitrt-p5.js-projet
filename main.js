
function setup() {
    canvas = createCcanvas(640,480);
    canvas.position(150.150);
    video = creatCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 230, 150, 200, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);


    fill(0, 128, 0);
    strok(0, 128, 0);
    rect(90, 40, 460, 20);


    rect(90, 420, 460, 20);
    
}