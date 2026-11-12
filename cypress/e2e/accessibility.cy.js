describe('Accessibility Testing - Day 1', () =>{
    
     it('TC-01 - Should inspect buttons', () => {

        cy.visit('https://logicnextgen.com/projects/logiccart/upload/index.php?route=account/login&language=en-gb');
        // 1. Verificar que existan botones.
        cy.get('button').should(($buttons) => {
            expect($buttons.length).to.be.greaterThan(0);
        });

        // 2. Verificar que sean visibles.
        // TODO: Implementar.
        cy.get('button').should('be.visible');

        // 3. Inspeccionar el nombre accesible de cada botón.
        // Pista: text(), aria-label, aria-labelledby.
        // TODO: Implementar.
        cy.get('button[type="submit"].btn-light').find('i').should('have.class', 'fa-magnifying-glass')
        cy.get('button.navbar-toggler').should('have.attr', 'data-bs-target', '#navbar-menu');
        cy.get('button[type="button"]').should('have.text', ' 0 item(s) - $0.00');
        cy.get('button[type="submit"]').should('have.text', 'Login');
    });

    it('TC-02 - Should inspect images', () => {
        cy.visit('https://logicnextgen.com/projects/logiccart/upload/#');
        // 1. Verificar que existan imágenes.
        // TODO: Implementar.
        cy.get('img').should(($imgs) => {
            expect($imgs.length).to.be.greaterThan(0);
        });

        // 2. Recorrer las imágenes con .each().
        cy.get('img').each(($el) => {
            cy.wrap($el).should('have.attr', 'src');
        });
        // 3. Revisar si tienen atributo alt.
        // TODO: Implementar.
        cy.get('img').each(($el) => {
            cy.wrap($el).should('have.attr', 'alt');
        });
    });

    it('TC-03 - Should inspect form controls', () => {
        cy.visit('https://logicnextgen.com/projects/logiccart/upload/index.php?route=account/register&language=en-gb');

        // 1. Identificar inputs, textarea y select.
        cy.get('input.form-control').each(($input) => {
            cy.wrap($input).should('be.visible').and('not.be.disabled').and('have.value', '');
        });
        // 2. Revisar si tienen una etiqueta asociada
        //    o un nombre accesible mediante ARIA.
        // TODO: Implementar.
        cy.get('[for="input-firstname"]').should('have.text', 'First Name');
        cy.get('[for="input-lastname"]').should('have.text', 'Last Name');
        cy.get('[for="input-email"]').should('have.text', 'E-Mail');
        cy.get('[for="input-telephone"]').should('have.text', 'Telephone');
        cy.get('[for="input-password"]').should('have.text', 'Password');
    });

    it('TC-04 - Should inspect heading structure', () => {
        cy.visit('https://logicnextgen.com/projects/logiccart/upload/#');
        // 1. Identificar h1, h2, h3, h4, h5 y h6.
        cy.get('h1, h2, h3, h4, h5, h6').should(($headers) => {
            expect($headers.length).to.be.greaterThan(0);
        });

        // 2. Revisar que existan encabezados.
        cy.get('h1, h2, h3, h4, h5, h6').should('exist');
        // 3. Inspeccionar su jerarquía y contenido.
        // TODO: Implementar.
        cy.get('h3').should('have.text', 'Featured');
        cy.get('h4').eq(0).should('have.text', 'MacBook');
        cy.get('h5').eq(0).should('have.text', 'Information');
        
    });
});