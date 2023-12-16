import React from 'react'

function PromoSub(props) {
  return (
<div>
    <div className="sub-text">
       <p className="sub-title">{props.title}</p>
       <p className="sub-info">{props.infos}</p>
    </div>

</div>
  )
}

export default PromoSub