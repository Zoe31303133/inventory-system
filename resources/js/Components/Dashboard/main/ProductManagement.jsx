import EditDeleteBtn from "@/Components/EditDeleteBtn.jsx"

export default function ProductManegement(){
    return <div className="col-md-9  ms-sm-auto col-lg-10 px-md-4 overflow-scroll">
    
    <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mt-5 mb-3 border-bottom">
        <div class="d-flex gap-5">
          <h1 class="h2">商品總覽</h1>   
        </div>   
    </div>
    
    <div className="d-flex gap-3 small mt-3">
    <div className="search-bar d-flex flex-column col-auto ">
      <div className="d-flex p-3 justify-content-center bg-dark-subtle rounded-2 mb-2">
        搜尋條件
      </div>
      <div className="d-flex flex-column input-group input-group-sm p-3 gap-3 border border-1 rounded-2 ">
        <div className="search">
          <select className="me-1 p-1">
            <option value="">ID</option>
            <option value="">商品名稱</option>
          </select>
          <input  type="text" name="" id=""></input>
        </div>
        <div className="d-flex filter-role gap-2 ">
          <span>庫存量：</span>
          <div>
            <input className="" type="text" name="manager" id="" value="" style={{"width":"5em"}} placeholder="最小值"></input>
          </div>
          <span>-</span>
          <div>
            <input className="" type="text" name="manager" id="" value="" style={{"width":"5em"}} placeholder="最大值"></input>
          </div>
  
        </div>
        <div className="align-self-end">
          <button className="btn btn-sm border">搜尋</button>
        </div>
    </div>
    </div>
    <div className="d-flex flex-column align-items-center ">
        <button type="button " className="btn btn-sm btn-outline-danger me-2 align-self-end">批量刪除</button>

          <table className="table table-striped table-fixed table-sm align-middle text-center" style={{"table-layout": "fixed", "word-wrap": "break-word"}}>
            <thead>
              <tr>
                <th scope="col" className="col-1">
                  <input className="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"></input>
                  <span>全部選取</span>
                </th>
                <th scope="col" className="col-2">ID
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </th>
                <th scope="col" className="col-2">商品名稱</th>
                <th scope="col" className="col-2">庫存量
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </th>
                <th scope="col" >本日出貨後庫存量</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                </td>
                <td>001</td>
                <td>Zoe</td>
                <td>100</td>
                <td>zoe@gmail.com</td>
                <td>
                  <EditDeleteBtn></EditDeleteBtn>
                </td>
              </tr>

            </tbody>
          </table>
          <nav aria-label="..." className="d-flex justify-content-center">
            <ul className="pagination pt-4">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active">
                <span className="page-link">
                  2
                  <span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
    </div>
   </div> 
   </div>
}