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
        <h2 className="" >Contact us</h2>
        <div>
            <img src="../../../../public/images/Cook-contact.png" alt="" />
            <form className='grid grid-cols-2 grid-rows-4 gap-x-10 '>
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