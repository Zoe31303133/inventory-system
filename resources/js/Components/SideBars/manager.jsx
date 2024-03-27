import '../../../../resources/bootstrap_module/sidebars/sidebars.css';
import '../../../../resources/bootstrap_module/assets/dist/js/bootstrap.bundle.min.js';

export default function manager(){
    return(
        <div className="d-flex flex-column flex-shrink-0 p-5 bg-body-tertiary" style={{width: "280px"}}>
        <ul className="nav nav-pills flex-column mb-auto gap-3">
            <li className="mb-1">
                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  職員管理
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="/dashboard/#/employee" className="link-body-emphasis d-inline-flex text-decoration-none rounded">員工列表</a></li>
                    <li><a href="/dashboard/#/role" className="link-body-emphasis d-inline-flex text-decoration-none rounded">職位權限</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  庫存管理
                </button>
                <div className="collapse" id="dashboard-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="/dashboard/#/product" className="link-body-emphasis d-inline-flex text-decoration-none rounded">商品列表</a></li>
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">商品庫存</a></li>
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">原物料庫存</a></li>
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">原物料庫存</a></li>
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">缺貨統計</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                  銷貨管理
                </button>
                <div className="collapse" id="orders-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">訂單列表</a></li>
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">退貨回報</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#schedule-collapse" aria-expanded="false">
                  製程管理
                </button>
                <div className="collapse" id="schedule-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">本日製程</a></li>
                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">本週製程</a></li>
                  </ul>
                </div>
              </li>
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>Current User</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        <div></div>
      </div>
    )
}