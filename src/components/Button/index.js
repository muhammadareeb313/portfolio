function Button({children,onClick,id,className}){
    return (<button onClick={onClick} id={id} className={className} >{children}</button>);
}
export default Button;