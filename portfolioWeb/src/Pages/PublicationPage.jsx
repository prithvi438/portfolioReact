import React from 'react'
import PublicationCard from '../Components/PublicationCard'

const PublicationPage = () => {
  return (
    <div>
<p style={{ fontSize: '34px', margin: '40px' }}>Publications</p>
<p style={{ fontSize: '16px', margin: '40px' }}>All publications listed here</p>
    <div style={{display: 'flex',  flexWrap: 'wrap'}}>
      <PublicationCard/>
      <PublicationCard/>
      <PublicationCard/>
      <PublicationCard/>
      <PublicationCard/>
      <PublicationCard/>
      <PublicationCard/>
      <PublicationCard/>
    </div>
    </div>
  )
}

export default PublicationPage
