import React, { useState } from 'react';
import Contact from './Contact';

interface IContact{
    name: string,
    email?: string,
}

const Contacts = () => {

    const [contact, setContact] = useState<IContact>({
        name: '',
        email: ''
    }
    );
    const [contactList, setContactList] = useState<IContact[]>([]);

    console.log('contact', contact); 

    const onClick = () => {
        setContactList([...contactList, contact]);
        setContact({
            name: '',
            email: ''
        });
        // e.preventDefault();
    }
    console.log({contactList});
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, [e.target.name]:e.target.value})

    const handleRemove = (email:string) => {
        const newContactList = contactList.filter(c => c.email !== email);
        setContactList(newContactList);
    }
    return (
        <div>-
            <h1>Contact Lists</h1>
            <div className='from'>
                <input value={contact.name} onChange={onChange} name='name' placeholder='name' type="text" />
                <input value={contact.email} onChange={onChange} name='email' placeholder='email' type="email" />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((con) => <Contact key={con.name} name={con.name} email={con.email} handleRemove={handleRemove}></Contact>)
            }
            
            {/* <Contact name="Maria" email="maria.israt111@gmail.com"></Contact>
            <Contact name="Tuhin" email="tuhin.ahamed9185@gmail.com"></Contact>
            <Contact name="Monisa" ></Contact> */}
        </div>
    );
};

export default Contacts;