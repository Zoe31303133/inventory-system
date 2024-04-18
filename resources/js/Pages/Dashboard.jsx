import { Route, Routes, HashRouter, NavLink } from 'react-router-dom';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ManagerSideBar from '@/Components/SideBars/manager';
import UserManagement from '@/Components/Dashboard/main/UserManagement.jsx'
import RoleManagement from '@/Components/Dashboard/main/RoleManagement.jsx'
import ProductManagement from '@/Components/Dashboard/main/ProductManagement.jsx'
import ProductStockManagement from '@/Components/Dashboard/main/ProductStockManagement.jsx'
import ProcessSchedule from '@/Components/Dashboard/main/ProcessSchedule.jsx'
import { Head } from '@inertiajs/react';
import '../../../resources/bootstrap_module/sidebars/sidebars.js';

export default function Dashboard({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            csrf={auth.csrf}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        }>
             <HashRouter>
                <Head title="Dashboard" />
                <main className='d-flex flex-nowrap'>
                    <ManagerSideBar 
                     user={auth.user}
                     csrf={auth.csrf}></ManagerSideBar>
                    <Routes>
                        <Route path="/employee" Component={UserManagement}></Route>
                        <Route path="/role" Component={RoleManagement}></Route>
                        <Route path="/product" Component={ProductManagement}></Route>
                        <Route path="/productStock" Component={ProductStockManagement}></Route>
                        <Route path="/processSchedule" Component={ProcessSchedule}></Route>
                    </Routes>

                </main>
            </HashRouter>
        </AuthenticatedLayout>
    );
}
