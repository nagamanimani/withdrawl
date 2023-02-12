// Write your code here
import {Component} from 'react'
import './components/DenominationItem'

class CashWithdrawal extends Component{
    const {denominationsList}=this.prop
        const {id,value}=denominationsList

    state={
        amount:2000

    }
    onAmountChange=(value)=>{
        this.setState(prevState=>({prevState.amount-value}))
    }
    render(){
        const {amount}=this.state
        return(
            <div className="con">
                <div className="bl-con">
                <div className="name">
                    <div className="namecolor">N</div>
                    <p>Nagamani</p>
                </div>
                <div className="balence">
                    <p>Your Balance</p>
                    <p>{amount}</p>
                </div>
                <p>Withdraw</p>
                <p>CHOOSE SUM (IN RUPEES)</p>
                <ul>
                    {denominationsList.map(each=><DenominationItem id=each.id value=each.value/>)}
                </ul>
                </div>
            </div>
        )
    }
}
export default CashWithdrawal