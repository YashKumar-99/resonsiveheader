import React from 'react'

import { social } from '../../data'
const SocialIcaon = () => {
    return (
        <>
           {
            social.map((item)=>{

                return(<React.Fragment  key={item.id}>
                <a href="#" className='singleIcon'>{item.icon}</a>
                </React.Fragment>)
            })
           }
        </>)
}

export default SocialIcaon