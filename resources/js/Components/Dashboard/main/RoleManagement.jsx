import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

export default function RoleManagement(){

    const [roles, setRoles] = useState();
    const [selected_role, setSelectedRole] = useState();
    const [permissions,setPermissions] = useState();

    useEffect(()=>{
        axios.get('/roles').then((response)=>{
          setRoles(response.data);
        });
        
      }, []);

    function handleSelectRole(e) {
        axios.get('/role_permissions/'+e.target.value).then((response)=>{
            setPermissions(response.data);
        });

        setSelectedRole(e.target.value);
      } 

    function handleSave(e){
        const permission_formData = new FormData(e.target.form);
        const edited_permission = Object.fromEntries(permission_formData);
        
        axios.post('/role_permissions',{role_id:selected_role, permissions:{...edited_permission}})
        .then((response)=>{
          alert("儲存成功！")
          })
      }

    function handleChangePermission(e){
      const resource = e.target.name;
      const permission_level = e.target.value;
      permissions[resource]=permission_level;
      setPermissions({...permissions});
    }

    return   <div className="col-md-9  ms-sm-auto col-lg-10 px-md-4 overflow-scroll">

    <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-4 shadow p-3">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">職位權限</h1>
          </div>
          <div className="modal-body p-5 py-0 fs-6">
              <div className="mb-3 ">
                <select className="form-control form-control-sm" defaultValue="職位名稱" onChange={handleSelectRole}>
                  <option disabled>職位名稱</option>
                  {
                    roles && roles.map((role)=>{
                      return <option >{role.id}</option>
                    })
                  }
                </select>
              </div>

              <div className="mb-3">

              { selected_role &&
              
                <div>
                  <form>
                  <table className="table table-striped table-fixed table-sm align-middle text-center" style={{"table-layout": "fixed", "word-wrap": "break-word"}}>
                    <thead>
                      <tr>
                        <th scope="col" className="col-4">
                        </th>
                        <th scope="col" className="col-2">無權限</th>
                        <th scope="col" className="col-2">檢視</th>
                        <th scope="col" className="col-2">回報</th>
                        <th scope="col" className="col-2">編輯</th>
                        <th scope="col" className="col-2">新增/刪除</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {permissions &&
                        Object.keys(permissions).map((resource)=>{

                          console.log(permissions[resource]);
                          return (
                            <tr >
                              <td>{resource}</td>
                              <td>
                                <input className="form-check-input" type="radio" name={resource} id="flexRadioDefault2" value={"null"} {...(permissions[resource]==null?{checked:'true'}:{})} onChange={handleChangePermission}></input>
                              </td>
                              <td>
                                <input className="form-check-input" type="radio" name={resource} id="flexRadioDefault2" value={4} {...(permissions[resource]==4?{checked:'true'}:{})} onChange={handleChangePermission}></input>
                              </td>
                              <td>
                                <input className="form-check-input" type="radio" name={resource} id="flexRadioDefault2" value={3} {...(permissions[resource]==3?{checked:'true'}:{})} onChange={handleChangePermission}></input>
                              </td>
                              <td>
                                <input className="form-check-input" type="radio" name={resource} id="flexRadioDefault2" value={2}{...(permissions[resource]==2?{checked:'true'}:{})} onChange={handleChangePermission}></input>
                              </td>
                              <td>
                                <input className="form-check-input" type="radio" name={resource} id="flexRadioDefault2" value={1}{...(permissions[resource]==1?{checked:'true'}:{})} onChange={handleChangePermission}></input>
                              </td>
                            </tr>
                          );
                        })
                      }

                    </tbody>
                  </table>
                  <div className="modal-footer flex-row align-items-stretch justify-content-center w-100 gap-2 pb-3 border-top-0">
                    <button type="button" className="btn  btn-primary" onClick={handleSave}>Save</button>
                    <button type="button" className="btn  btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                  </form>
                </div>
                

              }
               


              </div>
       
          
          </div>
          
        </div>
      </div>
    </div>
  </div>
}