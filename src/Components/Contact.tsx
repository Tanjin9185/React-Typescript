import React from 'react';

interface IProps{
    name: string,
    email?: string,
}

const Contact = ({name, email="N/A"}: IProps) => {
    return (
        <div className="card">
            <p>
                <strong>Name</strong> {name}
            </p>
            <p>
                <strong>Email</strong> {email}
            </p>
        </div>
    );
};

export default Contact;