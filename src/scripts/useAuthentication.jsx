import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const useAuthentication = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('_auth');
        if (token){
            axios.post("http://185.119.210.230:3941/check", {token})
            .then((response) => {
                setIsLoading(false);
                if(response.data === true){
                    setIsAuthenticated(true);
                }
                else {setIsLoading(false); setIsAuthenticated(false);}
            })
            .catch((err) => {
                setIsLoading(false);
                setIsAuthenticated(false);   
            })
        } 
        else {setIsLoading(false); setIsAuthenticated(false)};
    })

    return [isAuthenticated, isLoading];
};

export default useAuthentication;