'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import HomeCard from './HomeCard'

const MeetingTypeList = () => {
    const router = useRouter()
    const [meetingstate, setmeetingstate] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard
            img='/icons/add-meeting.svg'
            title='New Meeting'
            description='Start an instant meeting'
            handleClick = {() => setmeetingstate('isJoiningMeeting')}
            className='bg-orange-1'
        />
        <HomeCard
            img='/icons/schedule.svg'
            title='Schedule Meeting'
            description='Plan your meeting'
            handleClick = {() => setmeetingstate('isScheduleMeeting')}
            className='bg-blue-1'
        />
        <HomeCard
            img='/icons/recordings.svg'
            title='View Recordings'
            description='Check out your Recordings'
            handleClick = {() => setmeetingstate('isJoiningMeeting')}
            className='bg-purple-1'
        />
        <HomeCard
            img='/icons/join-meeting.svg'
            title='Join Meeting'
            description='via invitation link'
            handleClick = {() => setmeetingstate('isJoiningMeeting')}
            className='bg-yellow-1'
        />
    </section>
  )
}

export default MeetingTypeList