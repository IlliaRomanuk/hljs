import React from "react";
import App from "./App";

describe("<App />", () => {
  beforeEach(() => {
    cy.mount(<App />);
    cy.viewport(1280, 720);
  });
  it("renders", () => {
    cy.mount(<App />);
  });
  it("should allow letters and numbers", () => {
    cy.contains("Todo");

    cy.get('input').type("Test123");



    cy.contains("Add").click();

    cy.contains("Test123").should("exist");
  });

  it("should add new todo item", () => {
  
    cy.get('input[name="name"]').type("Test");

    cy.contains("Add").click();
  
    cy.contains("Test").should("exist");
  });

  it("should disable button while loading", () => {
    cy.get('button[type="submit"]').should("not.be.disabled");
  
  });

  it("should show error when submitting empty form", () => {
    it("should show error when submitting empty form", () => {
      cy.contains("Add").click();
    
      cy.get('input[name="name"]')
        .parent() // wrapper MUI TextField
        .find('p.MuiFormHelperText-root') // helper text
        .should('have.text', 'Required'); // точний текст
    });
  
  });
});
