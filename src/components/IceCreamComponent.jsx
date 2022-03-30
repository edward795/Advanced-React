import React from 'react'
import {buyIceCream} from '../redux/icecream/icecreamAction'
import {connect} from 'react-redux'

function IceCreamComponent(props) {
  return (
    <div>
        <h2>No of IceCreams:{props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps=(dispatch)=>{
return{
     buyIceCream:()=>{dispatch(buyIceCream())}
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent)