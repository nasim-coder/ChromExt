


const getGreetings = require("./myPage.js");

test("testing greeting", ()=>{
    expect(getGreetings(10)).toMatch("Good morning")
})