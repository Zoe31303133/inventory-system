import { Route, Routes, HashRouter, NavLink } from 'react-router-dom';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ManagerSideBar from '@/Components/SideBars/manager';
import UserManagement from '@/Components/Dashboard/main/UserManagement.jsx'
import { Head } from '@inertiajs/react';
import '../../../resources/bootstrap_module/sidebars/sidebars.js';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        }>
             <HashRouter>
                <Head title="Dashboard" />
                
                <main className='d-flex flex-nowrap'>
                    <ManagerSideBar></ManagerSideBar>
                    <Routes>
                        <Route path="/employee" Component={UserManagement}></Route>
                    </Routes>

                </main>
            </HashRouter>
        </AuthenticatedLayout>
    );
}
