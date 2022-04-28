import React from 'react'
import UserHeader from './userHeader'
import UserFooter from './userFooter'

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