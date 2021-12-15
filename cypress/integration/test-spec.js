describe('Landing page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  })
  it('should see a header', () => {
    cy.get('h1').contains('Birthdays')
  })
  it('should see a form', () => {
    cy.get('.form-wrapper').contains('Name');
    cy.get('.form-wrapper').contains('Month');
    cy.get('.form-wrapper').contains('Day');
    cy.get('.form-wrapper').contains('Add this birthday!');
  })
  it('should see a months grid', () => {
    cy.get('.months-grid');
    cy.get('.month-name').should('have.length', 12);
  })
});

describe('form', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  })
  it('should be able to input names and birthdays', () => {
    cy.get('input[name="name"]')
      .type('Nate')
      .should('have.value', 'Nate');
    cy.get('input[name="month"]')
      .type("12")
      .should('have.value', '12');
    cy.get('input[name="day"]')
      .type("28")
      .should('have.value', '28');
  })
})
