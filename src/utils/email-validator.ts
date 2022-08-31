import { EmailValidator } from '../presentation/protocols/email-validator'
import validator from 'validator'

// npm i validator && npm i @types/validator -D
export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
