import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import EmailForm from './../../tdd/EmailForm'

const feature = loadFeature('./src/specs/features/register-form.feature');

defineFeature(feature, test => {
  //Lets render the component that we will use in this scenarios
  let getByLabelText,getByText;
  beforeEach(() => {
    const queries = render(<EmailForm/>);
    getByText = queries.getByText;
    getByLabelText = queries.getByLabelText;
  });

  test('The user is not registered in the site', ({given,when,then}) => {
    
    let email;

    given('An unregistered user', () => {
      email = "newuser@test.com"
    });

    when('I fill the data in the form and press submit', () => {
      const inputEmail = getByLabelText('email-input');
      const inputRemail = getByLabelText('remail-input');
      fireEvent.change(inputEmail, { target: { value: email }});
      fireEvent.change(inputRemail, { target: { value: email }});
      const button = getByText(/Submit/i).closest('button');
      expect(button).not.toHaveAttribute('disabled');
      fireEvent.click(button);
    });

    then('A welcome message should be shown in the screen', () => {
      const welcomemessage = getByText("The user "+email+" has been registered!");
      expect(welcomemessage).toBeInTheDocument();
    });
  });

  test('The user is already registered in the site', ({ given, when, then }) => {
    
    let email;

    given('An already registered user', () => {
      email = "alreadyregistered@test.com"
    });

    when('I fill the data in the form and press submit', () => {
      const inputEmail = getByLabelText('email-input');
      const inputRemail = getByLabelText('remail-input');
      fireEvent.change(inputEmail, { target: { value: email }});
      fireEvent.change(inputRemail, { target: { value: email }});
      const button = getByText(/Submit/i).closest('button');
      expect(button).not.toHaveAttribute('disabled');
      fireEvent.click(button);
    });

    then('An error message should be shown in the screen', () => {
      const errormessage = getByText('ERROR: The user '+email+' is already registered!');
      expect(errormessage).toBeInTheDocument();
    });
    
  });
});