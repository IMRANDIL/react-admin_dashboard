import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import InsightsIcon from '@mui/icons-material/Insights';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
import ReportIcon from '@mui/icons-material/Report';











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
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
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
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
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
                    <h3 className='sidebarTitle'>Staffs</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
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


            </div>




        </div>
    )
}

export default Sidebar