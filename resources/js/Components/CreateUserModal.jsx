import axios from "axios";
import { useState } from "react";

export default function CreateUserModal({role_list, onClose}) {

    const modalBackground = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1050,
    };


    return (
        <div
            className="bg-black  bg-opacity-50 h-100 w-100"
            style={modalBackground}
        >
            <div
                class="modal modal-sheet position-static d-block p-4 py-md-5"
                tabindex="-1"
                role="dialog"
                id="modalSheet"
            >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header border-bottom-0">
                            <h1 class="modal-title fs-5">新增職員</h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div class="modal-body p-5 py-0">
                            <form>
                                <div class="mb-3 ">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        職位
                                    </label>
                                    <select class="form-control form-control-sm">
                                        <option disabled selected>請選擇職位</option>
                                        {role_list &&
                                            role_list.map((role) => {
                                                return (
                                                    <option key={role.id}>
                                                        {role.id}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label
                                        for="exampleInputPassword1"
                                        class="form-label"
                                    >
                                        姓名
                                    </label>
                                    <input
                                        type="password"
                                        class="form-control form-control-sm"
                                        id="exampleInputPassword1"
                                    ></input>
                                </div>
                                <div class="mb-3 ">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        電子信箱
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control form-control-sm"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    ></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer flex-row align-items-stretch justify-content-center w-100 gap-2 pb-3 border-top-0">
                            <button type="button" class="btn  btn-primary">
                                儲存
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
