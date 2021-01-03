import React from 'react';
import { User } from '../Providers';

// {/* The following would also like to use name but doesnt have access to the context values*/}

const Context = (props) => {
  const contextValues = React.useContext(User.Context);
  return (
    <div>
      <User.Provider name={"Mohammad"} >
        <UsesContext />
        {/*&nbsp;
        <UsesContext2 />

        &nbsp;
        <div>
          <label>Can not use Context</label>
          <input value={''} readOnly/>
        </div>*/}
      </User.Provider>

      <div>-------------------------------</div>

      <User.Provider name={"Afzal"}>
        {(contextValues) => (
          <>
            <UsesContext />
            &nbsp;
            <UsesContext2 />

            {/* The following can now access contextValues*/}
            &nbsp;
            <div>
              <label>Can <strike>not</strike> use Context</label>
              <input value={contextValues.name} readOnly/>
            </div>
          </>
        )}
      </User.Provider>
    </div>
  )
}

const UsesContext = (props) => {
  console.log(props)
  const contextValues = React.useContext(User.Context)
  return (
    <div>
      <label>Uses Context</label>
      <input value={contextValues.name} readOnly />
    </div>
  )
}

const UsesContext2 = (props) => {
  return (
    <User.Context.Consumer>
      {(contextValues) => (
        <div>
          <label>Uses Context 2</label>
          <input value={contextValues.name} readOnly />
        </div>
      )}
    </User.Context.Consumer>
  )
}


export default Context
