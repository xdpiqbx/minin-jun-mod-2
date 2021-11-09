import React, { useContext } from 'react';

const QualitiesContext = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
  return (
    <QualitiesContext.Provider value={'Simple text'}>
      {children}
    </QualitiesContext.Provider>
  );
};
