const { test, expect } = require("@jest/globals");
const Manager = require("../library/manager.js");

test("Can add Managers office number to their attribute", () => {
    const number = 1200; 
    const emp = new Manager("Andrew", 100, "andrew@gmail.com", number);
    expect(emp.officeNumber).toBe(number)
})

test("Can return the office number correlated to the manager from the getOfficeNumber() function", () => {
    const number = 1200;
    const emp = new Manager("Andrew", 100, "andrew@gmail.com", number)
    expect(emp.getOfficeNumber()).toBe(number);
})

test("Can get role form the getRole() function that returns a string 'Engineer'", () => {
    const testManager = "Manager";
    const emp = new Manager("Andrew", 100, "andrew@gmail.com", 1200);
    expect(emp.getRole()).toBe(testManager);
})