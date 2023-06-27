import getBudgetObject from './alx-frontend-javascript/0x00-ES6_basic/7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars (income) {
      return `$${income}`;
    },
    getIncomeInEuros (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
