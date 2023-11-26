import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loading} from './Loading';
import Toast from './Toast';

const Alert = () =>{
    const {auth,alert} = useSelector(state => state);
    const dispatch = useDispatch();
    const close = ()=>{
        dispatch({
            type:'ALERT',
            payload:{}
        })
    }
    // console.log({auth, alert})
    return(
        <div>{alert.loading && <loading/>}
            {alert.error && <Toast msg={{title:'Error',  body:alert.error}} bgColor="red"
            handleShow='{close}'/>}
             {alert.success && <Toast msg={{title:'Success',  body:alert.error}} bgColor="green"
            handleShow='{close}'/>}
        </div>
    )
}

export default Alert;