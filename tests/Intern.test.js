const { test, expect } = require("@jest/globals");
const Intern = require("../library/intern.js");

test("Can add Interns school that they attended to their attribute", () => {
    const newSchool = "University of Minnesota"; 
    const emp = new Intern("Andrew", 100, "andrew@gmail.com", newSchool);
    expect(emp.school).toBe(newSchool)
})

test("Can return the Intern's school from the getSchool() function", () => {
    const newSchool = "University of Minnesota";
    const emp = new Intern("Andrew", 100, "andrew@gmail.com", newSchool)
    expect(emp.getSchool()).toBe(newSchool);
})

test("Can get role form the getRole() function that returns a string 'Intern'", () => {
    const testIntern = "Intern";
    const emp = new Intern("Andrew", 100, "andrew@gmail.com", "University of Minnesota");
    expect(emp.getRole()).toBe(testIntern);
})