function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(120, 390);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

}
function draw()
{
    image(video ,70 ,90 ,150 ,150);
    ellipse(20, 30, 55, 55);
    ellipse(270, 270, 55, 55);
    ellipse(270, 30, 55, 55);
    ellipse(20, 270, 55, 55);
    rect(20, 10, 250, 43);
    rect(10, 20, 45, 250);
    rect(250, 30, 45, 250);
    rect(20, 250, 250, 43);
}

function take_snapshot()
{
    save('photo.png');
}