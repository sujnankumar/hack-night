import AuthContext from "./auth-context";
import { useState } from "react";

const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <AuthContext.Provider value={isLoggedIn}>{props.children}</AuthContext.Provider>
};
export default AuthProvider;
