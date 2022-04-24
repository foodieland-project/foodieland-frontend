import Input from './ContactInput/Input';

const Contact = (props) => {
    return ( 
        <>
        <h2 className="" >Contact us</h2>
        <div>
            <Input id="name" label="Name" type="text" placeholder="Enter Your Name..." />
        </div>
        </>
     );
}
 
export default Contact;