
const Employee = require("./employee.js");

  
        test("Can create a new Employee with a name in the parameter", () => {
            const name = "Andrew";
            const newEmp = new Employee(name);
            expect(newEmp.name).toBe(name);
        });

   


