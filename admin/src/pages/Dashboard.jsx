import {
    Link,
    Outlet
} from "react-router-dom";

function Dashboard() {
    return (
        <div className="page">

            <h1>Admin Dashboard</h1>

            <nav>

                <Link to="users">Users</Link>

                <Link to="reports">Reports</Link>

                <Link to="settings">Settings</Link>

            </nav>

            <Outlet />

        </div>
    );
}

export default Dashboard;
