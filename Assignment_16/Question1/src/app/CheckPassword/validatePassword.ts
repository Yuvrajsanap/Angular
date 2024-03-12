export function validatePassword(password: string): boolean {
  const capitalCount = (password.match(/[A-Z]/g) || []).length;
  const smallCount = (password.match(/[a-z]/g) || []).length;
  const digitCount = (password.match(/[0-9]/g) || []).length;
  const specialCount = (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;

  return capitalCount >= 2 && smallCount >= 3 && digitCount >= 2 && specialCount >= 1;
}
