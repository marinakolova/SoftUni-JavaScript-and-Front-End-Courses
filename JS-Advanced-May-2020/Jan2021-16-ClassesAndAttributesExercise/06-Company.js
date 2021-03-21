class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        function isValid(param) {
            if (param === '' || param === undefined || param === null) {
                return false;
            }

            return true;
        }

        if (!isValid(username) || !isValid(salary) || !isValid(position) || !isValid(department) || salary < 0) {
            throw new Error("Invalid input!");
        }

        let targetDepartment = this.departments.find(x => x.department === department);

        if (!targetDepartment) {
            targetDepartment = {
                department: department,
                employees: []
            };

            this.departments.push(targetDepartment);
        }

        targetDepartment.employees.push({
            username: username,
            salary: salary,
            position: position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        const department = this.departments
            .sort((a, b) => b.employees.reduce((x, y) => x + y) - a.employees.reduce((x, y) => x + y))[0];

        const avgSalary = department.employees
            .map(x => x.salary)
            .reduce((x, y) => x + y) / department.employees.length;

        const empls = department.employees
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .map(x => `${x.username} ${x.salary} ${x.position}`)
            .join("\n");

        return `Best Department is: ${department.department}\nAverage salary: ${avgSalary.toFixed(2)}\n${empls}`;
    }
}
