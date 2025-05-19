import React from 'react'

export default function Alert(props) {
    
  return (
    <div style={{height:'50px'}}>
    {props.alert  && <div className={`alert alert-${props.alert.t} alert-dismissible fade show`} role="alert"
    style={{
                        backgroundColor: props.mode === 'dark' ? '#343a40' : '',
                        color: props.mode === 'dark' ? 'white' : ''
                    }}
    >
      <strong>{props.alert.t}</strong> : {props.alert.msg}
</div>}
</div>
  )
}


