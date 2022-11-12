import React from 'react';

const PrimaryBtn = ({ children, submit }) => {
    return (
        <button type={submit}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
    );
};

export default PrimaryBtn;