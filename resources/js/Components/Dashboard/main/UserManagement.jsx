import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import  CreateUserModal from '@/Components/CreateUserModal';
import  EditUserModal from '@/Components/EditUserModal';

export default function UserManagement(){

    const [users, setUsers] = useState([{"id":1,"name":"zoe","email":"zoe@gmail.com","email_verified_at":null,"created_at":"2024-03-07T11:51:18.000000Z","updated_at":"2024-03-07T11:51:18.000000Z","role":{"user_id":"1","role_id":"sale","permission":[]}}]);
    const [role_list, setRoleList] =useState([{"id":"baker"},{"id":"manager"},{"id":"sale"}]);
    const [edit_mode, setEditMode] = useState(false);
    const [edited_user, setEditUser] = useState({});
    const [create_mode, setCreateMode] = useState(false);

    const modalBackground = {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1050,
    }

    function openCreateModal(){
        setCreateMode(true);
    }

    function closeCreateModal(){
        setCreateMode(false);
    }

    function openEditModal(user){
        setEditUser(user);
        setEditMode(true);
    }

    function closeEditModal(){
        setEditMode(false);
    }

    return <div className="col-md-9  ms-sm-auto col-lg-10 px-md-4 overflow-scroll">

        {
            create_mode && <CreateUserModal role_list={role_list}  onClose={closeCreateModal}></CreateUserModal>
        }
        {
            edit_mode && <EditUserModal user={edited_user} role_list={role_list} onClose={closeEditModal}></EditUserModal>
        }
        
    <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mt-5 mb-3 border-bottom">
        <h1 className="h2">員工列表</h1>        
    </div>
    <div className="d-flex gap-3 small">
        <div className="search-bar d-flex flex-column col-auto ">
        <div className="d-flex p-3 justify-content-center bg-dark-subtle rounded-2 mb-2">
            搜尋條件
        </div>
        <div className="d-flex flex-column input-group input-group-sm p-3 gap-3 border border-1 rounded-2 ">
            <div className="search">
            <select className="me-1 p-1">
                <option value="">ID</option>
                <option value="">姓名</option>
                <option value="">電子信箱</option>
            </select>
            <input  type="text" name="" id=""></input>
            </div>
            <div className="d-flex filter-role gap-2">
            <span>職位：</span>
            <div>
                <input type="checkbox" name="manager" id="" value=""></input>
                <label for="manager">主管</label>
            </div>
            <div>
                <input type="checkbox" name="sale" id="" value=""></input>
                <label for="sale">店員</label>
            </div>
            </div>
            <div className="align-self-end">
            <button className="btn btn-sm border">搜尋</button>
            </div>
        </div>
        </div>
        <div className="d-flex flex-column align-items-center ">
        <div className="btn-toolbar align-self-end mb-2 mb-md-0 ">
            <button type="button " className="btn btn-sm btn-outline-success me-2" onClick={openCreateModal}>新增職員</button>
            <button type="button " className="btn btn-sm btn-outline-danger me-2">批量刪除</button>
        </div>
            <div className="">
            <table className="table table-striped table-fixed table-sm align-middle text-center" style={{"table-layout": "fixed", "word-wrap": "break-word"}}>
                <thead>
                <tr>
                    <th scope="col" className="col-1">
                    <input className="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"></input>
                    <span>全部選取</span>
                    </th>
                    <th scope="col" className="col-2">ID</th>
                    <th scope="col" className="col-2">姓名</th>
                    <th scope="col" className="col-2">職稱</th>
                    <th scope="col" >電子信箱</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                
                    {
                        users && users.map((user)=>{
                            return <tr key={user.id}>
                                <td >
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            </td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.role.role_id}</td>
                            <td>{user.email}</td>
                            <td>
                            <div className='d-flex gap-3'>
                                <button type="button" className="btn btn-success" onClick={(e)=>openEditModal(user)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                                </svg>
                                </button>
                                <button type="button" className="btn btn-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                </svg>
                                </button>    
                            </div>        
                            </td>
                            </tr>
                        })
                    }
             
                </tbody>
            </table>
            
            </div>
        </div>
        
    </div>
</div> ;
}