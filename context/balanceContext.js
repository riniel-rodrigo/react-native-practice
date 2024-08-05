import React, { useContext, createContext, useState } from 'react';

const balanceContext = createContext();

export default function BalanceProvider({children}){

  const [balance, setBalance] = useState(10);

  return(
    <balanceContext.Provider value={{balance, setBalance}}>
      {children}
    </balanceContext.Provider>
  )
}

export function useBalance() {
  const context = useContext(balanceContext);
  const {balance, setBalance} = context;
  return {balance, setBalance};
}