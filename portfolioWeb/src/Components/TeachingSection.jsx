import React from 'react'
import CourseTaughtCard from './CourseTaughtCard'

const TeachingSection = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%' }}>
                <p style={{ fontSize: '30px' }}>Teachings</p>
                <p style={{ fontSize: '18px', color: 'gray' }}>courses taught.</p>
                    <div>
                        <CourseTaughtCard/>
                        <CourseTaughtCard/>
                        <CourseTaughtCard/>
                    </div>
            </div>
        </div>
    )
}

export default TeachingSection
