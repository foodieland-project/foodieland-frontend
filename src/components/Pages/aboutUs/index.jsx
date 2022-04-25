import SubscribeCard from "../../BasicComponents/subscribeCard"
import React from 'react'
import { icons } from "../../../utils/icons"
import RecipeVideoCard from '../../BasicComponents/recipeVideoCard'
import RecommendedRecipes from '../../BasicComponents/recommendedRecipes'
import Galleries from '../../BasicComponents/galleries'

const Post = () => {
  return (
    <>
      <h1 className='font-medium text-4xl md:text-3xl mt-5 sm:mt-10 text-center justify-center items-center lg:mt-20 mb-3 md:mb-6 sm:leading-[58px]'>About Us</h1>
      <p className="text-center items-center m-auto w-[80%] mb-[71px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
        at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
      <div className='sm:mx-[80px] mx-[10px] mb-[71px]'>
        <RecipeVideoCard videoUrl={"./videos/aboutUs.mkv"} />
      </div>
      <div className=' justify-center items-center '>
        <div className="flex flex-col text-center mb-[30px]">
          <h2 className="flex text-inter font-semibold text-2xl font-[64px]  justify-center items-center  mb-[24px]">why Foodieland?</h2>
          <p className="flex text-inter font-normal justify-center items-center font-[16px]">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." 1914 translation by H. Rackham "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated
            and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>
      </div>
      <Galleries />
      <SubscribeCard />
      <RecommendedRecipes />
    </>
  )
}

export default Post