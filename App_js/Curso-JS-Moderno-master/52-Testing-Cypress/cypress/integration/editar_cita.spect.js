/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {
  it('Campos nueva cita', () => {
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

  it('Edita la cita', () => {
    cy.get('[data-cy=btn-editar]').click();

    // Modificar los campos
    cy.get('[data-cy=mascota-input]').clear().type('Kiara');

    // Precionar el boton
    cy.get('[data-cy=submit-cita]').click();

    // Alerta
    cy.get('[data-cy=alerta]').invoke('text').should('equal', 'Guardado Correctamente');

    cy.get('[data-cy=alerta]').should('have.class', 'alert-success');
  });
});
