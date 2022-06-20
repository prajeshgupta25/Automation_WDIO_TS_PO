import HomePage from '../pageobjects/HomePage'

describe("my First test using Page objects pattern", () => {
   it("Should load homepage", async () => {
      await HomePage.visit()
      await browser.pause(5000)
   })
})