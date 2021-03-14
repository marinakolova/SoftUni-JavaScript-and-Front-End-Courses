function solve() { // judge score: 72/100
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      class Worker {
         constructor(name, salary) {
             this.name = name;
             this.salary = salary;
         };
         toString() {
            return `Name: ${this.name} With Salary: ${this.salary}`;
         };
      };

      class Restaurant {
         constructor(name, workers) {
            this.name = name;
            this.workers = workers;
            this.averageSalary = this.getAverageSalary();
            this.bestSalary = this.getBestSalary();
         };
         getAverageSalary() {
            let totalSalary = 0;
               for (let i = 0; i < this.workers.length; i++) {
                  totalSalary += this.workers[i].salary;                  
               }
               return totalSalary / this.workers.length;
         };
         getBestSalary() {
            let salaries = [];
               for (let i = 0; i < this.workers.length; i++) {
                  salaries.push(this.workers[i].salary);                  
               }
            return Math.max(...salaries);
         };
         toString() {
            return `Name: ${this.name} Average Salary: ${this.averageSalary.toFixed(2)} Best Salary: ${this.bestSalary.toFixed(2)}`;
         };
      };

      let restaurants = [];

      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      for (let i = 0; i < input.length; i++) {
         let restaurantData = input[i].split(' - ');
         let name = restaurantData[0];
         let workersData = restaurantData[1].split(', ');
         
         let workers = [];
         for (let j = 0; j < workersData.length; j++) {
            let workerData = workersData[j].split(' ');
            workers.push(new Worker(workerData[0], Number(workerData[1])));            
         }

         if (restaurants.find(x => x.name === name)) {
            for (let i = 0; i < workers.length; i++) {
               restaurants.find(x => x.name === name).workers.push(workers[i]);
            }
         } else {
            restaurants.push(new Restaurant(name, workers));
         }         
      }

      let bestRetaurant = restaurants.sort(function(a, b) { return b.averageSalary - a.averageSalary } )[0];
      
      document.querySelector("#bestRestaurant p").innerText = bestRetaurant.toString(); 
      document.querySelector("#workers p").innerText = bestRetaurant.workers
         .sort(function(a, b) { return b.salary - a.salary } ).join(' ');      
   }     
}
