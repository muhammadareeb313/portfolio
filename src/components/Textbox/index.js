function Textbox({rows,cols,id,className}){
    return <div>
        <textarea rows={rows} cols={cols} id={id} className={className}></textarea> 
    </div>;
}
export default Textbox;