const expirationDate = new Date();
expirationDate.setMonth(expirationDate.getMonth() + 3);

const month = String(expirationDate.getMonth() + 1).padStart(2, '0');

export const expirationDateInThreeMonths = `${month}/${expirationDate.getFullYear()}`;
