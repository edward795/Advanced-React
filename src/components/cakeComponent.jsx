import React from 'react'
import {buyCake} from '../redux/cakes/cakeAction'
import {connect} from 'react-redux' 



function CakeComponent(props) {
  return (
    <React.Fragment>
        <h2>No of Cakes:{props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </React.Fragment>
  )
}

const mapStateToProps=state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
    buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)