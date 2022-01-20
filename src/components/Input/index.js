function Input({type,id,className,onChange,value}){
    return (<input type={type} value={value} id={id} className={className} onChange={onChange} />);
}
export default Input;