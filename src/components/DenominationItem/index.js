// Write your code here

DenominationItem=(prop)=>{
    const { id,value}=this.prop

    onbutton(id){
        onAmountChange(value)
    }
    return(
        <li><button onClick={onbutton}>{value}</button></li>
    )
}
