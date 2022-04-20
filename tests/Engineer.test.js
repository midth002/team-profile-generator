
const { test, expect } = require("@jest/globals");
const Engineer = require("../library/engineer.js");

test("Can add Engineers GitHub to their attribute", () => {
    const git = "andrewGit"; 
    const emp = new Engineer("Andrew", 100, "andrew@gmail.com", git);
    expect(emp.gitUserName).toBe(git)
})

test("Can return the github user name from the getGitHub() function", () => {
    const testGit = "andrewGit";
    const emp = new Engineer("Andrew", 100, "andrew@gmail.com", testGit)
    expect(emp.getGithub()).toBe(testGit);
})

test("Can get role form the getRole() function that returns a string 'Engineer'", () => {
    const testEngineer = "Engineer";
    const emp = new Engineer("Andrew", 100, "andrew@gmail.com", "andrewGit");
    expect(emp.getRole()).toBe(testEngineer);
})