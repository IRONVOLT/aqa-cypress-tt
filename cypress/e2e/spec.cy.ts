import { getData } from "./data-resiver/getJsonData";
import UserData from "./data-resiver/usrerData";
import RegistrationPage from "./page-object/RegistrationPage";

let userData: UserData ;

beforeEach(() => {
  cy.visit('https://app.test.mypaymash.com/app#/signup');


  cy.request({
    method: 'GET',
    url: 'https://api.namefake.com/'
  }).then((resp) =>{
    userData = getData(resp.body);
  })
})

describe('Test suit, success and fail on email field', () => {
  const registrationPage = new RegistrationPage();
  
  it('Success registration', () => {
    registrationPage.setCompanyNameField(userData.companyName);
    registrationPage.setFirstNameField(userData.firstName);
    registrationPage.setLastNameField(userData.lastName);
    registrationPage.setEmailField(userData.email);
    registrationPage.setPasswordFiled(userData.password);
    registrationPage.setPhoneField(userData.phone);
    registrationPage.checkPrivacyCheckBox();
    registrationPage.submitButtonClick();

    cy.get('.welcome-title').should('be.visible');
  })

  it('Fain on email field', () => {
    registrationPage.setCompanyNameField(userData.companyName);
    registrationPage.setFirstNameField(userData.firstName);
    registrationPage.setLastNameField(userData.lastName);
    registrationPage.setEmailField('unvalid');
    registrationPage.setPasswordFiled(userData.password);
    registrationPage.setPhoneField(userData.phone);
    registrationPage.checkPrivacyCheckBox();
    registrationPage.submitButtonClick();

    registrationPage.visibleEmailValidationField();
  })
})