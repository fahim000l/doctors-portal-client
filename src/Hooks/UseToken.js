import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useToken = (email) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('doctors token', data.accessToken);
                        setToken(data.accessToken);
                    }
                    else {
                        toast.error('Unauthorised Access');
                    }
                })
        }
    }, [email]);

    return [token];
};

export default useToken;