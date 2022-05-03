import React from 'react'
import PostItem from './postItem'

const posts = [
    {
        id: 1,
        title: 'Full Guide to Becoming a Professional Chef',
        category: 'Food',
        time: '2017/01/31 - 10:12',
        view: '15',
        comments: '15'
    }, {
        id: 2,
        title: 'Full Guide to Becoming a Professional Chef',
        category: 'Food',
        time: '2017/01/31 - 10:12',
        view: '15',
        comments: '15'
    }
]

const PostDashboardList = () => {
    return (
        <>
            <div className="flex flex-row justify-between flex-1 text-white bg-darkPurple border-[1px] h-[30px] p-[20px] rounded-md items-center my-1 ">
                <p className="w-[50%] text-center">title</p>
                <p className="w-[10%] text-center">category</p>
                <p className="w-[20%] text-center">time</p>
                <p className="w-[10%] text-center">view</p>
                <p className="w-[10%] text-center">comments</p>
            </div>
            {
                posts.map(({ id, title, category, time, view, comments }) => (
                    <PostItem id={id} title={title} category={category} time={time} view={view} comments={comments} />
                ))
            }
        </>
    )
}

export default PostDashboardList