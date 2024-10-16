// SelectedOptionContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface SelectedOptionContextType {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const SelectedOptionContext = createContext<SelectedOptionContextType | undefined>(undefined);

export const SelectedOptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<string>('react-js');

  return (
    <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectedOptionContext.Provider>
  );
};

export const useSelectedOption = (): SelectedOptionContextType => {
  const context = useContext(SelectedOptionContext);
  if (context === undefined) {
    throw new Error('useSelectedOption must be used within a SelectedOptionProvider');
  }
  return context;
};