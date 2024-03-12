import { validatePassword } from './validatePassword';

describe('validatePassword', () => {
    it('should return true for a valid password', () => {
        const validPassword = 'Abcd12@34';
        expect(validatePassword(validPassword)).toBe(true);
    });

    it('should return false for a password with less than 2 capital letters', () => {
        const invalidPassword = 'abcdef12@';
        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should return false for a password with less than 3 small letters', () => {
        const invalidPassword = 'ABCDEF12@';
        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should return false for a password with less than 2 digits', () => {
        const invalidPassword = 'Abcdef@';
        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should return false for a password without any special symbol', () => {
        const invalidPassword = 'Abcd1234';
        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should return false for an empty password', () => {
        const emptyPassword = '';
        expect(validatePassword(emptyPassword)).toBe(false);
    });
});
