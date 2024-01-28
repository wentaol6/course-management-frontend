import { NavLink, useLocation } from 'react-router-dom';

const SideNav = () => {
    const location = useLocation();
    const isManagementPage = location.pathname.includes('/manage');
    return (  
        <div className="side-nav">
            <ul>
                {isManagementPage ? (
                    <>
                        <li><NavLink to="/manage/users">Management Users</NavLink></li>
                        <li><NavLink to="/manage/courses">Management Courses</NavLink></li>
                        <li><NavLink to="/manage/enrolments">Management Enrolments</NavLink></li>
                    </>
                ) : (
                    <>
                        <li><NavLink to="/user">Query By User</NavLink></li>
                        <li><NavLink to="/course">Query By Course</NavLink></li>
                        <li><NavLink to="/all">Query All</NavLink></li>
                    </>
                )}
            </ul>
        </div>
    );
}
 
export default SideNav;