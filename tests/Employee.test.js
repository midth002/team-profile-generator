
const { test, expect } = require("@jest/globals");
const Employee = require("../library/employee.js");

        test("Can create a new Employee object", () => {
            const employee = new Employee(); 
            expect(typeof (employee)).toBe("object")
        })
  
        test("Can create a new Employee with a name in the parameter", () => {
            const name = "Andrew";
            const newEmp = new Employee(name);
            expect(newEmp.name).toBe(name);
        });


        test("Can create a new Employee with an id in the parameter", () => {
            const newID = 100;
            const newEmp = new Employee("Andrew", newID)
            expect(newEmp.id).toBe(newID)
        })

        test("Can create a new Employee with an email in the parameter", () => {
            const newEmail = 'andrew@gmail.com';
            const newEmp = new Employee("Andrew", 100, newEmail)
            expect(newEmp.email).toBe(newEmail)
        })

        test("Can get an employee name from the getName() function that returns this.name", () => {
            const testName = "Andrew";
            const testEmp = new Employee(testName);
            expect(testEmp.getName()).toBe(testName)
        })

        test("Can get an employee name from the getID() function that returns this.ID", () => {
            const testID = 100;
            const testEmp = new Employee("Andrew", testID);
            expect(testEmp.getId()).toBe(testID)
        })

        test("Can get an employee name from the getEmail() function that returns this.email", () => {
            const testEmail = "andrew@gmail.com";
            const testEmp = new Employee("Andrew", 100, testEmail);
            expect(testEmp.getEmail()).toBe(testEmail)
        })

        test("Can get role from the getRole() function that returns a string 'Employee'", () => {
            const testReturn = "Employee";
            const testEmp = new Employee("Andrew", 100, "andrew@gmail.com");
            expect(testEmp.getRole()).toBe(testReturn)
        })



   


