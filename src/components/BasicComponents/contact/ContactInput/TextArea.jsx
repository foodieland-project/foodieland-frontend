const TextArea = (props) => {
    return ( 
        <div className="flex flex-col font-inter col-span-2">
            <label className="text-xs font-medium mb-3 tracking-wide opacity-80" htmlFor={props.id}>{props.label} </label>
            <textarea className="border border-gray-900/10 p-5 rounded-2xl text-sm mb-6 text-black/60 " id={props.id} placeholder={props.placeholder}/>

        </div>
     );
}
 
export default TextArea;