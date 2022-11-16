import React from 'react';

const PrimaryBtn = ({ children, submit, disabled }) => {
    return (
        <button type={submit}
            disabled={disabled}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
    );
};

export default PrimaryBtn;