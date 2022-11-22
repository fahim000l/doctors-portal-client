import { useEffect, useState } from "react"

const UseAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoader, setAdminLoader] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setAdminLoader(false);
                })
        }
    }, [email]);
    return [isAdmin, adminLoader]
};

export default UseAdmin;