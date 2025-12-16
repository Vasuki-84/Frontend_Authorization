// import { Navigate } from "react-router-dom";

// const ProtectedRoutes = ({ Children }) => {
//   const token = localStorage.getItem("token"); // get the token from backend ans store it in local storage
//   return token ? Children : <Navigate to="/" />; // if user has token navigate to children else navigate to keep the user in login page
// };
// export default ProtectedRoutes;

import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/" />
}

export default ProtectedRoutes;