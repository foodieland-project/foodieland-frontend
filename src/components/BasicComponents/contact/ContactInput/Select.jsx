const SelectList = (props) => {

    const options = props.options.map((option, index) => <option key={index} value={option.id}>{option.name}</option>)

    return ( 
        <div>
            <label className="text-xs font-medium mb-3 tracking-wide opacity-80" htmlFor={props.id}>{props.label}</label>
            <select className="border border-gray-900/10 p-5 rounded-2xl text-sm mb-6" id={props.id} >
                {options}
            </select>
        </div>
     );
}
 
export default SelectList;