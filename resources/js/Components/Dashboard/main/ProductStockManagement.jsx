export default function ProductManegement(){
    return <div className="d-flex" style={{"flex":"1"}}>
    <div className="px-md-4 w-100 overflow-y-hidden">
      <div className="d-flex  justify-content-between  flex-md-nowrap pt-3 pb-2 mt-5 mb-3 border-bottom">
            <h1 className="h2">商品庫存總覽</h1>   
            <div className="align-self-end">
              <button type="button " className="btn btn-sm btn-outline-primary me-2 gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                </svg>
                <span>編輯</span>
              </button>
              <button type="button " className="btn btn-sm btn-outline-danger me-2 gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
                <span>庫存異狀回報</span></button>
            </div>
      </div>
      <div className="d-flex justify-content-center h-75 ">
        <div className="d-flex gap-3 small mt-3 w-75 justify-content-center ">
          
          <div className="search-bar d-flex flex-column " style={{"width": "25em"}}>
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
                  <input className="" type="text" name="manager" id="" value="" style={{"width": "5em"}} placeholder="最小值"></input>
                </div>
                <span>-</span>
                <div>
                  <input className="" type="text" name="manager" id="" value="" style={{"width": "5em"}} placeholder="最大值"></input>
                </div>
        
              </div>
              <div className="align-self-end">
                <button className="btn btn-sm border">搜尋</button>
              </div>
          </div>
          </div>
          
          <div className="d-flex flex-column align-items-center" sstyle={{"width": "40em"}}>
            
            <div className="d-flex h-100 w-100" >
              <table className="d-block overflow-y-auto  table table-striped table-fixed table-sm align-middle text-center" style={{"table-layout": "fixed", "word-wrap": "break-word", "height": "100%"}}>
                <thead className="position-sticky top-0 z-2" >
                  <tr className="">
                    <th style={{"width": "20%"}}>ID
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                      </svg>
                    </th>
                    <th style={{"width": "20%"}}>商品名稱</th>
                    <th style={{"width": "20%"}}>庫存量
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                      </svg>
                    </th>
                    <th style={{"width": "20%"}}>本日出貨後庫存量</th>
                    <th style={{"width": "20%"}}>單位</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr><tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞雞胸肉雞胸肉雞胸肉胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>雞胸肉</td>
                    <td>200</td>
                    <td>100</td>
                    <td>包</td>
                  </tr>
                </tbody>
              </table>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
}