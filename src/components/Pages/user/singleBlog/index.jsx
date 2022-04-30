import React from 'react'
import UserLayout from '../../../layout/userLayout'
import SingleBlogCp from "../../../BasicComponents/singleBlogCp"

const SingleBlog = () => {
    return (
        <>
            <UserLayout>
                <div className="w-11/12 sm:container mx-auto">
                    <SingleBlogCp />
                </div>
            </UserLayout>
        </>
    )
}

export default SingleBlog