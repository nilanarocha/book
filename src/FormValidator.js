import validator from 'validator';

class FormValidator {
  constructor(validation) {
    this.validation = validation;
  }
  validate(state) {
    const campValor = state[this.validation.camp.toString()];
    const methodValidation = validator[this.validation.method];
    if (methodValidation(campValor, [], state) === true) {
      console.log('invalido');
    } else {
      console.log('valido');
    }
  }
}

export default FormValidator;
