import React from 'react'
import {sectionIds} from "./sectionIds";
import { Link } from "react-router-dom"

const navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="row">
                <div className="logo">LOGO</div>
                <ul className='menu-bar'>
                    {
                        sectionIds.map( (el,indx) =>(
                            <li key={indx}>
                                <Link to="/">{el}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default navbar