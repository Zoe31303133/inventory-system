export default function RoleManagement(){
    return   <div className="col-md-9  ms-sm-auto col-lg-10 px-md-4 overflow-scroll">

    <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">職位權限</h1>
          </div>
          <div className="modal-body p-5 py-0 fs-6">
              <div className="mb-3 ">
                <label for="exampleInputEmail1" className="form-label">職位名稱</label>
                <select className="form-control form-control-sm">
                  <option>請選擇職位</option>
                </select>
              </div>

              <div className="mb-3">

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
                    <tr>
                      <td>職員</td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                      </td>
                    </tr>
                    <tr>
                      <td>商品</td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault5" checked></input>
                      </td>
                    </tr>
                    <tr>
                      <td>訂單</td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault4" checked></input>
                      </td>
                      <td>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault5" checked></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
       
          
          </div>
          <div className="modal-footer flex-row align-items-stretch justify-content-center w-100 gap-2 pb-3 border-top-0">
            <button type="button" className="btn  btn-primary">Save</button>
            <button type="button" className="btn  btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}