import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import InsightsIcon from '@mui/icons-material/Insights';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
import ReportIcon from '@mui/icons-material/Report';
import MailIcon from '@mui/icons-material/Mail';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ForumIcon from '@mui/icons-material/Forum';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';





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
                            <PersonIcon className='sidebarIcon' />
                            Users
                        </li>

                        <li className="sidebarListItem">
                            <Inventory2Icon className='sidebarIcon' />
                            Products
                        </li>

                        <li className="sidebarListItem">
                            <PaidIcon className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailIcon className='sidebarIcon' />
                            Mail
                        </li>

                        <li className="sidebarListItem">
                            <RssFeedIcon className='sidebarIcon' />
                            Feedback
                        </li>

                        <li className="sidebarListItem">
                            <ForumIcon className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccountsIcon className='sidebarIcon' />
                            Manage
                        </li>

                        <li className="sidebarListItem">
                            <AssessmentIcon className='sidebarIcon' />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <ReportProblemIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>


            </div>




        </div>
    )
}

export default Sidebar