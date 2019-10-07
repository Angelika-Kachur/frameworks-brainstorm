import React from 'react';

export const Context = React.createContext({});

const Provider = ({children}) => {
  const variable = 'Test';
  return <Context.Provider value={{variable}}> {/* everythin inside will be able from the context*/}
    {children} {/* for <Provider><App/></Provider> */}
  </Context.Provider>
}

export default Provider;