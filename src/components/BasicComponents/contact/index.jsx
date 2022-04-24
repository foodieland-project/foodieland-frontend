import Input from './ContactInput/Input';
import Select from './ContactInput/Select';
import TextArea from './ContactInput/TextArea';


const options = [
    {id: "Advertising",
    name: "Advertising"},
    {id: "Commercials",
    name: "Commercial"},
    {id: "Support",
    name: "Support"},
]

const Contact = (props) => {
    return ( 
        <>
        <div className='grid grid-cols-3 w-full my-20' >
            <h2 className="text-6xl font-semibold tracking-tight col-start-2" >Contact us</h2>
        </div>
        <div className="grid grid-cols-3 mb-44" >
        <img src="http://localhost:3000/images/cooker/Cook-contact.png" alt="Cook" className='h-5/6'/>
            <form className='grid grid-cols-2 grid-rows-4 gap-x-10 col-span-2  '>
                <Input id="name" label="NAME" type="text" placeholder="Enter your name..." />
                <Input id="email" label="EMAIL ADDRESS" type="text" placeholder="Enter your email..." />
                <Input id="subject" label="SUBJECT" type="text" placeholder="Enter subject..." />
                <Select id="type" label="ENQUIRY TYPE" options={options} />
                <TextArea id="message" label="MESSAGES" placeholder="Enter your Messages..." />
                <button className="flex justify-center items-center w-36 md:w-[180px] h-12 md:h-[60px] bg-black text-white rounded-2xl font-semibold " >Submit</button>
            </form>
        </div>
        </>
     );
}
 
export default Contact;