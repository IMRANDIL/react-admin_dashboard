import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import InsightsIcon from '@mui/icons-material/Insights';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';





const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className='sidebarIcon' />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <InsightsIcon className='sidebarIcon' />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <PointOfSaleIcon className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>


                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <InsightsIcon />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <PointOfSaleIcon />
                            Sales
                        </li>
                    </ul>
                </div>
            </div>




        </div>
    )
}

export default Sidebar