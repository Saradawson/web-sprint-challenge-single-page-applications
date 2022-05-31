it('sanity check', ()=>{
   expect(7+3).to.equal(10);
})

describe('visits bloomtech eats website', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    })
    it('visits website works', () => {
      cy.contains('BloomTech Eats!'); 
    })
    it('can order a pizza', () => {
        const orderForm = cy.get(`#order-pizza`);
        expect(orderForm).to.exist;
        orderForm.click();
        const h2 = cy.get('#order-form-h2');
        h2.contains('Create Your Own Pizza');
    })
})