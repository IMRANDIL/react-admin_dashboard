import React from 'react'
import './WidgetSmall.css';




const WidgetSmall = () => {
    return (
        <div className='widgetSmall'>
            <span className="widgetSmTitle">New Joined Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://avatars.githubusercontent.com/u/71559091?s=400&u=19775acdc2698063179841ec84602507b5d6e332&v=4" alt="widgetSmImg" className="widgetSmimg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ali Imran Adil</span>
                        <span className="widgetSmUserJobTitle">Software Engineer</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall