
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('presents a question', ()=>{
            cy.get('#input').type('I have a question?');
            cy.get('#button').click();
            cy.get('#question').should('be.visible');
        });
    });
});