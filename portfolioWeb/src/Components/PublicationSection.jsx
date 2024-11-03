import React from 'react'
import PublicationCard from './PublicationCard'

const PublicationSection = () => {
    return (
        <div style={{marginLeft: '40px'}}>
        <p style={{ fontSize: '30px' }}>Selected Publications</p>
        <div style={{display: 'flex', flexWrap: 'wrap'}}> 
            <PublicationCard/>
            <PublicationCard/>
            <PublicationCard/>
        </div>
        </div>
    )
}

export default PublicationSection
