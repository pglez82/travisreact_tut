const {defineFeature, loadFeature}=require('jest-cucumber');

const feature = loadFeature('./src/specs/features/register-form.feature');

defineFeature(feature, test => {

  test('The user is not registered in the site', ({given,when,then}) => {
    
    let email;

    given('An unregistered user', () => {
      email = "newuser@test.com"
    });

    when('I fill the data in the form and press submit', () => {
      
    });

    then('A welcome message should be shown in the screen', () => {
      
    });
  });

  test('The user is already registered in the site', ({ given, when, then }) => {
    
    let email;

    given('An already registered user', () => {
      email = "alreadyregistered@test.com"
    });

    when('I fill the data in the form and press submit', () => {
      
    });

    then('An error message should be shown in the screen', () => {
      
    });
    
  });
});