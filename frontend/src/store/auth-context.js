import React, { useState, useEffect } from 'react';

const onLogout = () => { };

const onLogin = (jwtToken) => { 

};

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: onLogout,
  onLogin: onLogin,
});

export const authContextProvider = (props) => { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
   useEffect(() => { 
    const storedUserLoggedInformation = localStorage.getItem('loginToken');

    // if (storedUserLoggedInformation) {
    //   try { 
    //     fetch().then((res) => res.json()).then(newJwtToken => { 
    //       localStorage.setItem('loginToken', newJwtToken);
    //       setIsLoggedIn(true);
    //     }
    //     ) //GET API
        
    //   } catch {
    //     setIsLoggedIn(false);
    //     localStorage.setItem('loginToken',null);
    //   }
    // }
  }, []);
}