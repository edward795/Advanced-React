import React from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import {buyCake} from '../redux/cakes/cakeAction'

function HooksCakeComponent() {
    
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()

    return (
    <div>
         <h2>Num Of Cakes - {numOfCakes}</h2>
         <button onClick={()=>dispatch(buyCake())}>BuyCake</button>
    </div>
  )
}

export default HooksCakeComponent