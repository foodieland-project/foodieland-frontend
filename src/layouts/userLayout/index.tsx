import React from 'react'
import UserHeader from './userHeader'
import UserFooter from './userFooter'
import './index.css'

const UserLayout = ({ children }: any) => {
    return (
        <>
            <UserHeader />
            {children}
            <UserFooter />
        </>
    )
}

export default UserLayout