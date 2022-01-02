canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

greencar_x = 5;
greencar_y = 255;
greencar_width = 75;
greencar_height = 100;

background_img = "parkingLot.jpg";
greencar_img = "car2.png";

function add() {
	background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_img;

    car_imgtag = new Image();
    car_imgtag.onload = uploadgreencar;
    car_imgtag.src = greencar_img;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_imgtag, greencar_x, greencar_y, greencar_width, greencar_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >= 0) {
        greencar_y = greencar_y - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if (greencar_y <= 300) {
        greencar_y = greencar_y + 10;

        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if (greencar_x >= 0) {
        greencar_x = greencar_x- 10;
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if (greencar_x <= 740) {
        greencar_x = greencar_x + 10;
        uploadBackground();
        uploadgreencar();
    }
}
