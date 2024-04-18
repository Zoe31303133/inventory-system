import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, csrf, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <div className="min-h-screen bg-gray-100 ">
            <div className='d-flex justify-content-end py-3 px-5 gap-3 border-bottom align-items-center'>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">庫存管理系統</span>
                </a>
                <div className='d-flex justify-content-end gap-3 align-items-center'>
                    <span>Hello!</span>
                    <span className=''>{user.name}</span>
                    <form action="/logout" method='post'>
                    <input type='hidden' name="_token" value={csrf}></input>
                    <button className='btn btn-sm bg-secondary text-white'>Log out</button>
                    </form>
                </div>
                
            </div>

            <main>{children}</main>
        </div>
    );
}
