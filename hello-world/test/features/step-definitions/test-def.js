const expect = require('chai').expect;

// module.exports = function(){
//     // this.Given(/^I go to the website "([^"]*)"$/,(url) => {
//         this.Given('I go to the website "http://www.google.com"',(url)=>{
//             browser.url(url);
//         })
//     // }  )
// }

module.exports = function () {
    this.Given('I go to the website abc',() => {
      browser.url("http://www.google.com");
    });
  
    this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
      expect(browser.getTitle()).to.be.eql(title);
    });
  }
  
