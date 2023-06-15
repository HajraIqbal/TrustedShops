/// <reference types="cypress" />

//const { Input } = require("@angular/core")

//Open this in google extension because I was stuck when I was trying to open in Electron. timeout error was coming. 
describe('Profile page', () => {
    beforeEach(() => {
      // Added the screensize of desktop into the cypress.config.js file
    cy.visit('https://www.trustedshops.de/bewertung/info_X77B11C1B8A5ABA16DDEC0C30E7996C21.html');
    });
    //should have a page title
    it('Title page', () => {
      //cy.visit('https://www.trustedshops.de/bewertung/info_X77B11C1B8A5ABA16DDEC0C30E7996C21.html');
      cy.title()
        .should('exist');
    });
  //should display a visible grade above zero
    it('display grade', () => {
      cy.get('.sc-3a77ab16-6')
        .should('be.visible')
        .invoke('text')
        .then((gradeText) => {
          const grade = parseFloat(gradeText);
          expect(grade).to.be.above(0);
        });
    });
      //should open the window with additional information when "Wie berechnet sich die Note?" link is clicked
    it('open "Wie berechnet sich die Note?"', () => {
      cy.contains('Wie berechnet sich die Note?')
        .click();  
      cy.wait(1000)

      cy.get('.Kqdoz').contains("Bewertungen")
       
    });
    
  //should filter all "two stars" reviews when "2 Stars" is clicked
    it('2 stars', () => {
      cy.get('[href="/bewertung/info_X77B11C1B8A5ABA16DDEC0C30E7996C21.html?stars=2"] > .sc-61f2e426-6 > .sc-61f2e426-5').click()
        cy.wait(1000)

       //Important:  Here with this code I am trying to add the following code 
       //into function and then trying to call it for whole pagination. but 
       //cypress is concatenating the base url and pagination urls together.
       // for which pages are not openening. I can further look into again.
       //but for now submitting this task

       // Cypress.Commands.add('verifyReviewColors', () => {
        cy.get('.chcERM').then(($reviews)=>{
          $reviews.each((index,review)=>{
           cy.wrap(review).within(()=>{
            cy.get('.gWZgUz').within(()=>{
                cy.get('span').eq(0).should('have.css','color', 'rgb(255, 220, 15)')
                cy.get('span').eq(1).should('have.css','color', 'rgb(255, 220, 15)')
                cy.get('span').eq(2).should('have.css','color', 'rgb(204, 204, 204)')
                cy.get('span').eq(3).should('have.css','color', 'rgb(204, 204, 204)')
                cy.get('span').eq(4).should('have.css','color', 'rgb(204, 204, 204)')
            });
          });
          });
        });
       // });
        
       // cy.get('#pagination').within(() => {
        //  cy.get('a').each(($link) => {
            //  const url = $link.attr('href');
            //  cy.visit(url);
             // cy.verifyReviewColors(); // Assuming the command is registered properly
       // });
      //});
    });
  it('Percentage', () => { 
    cy.get('div[class="sc-61f2e426-8 iMXstX"]').then(($fontElements) => {

      // Ensure that there are 5 font elements
      expect($fontElements.length).to.equal(5);

      // Sum the percentages
      let sum = 0;
      $fontElements.each((index, fontElement) => {
        // Extract the percentage (removing the % sign)
        let percentage = parseFloat(fontElement.innerText.trim().replace('%', ''));
        // Add the percentage to the sum
        sum += percentage;
      });

      // Log the sum for debugging purposes
      console.log(`Sum of percentages: ${sum}%`);

      // Assert that the sum is equal to 100
      expect(sum).to.equal(100);
    });

  });
  it.only('Percentage', () => { 
    cy.get('span').should('have.text', 'Mehr erfahren').click()
    
  });

});

  