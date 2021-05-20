/// <reference types="cypress" />

describe('Validar el formulario', () => {
  it('Lenar los campos del formulario', () => {
    cy.visit('/index.html');

    // Campos y boton
    cy.get('[data-cy=mascota-input]').type('Rocco');
    cy.get('[data-cy=propietario-input]').type('Marco Ruvalcaba');
    cy.get('[data-cy=telefono-input]').type('32323232');
    cy.get('[data-cy=fecha-input]').type('2020-12-23');
    cy.get('[data-cy=hora-input]').type('10:30');
    cy.get('[data-cy=sintomas-textarea]').type('Surra muy apestoso');
    cy.get('[data-cy=submit-cita]').click();

    // Encabezado
    cy.get('[data-cy=citas-heading]').invoke('text').should('equal', 'Administra tus Citas');

    // Alerta

    cy.get('[data-cy=alerta]').invoke('text').should('equal', 'Se agregó correctamente');

    cy.get('[data-cy=alerta]').should('have.class', 'alert-success');
  });
});
