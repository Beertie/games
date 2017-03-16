var cols, rows;
var w = 50;
var grid = [];

var click = false;

var celArray =[];
var turn = 1;

var icon =[];

// if 0, unoccupied, if 1 : nought, if -1: cross
var game = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
};

function setup() {

    frameRate(10);

    createCanvas(300, 300);

    cols = floor(150/w);
    rows = floor(150/w);
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            grid.push(cell)
        }
    }
}

function draw() {
    //background(51);

    for(var i =0; i < grid.length; i++){
        grid[i].show()
    }


    if(this.click){
        var locationX = getLocation(mouseX);
        var locationY = getLocation(mouseY);

        if(locationX || locationY){

            var cellID = getCellID(locationX, locationY);

            if(this.turn == 1){

                //Add player 1 to id
                this.game[cellID] = 1;

                drawIcon(1,locationX , locationY);
                this.turn = 2
            }else{

                //Ad player 2 to game array
                this.game[cellID ] = 2;
                drawIcon(2,locationX , locationY);
                this.turn = 1
            }

        }

        //var winner = checkForWinner();

        //console.log(winner);
        /*
        if(winner){

            textSize(32);
            text("Winner"+winner, 20, 180);

        }*/
        console.log(this.game);

        //Reset click event
        this.click = false;

    }

}

/**
 *
 * @param i
 * @param j
 * @param player
 * @constructor
 */
function Cell(i, j) {

    //Set i and j cord
    this.i = i;
    this.j = j;

    //Draw the cell
    this.show = function () {

        //Set X and Y cornd
        var x = this.i*w;
        var y = this.j*w;

        //Do nog fill
        noFill();

        //Draw a rect
        rect(x,y,w,w);

    }
}

/**
 * On Each mouse click forse this function
 */
function mouseReleased() {

    this.click = true;

    return false;

}

function drawIcon(p, x, y) {
    //if player 1 has set
    if(p == 1){

        //Draw a ellipse
        ellipse(x+25, y+25, 40);
    }

    //If player 2 has set
    if(p == 2){

        //Draw 2 lines for a cross
        line(x, y, x + w , y + w);
        line(x+ w, y, x, y + w);
    }
}

function getLocation(i) {
    if(i <= 50){
        return 1;
    }

    if(i > 50 && i <= 100){
        return 50;
    }

    if(i >100 && i <= 150){
        return 100
    }

    return false;
}

//X and Y = 1, 50 or 100
function getCellID(x, y) {

    switch (y) {
        case 1:
            if(x == 1){
                return 1
            }

            if(x == 50){
                return 2
            }

            if(x == 100){
                return 3
            }

            break;
        case 50:
            if(x == 1){
                return 4
            }

            if(x == 50){
                return 5
            }

            if(x == 100){
                return 6
            }
            break;
        case 100:
            if(x == 1){
                return 7
            }

            if(x == 50){
                return 8
            }

            if(x == 100){
                return 9
            }
            break;
    }

}


function checkForWinner() {
    for(var i = 1; i < 9; i+3){

        if(this.game[i] == 0){
            continue;
        }

        if(this.game[i] == this.game[i+1] && this.game[i] == this.game[i+2] && this.game[i+1] == this.game[i+2]) {
            return this.game[i];
        }

    }


    for(var j =1; j < 3; j++){
        if(this.game[j] == 0){
            continue;
        }

        if(this.game[j] == this.game[j+1] && this.game[j] == this.game[j+2] && this.game[j+1] == this.game[j+2]) {
            return this.game[j];
        }
    }

    if(this.game[5] == 0){
        return 0;
    }

    if(this.game[1] == this.game[5] && this.game[1] == this.game[9] && this.game[5] == this.game[9]) {
        return this.game[5];
    }

    if(this.game[3] == this.game[5] && this.game[3] == this.game[7] && this.game[5] == this.game[7]) {
        return this.game[5];
    }

    return 0;

}
