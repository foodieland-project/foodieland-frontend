import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {RecipeData} from './Maindata'

const Singleblog = () => {

    let {id} = useParams()
    let singleBlog = RecipeData.find(item=>item.id == id)
  
    useEffect(() => {
       console.log(singleBlog.img)
    }, []);
  
    return (
        <div className='w-full h-max grid place-items-center pt-6 '>
            <section className='xl:w-1/2 w-full h-[1000px]  '>

               {/* IMAGE OF THE BLOG */}
               <div className=' w-full h-[300px] relative '>
                    <img src={`/${singleBlog.img}`} alt="" className='w-full h-full bg-cover bg-center  rounded-2xl' />
                    <p className='absolute top-0 right-0 m-4 font-bold text-white'>{singleBlog.date}</p>
               </div>

                {/* content of the post */}
               <div className='w-full h-[100px] bg-purple-100 mt-2 flex justify-center items-center rounded-xl'>

                    <p className='font-bold xl:mr-6 mr-4 ml-2'>{singleBlog.category}</p>

                   <div className='w-24 h-full bg-red-300 rounded-[50%]'>
                       <img src={`/${singleBlog.profile}`} alt="" className='w-full h-full bg-center bg-cover'/>
                   </div>

                    <p className='ml-4 text-md'>{singleBlog.title}</p>

               </div>

               <p className='m-4 xl:text-md text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam inventore illo exercitationem incidunt eos temporibus facere, officia, molestias libero fugiat corrupti ab adipisci iure molestiae sint quam quae ipsum eum. Et voluptas, voluptatibus beatae odio, quaerat non est delectus ipsa facere quos maiores debitis assumenda dicta obcaecati. Eligendi iste velit ullam quidem rem illum consequuntur accusamus dicta nesciunt perspiciatis, voluptatum natus placeat rerum omnis voluptate, totam doloribus deleniti sequi fugiat iure neque. Facilis hic doloremque repellendus maxime in incidunt nemo assumenda provident quae ipsum nulla ullam dolores, dolorum sed ratione quaerat ab magni, officiis soluta magnam architecto molestias labore eum dignissimos. Voluptatum saepe nesciunt maiores. Sunt animi omnis vero quos quae dolores autem asperiores, quam blanditiis laudantium facere consectetur aperiam modi. Tempore, laborum voluptatum suscipit voluptates vero repudiandae pariatur accusamus odio doloremque ea molestiae, aspernatur dicta odit natus aperiam consectetur quis facere inventore debitis nemo amet. Ratione obcaecati nisi velit temporibus, ullam et cum animi necessitatibus commodi. Praesentium quos illo placeat beatae nostrum veritatis repellat omnis, aperiam iusto quas ipsum at expedita perferendis culpa esse consequatur enim harum est quidem nisi aliquid voluptatibus tenetur sequi. Repudiandae fugiat alias voluptas itaque enim mollitia molestias, quia necessitatibus quo perspiciatis, distinctio cupiditate.</p>
             
                <div className='w-full h-[100px]  flex justify-center items-center mb-6 mt-3'>
                     <div className='w-24 h-full bg-purple-700 rounded-[50%] flex justify-center items-center '>
                        <p className='font-bold text-white'>{singleBlog.time}</p>
                   </div>
                   <div className='w-24 h-full bg-red-700 rounded-[50%] flex justify-center items-center ml-2 '>
                        <p className='font-bold text-white'>{singleBlog.Meal}</p>
                   </div>

                </div>
            </section>
        </div>
    );
}

export default Singleblog;
