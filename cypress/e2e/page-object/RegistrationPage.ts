class RegistrationPage {
    companyNameField: string = 'input[name="company"]';
    firstNameField: string = 'input[name="firstName"]';
    lastNameField: string = 'input[name="lastName"]';
    emailField: string = 'input[name="email"]';
    emailValidationField: string = 'span[i18n="validation.required"]';
    passwordField: string = 'input[name="password"]';
    phoneField: string = 'input[name="phone"]';
    countrySelector?: string;
    privacyCheckBox: string = 'input[name="terms"]';
    submitButton: string ='.submit-button button'

    setCompanyNameField(companyName: string): void {
        const field = cy.get(this.companyNameField);
        field.clear();
        field.type(companyName)
    }

    setFirstNameField(firstName: string): void {
        const field = cy.get(this.firstNameField);
        field.click();
        field.clear();
        field.type(firstName)
    }

    setLastNameField(lastName: string): void {
        const field = cy.get(this.lastNameField);
        field.clear();
        field.type(lastName)
    }

    setEmailField(email: string): void {
        const field = cy.get(this.emailField);
        field.clear();
        field.type(email)
    }

    visibleEmailValidationField(): void {
        const field = cy.get(this.emailValidationField)
        field.should('be.visible')
    }

    setPasswordFiled(password: string): void {
        const field = cy.get(this.passwordField);
        field.clear();
        field.type(password);
    }

    setPhoneField(phone: string): void {
        const field = cy.get(this.phoneField);
        field.clear;
        field.type(phone);
    }

    checkPrivacyCheckBox(): void {
        const field = cy.get(this.privacyCheckBox);
        field.check({force: true});
    }

    submitButtonClick(): void {
        const field = cy.get(this.submitButton);
        field.click()
    }
}

export default RegistrationPage;