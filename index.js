
let length = 5;
let height = 10;

function calculateArea(length, height){
    return length * height;
}
class Rectangle {
    constructor(length, height) {
        this.length = length;
        this.height = height;
    }
    calculateArea(){
    return this.length * this.height;
}

}
