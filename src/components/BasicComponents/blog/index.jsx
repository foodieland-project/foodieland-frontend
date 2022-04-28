import React, {useState } from 'react'
import { Link} from 'react-router-dom';
import Pagination from './Pagination';
import { RecipeData } from './Maindata'

const categoriesData = [
  {
    id: 1,
    category: "Breakfast",
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    profile: 'images/recipes/food-20.png',
    name: "wade wentern",

  },
  {
    id: 2,
    category: "Vegan",
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    profile: 'images/recipes/food-18.png',
    name: "wade wentern",

  },
  {
    id: 3,
    category: "Meat",
    profile: 'images/recipes/food-17.png',
    title: 'Chicken Meatballs with Cream Cheese',
    name: "wade wentern",

  },

];



const Blog = () => {
  // All Data
  const [filtered, setfiltered] = useState(RecipeData);

  ///////////PAGINATION//////////
  const [currentPage, setcurrentPage] = useState(1);
  const [PostPerPage] = useState(6);

  // get the current post pagination
  const indexOfLastPost = currentPage * PostPerPage;
  const indexOfFirstPost = indexOfLastPost - PostPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  // changing page  PAGINATE
  const paginate = (Pagenumber) => setcurrentPage(Pagenumber)

  ///////////PAGINATION//////////
  // Search and filtering data
  const handlechangle = (event) => {

    let keyword = event.target.value;
    let data = RecipeData.filter((item) => {
      return (item.category.toLowerCase().indexOf(keyword) > -1 || item.title.toLowerCase().indexOf(keyword) > -1)
    })
    setfiltered(data)
  }


  return (
    <>
      {/*/////////// TOP TITLE AND EXCERP////////// */}

      <div className='mt-10'>
        <p className='text-center font-bold 2sm:ml-5  xl:text-5xl text-3xl'>Blog & Article</p>
        <p className='text-center text-gray-600 2sm:ml-5  text-md mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, eaque</p>
      </div>

      {/* ///////SearchBar //////////*/}

      <div className='w-full h-max flex justify-center align-center my-16'>

        <div className='xl:w-1/2 w-full h-20 rounded-[20px] 2sm:ml-5  text-center relative border-2'>
          <input onChange={handlechangle} className=' w-full h-full outline-none xl:p-8 2sm:p-3 rounded-[20px]' placeholder='Search article,news or recipe...' />
          <button className='w-1/5 h-3/4 bg-black text-white rounded-[20px] absolute right-2 hover:bg-gray-900 text-center  top-[9px] xl:text-md text-xs '>Search</button>
        </div>

      </div>

      {/* //////////BOTTOM PART /////////////////*/}


      <div className='w-full h-max  overflow-hidden'>
        <section className='w-full h-full xl:flex  2sm:grid'>
          {/*//////// LIST OF RECIPIES ///////  */}
          <article className=' w-2/3 h-full  2sm:w-full '>
            {currentPosts.map((item, index) => (
              <Link to={`/blog/${index + 1}`}> <article key={index} className='w-full   bg-white  flex hover:opacity-90 mb-3 transition-all  cursor-pointer'>
                <div className='xl:w-1/4 2sm:w-[250px] h-full bg-white flex justify-center align-center  '>
                  <img src={item.img} alt="food" className='w-full h-full rounded-[15px]' />
                </div>
                <div className='w-2/3 flex-col realtive'>
                  <p className='font-bold m-1'>{item.title}</p>
                  <p className='text-gray-700 m-2 2sm:text-xs'>Lorem, ipsum dol Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident error repellendus tenetur omnis dolore laboriosam atque placeat odio voluptate.</p>

                  <div className='w-60 h-10  2sm:mb-8 xl:mt-8 ml-2 flex items-center mt-1'>

                    <div className='w-1/2 h-full flex  items-center border-r-2  '>
                      {/* img */}
                      <img src={`${item.profile}`} alt="" className='w-10 h-10  rounded-[50%]' />

                      <p className='m-[2px] ml-2'>{item.category}</p>
                    </div>
                    <p className='ml-6 text-gray-500 text-xs text-center '>{item.date} </p>
                  </div>
                </div>
              </article></Link>
            ))
            }
            {/* ////////////////Pagination////////// */}
            <Pagination
              postPerPage={PostPerPage}
              totalposts={filtered.length}
              paginate={paginate}
              currentPage={currentPage}
              setcurrentPage={setcurrentPage}
            />
            {/* ////////////////Pagination////////// */}
          </article>


          {/*////////// TASTY RECIPIES//////////// */}
          <article className='xl:w-1/3 w-1/2  h-[400px]  2sm:w-full 2sm:h-[170px]  2sm:flex-col cursor-pointer '>
            <p className='font-bold text-2xl text-center  xl:text-left xl:m-2'>Tasty Recipies</p>
            <div className='h-full w-full xl:grid 2sm:flex pl-4 '>
              {categoriesData?.map((item, index) => (
                <article key={index} className='w-full  bg-white my-2 xl:flex hover:opacity-90'>
                  <div className='xl:w-1/2 2sm:w-[80%]  xl:h-full 2sm:h-[90px] bg-white '>
                    <img src={`${item.profile}`} alt="" className='w-full h-full bg-cyan-900 rounded-[15px] ' />
                  </div>
                  <div className='w-2/3 2sm:w-full'>
                    <p className='font-semibold xl:m-2 my-2 2sm:text-xs'>{item.title}</p>
                    <p className='text-gray-800 m-2 2sm:text-2xs'>{item.name}</p>
                  </div>
                </article>
              ))
              }
            </div>
            <img src='images/recipes/food-18.png' alt="" className=' xl:h-80 bg-cover xl:mt-60 m-6 2sm:ml-12' />
          </article>
        </section>
        <div className='w-full xl:h-0  h-60 white '>
        </div>
      </div>
    </>
  )
}

export default Blog