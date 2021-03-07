function createRectangle(width, height, color) {
    class Rectangle {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color.charAt(0).toUpperCase() + color.slice(1);
        }
    
        calcArea() {
            return this.width * this.height;
        }
    }

    let rectangle = new Rectangle(width, height, color);
    return rectangle;
}
