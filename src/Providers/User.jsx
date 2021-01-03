import React from 'react';


const UserContext = React.createContext();


const Provider = ({ children, name:initName, ...props}) => {
  const [ name, setName ] = React.useState(initName);
  const contextValues = { name };
  return (
    <UserContext.Provider value={contextValues}>
      {typeof children === 'function' ? (
        React.Children.only(children(contextValues))
      ) : (
        children
      )}
    </UserContext.Provider>
  )
}

export default {
  Provider,
  Context: UserContext,
}
