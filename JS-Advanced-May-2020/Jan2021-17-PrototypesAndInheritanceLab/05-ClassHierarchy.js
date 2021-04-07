function classHierarchy() {
    function transformMetric(units, valueInCM) {
        return units === 'm' ? valueInCM / 100 :
            units === 'mm' ? valueInCM * 10 :
                valueInCM;
    }

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        get area() {
            throw new Error('Not Implemented!');
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            return Math.PI * transformMetric(this.units, this.radius) * transformMetric(this.units, this.radius);
        }

        toString() {
            return `${super.toString()} - radius: ${transformMetric(this.units, this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return transformMetric(this.units, this.width) * transformMetric(this.units, this.height);
        }

        toString() {
            return `${super.toString()} - width: ${transformMetric(this.units, this.width)}, height: ${transformMetric(this.units, this.height)}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
