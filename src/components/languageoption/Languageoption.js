import React from 'react'
import "./language.css";


const Languageoption = (props) => {
  return (
    <div className='container_language'>
       <select onChange={props.onChange} className='select_change'>
        <option className='options' selected>ES</option>
        <option value={'en'}>EN</option>
    </select>
</div>
  )
}

export default Languageoption