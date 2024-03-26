import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ManagerSideBar from '@/Components/SideBars/manager';
import { Head } from '@inertiajs/react';
import '../../../resources/bootstrap_module/sidebars/sidebars.js';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        }
        >
            <Head title="Dashboard" />
            
            <main className='d-flex flex-nowrap'>
                <ManagerSideBar></ManagerSideBar>
                <div class="d-flex gap-3 small mt-3">
                    <div className="col-md-9  ms-sm-auto col-lg-10 px-md-4 overflow-scroll">
                        <div></div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
