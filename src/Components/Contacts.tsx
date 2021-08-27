import React, { useState } from 'react';
import Contact from './Contact';

interface IContact{
    name: string,
    email?: string,
}

const Contacts = () => {

    const [contact, setContact] = useState<IContact>('');
    const [contactList, setContactList] = useState<string[]>([]);

    console.log('contact', contact); 

    const onClick = () => {
        setContactList([...contactList, contact]);
        setContact('');
        // e.preventDefault();
    }
    console.log({contactList});
    return (
        <div>-
            <h1>Contact Lists</h1>
            <div className='from'>
                <input onChange={(e) => setContact(e.target.value)} name='name' placeholder='name' type="text" />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((contact) => <Contact key={contact} name={contact} email="tanjin.ahamed123@gmail.com"></Contact>)
            }
            
            <Contact name="Maria" email="maria.israt111@gmail.com"></Contact>
            <Contact name="Tuhin" email="tuhin.ahamed9185@gmail.com"></Contact>
            <Contact name="Monisa" ></Contact>
        </div>
    );
};

export default Contacts;