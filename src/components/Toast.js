import React from 'react';

const Toast = ({msg,handleShow,bgColor}) =>{
    return (
        <div className='toast' style={{position:'fixed', padding:'1rem',borderRadius:'5px', backgroundColor:`${bgColor}`,color:'#000', top:'5px',right:'5px',zIndex:'50', minWidth:'230px'}}>
        <div style={{display:'flex',alignItems:'center',padding:'0rem,.5rem', justifyContent:'space-between',borderBottom:'1px solid rgb(104,104,190)' }} className='toast-header'>
            <h5 style={{fontWeight:'600'}}>{msg.title}</h5>
            <p onClick={handleShow} style={{fontSize:'1.5rem', cursor:'pointer' }}>&times;</p>
        </div>
        <div className='toast-body' style={{padding:'0rem .5rem'}}>
            <p >{msg.body}</p>
        </div>

        </div>
    );
}
export default Toast