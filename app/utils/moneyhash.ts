import MoneyHashHeadless from '@moneyhash/js-sdk/headless';
import MoneyHash from '@moneyhash/js-sdk/headless';
import { useState } from 'react';
export let moneyHashInstance: MoneyHashHeadless<'payment'>;

export const useMoneyHash = () => {
  const [moneyHash] = useState(() => {
    if (moneyHashInstance) return moneyHashInstance;
    moneyHashInstance = new MoneyHash({
      type: 'payment',
      publicApiKey: '',
    });
  });

  return moneyHash;
};
