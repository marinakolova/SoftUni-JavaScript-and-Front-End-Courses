function createSortedList() {
    class SortedList {
        constructor() {
            this.arr = [];
            this.size = 0;
            this.add = function(element) {
                this.arr.push(element);
                this.arr.sort((a, b) => a - b);
                this.size++;
                return this.arr;
            };
            this.remove = function(index) {
                if (index >= 0 && index < this.arr.length) {
                    this.arr.splice(index, 1);
                    this.arr.sort((a, b) => a - b);
                    this.size--;
                    return this.arr;
                }
            };
            this.get = function(index) {
                if (index >= 0 && index < this.arr.length) {
                    return this.arr[index];
                }
            };
        }
    }

    return new SortedList();
}
