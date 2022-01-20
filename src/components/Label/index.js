function Label({children,idFor,id,className}){
    return (<label htmlFor={idFor} id={id} className={className} >{children}</label>)
}
export default Label;