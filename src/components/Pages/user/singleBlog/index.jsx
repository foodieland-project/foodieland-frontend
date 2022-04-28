import React from 'react'
import UserLayout from '../../../layout/userLayout'
import SingleBlog from '../../../BasicComponents/singleBlog'

const singleBlog = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto">
          <SingleBlog />
        </div>
      </UserLayout>
    </>
  )
}

export default singleBlog