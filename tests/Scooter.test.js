const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(true);
  }
)
})


// //async
// describe('scooter methods', () => {

//   test("charge", async() => {
    
//     const scooter = new Scooter ();
//     await scooter.charge(); 
//     expect (newScooter.charge).toBe(100);

//   })
// })


//Method tests
describe('scooter methods', () => {

  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method
  test("charge", async () => {
    let newScooter = new Scooter ("London", "user")
    const scooter = new Scooter();
    await scooter.recharge();
    expect(newScooter.recharge).toBe(100)
  })

})
