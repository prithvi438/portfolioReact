import React from 'react'
import Button from 'react-bootstrap/Button';

const PublicationCard = () => {
    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', margin: '20px', padding: '20px', borderRadius: '12px', width: '590px' }}>
            <h6 style={{ marginBottom: '28px', fontSize: '20px' }}>Deep Regression Unlearning</h6>
            <p style={{ textAlign: 'justify' }}>
                Ayush Kumar Tarun ,  Vikram Singh Chundawat ,  Murari Mandal , and 1 more author
                In Proceedings of the 40th International Conference on Machine Learning , 23–29 jul 2023
            </p>
            <p style={{ textAlign: 'right', fontSize: '14px' }}>17 Oct 2004</p>

        <div style={{display: 'flex', justifyContent: 'space-between', width: '70%'}}>
        <Button variant="outline-primary" size='sm'>ICML-2023</Button>
        <Button variant="outline-secondary" size='sm'>Core A*</Button>
        <Button variant="outline-warning" size='sm'>Source Code</Button>
        <Button variant="outline-secondary" size='sm'>ABS</Button>
        <Button variant="outline-success" size='sm'>Pdf</Button>
        </div>
        </div>
    )
}

export default PublicationCard
