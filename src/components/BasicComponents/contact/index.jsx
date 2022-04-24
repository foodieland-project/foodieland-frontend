import Input from './ContactInput/Input';
import Select from './ContactInput/Select';

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
        <form className='grid grid-cols-2 grid-rows-3 gap-x-10'>
            <Input id="name" label="NAME" type="text" placeholder="Enter your name..." />
            <Input id="name" label="NAME" type="text" placeholder="Enter your name..." />
            <Input id="name" label="NAME" type="text" placeholder="Enter your name..." />
            <Select id="type" options={options} />    
            <Input id="name" label="NAME" type="text" placeholder="Enter your name..." />
        </form>
        </>
     );
}
 
export default Contact;