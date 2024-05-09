import axios from "axios"
import {useState} from 'react';

export default function EditProdutionModal({onClose}){

    const modalBackground = {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1050,
    }

    const style_list = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '5px',
      padding: '2px 5px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    }

    
    const style_input = {
      width: '50px',
      height: '20px',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    }

    return open &&
        (<div className="bg-black  bg-opacity-50 h-100 w-100"  style={modalBackground}>
        <div class="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
    <div class="modal-dialog modal-dialog-centered" role="document" >
      <div class="modal-content rounded-4 shadow" style={{width: "2000px"}}>
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5">Create Form</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
        </div>
        <div class="modal-body p-5 py-0">
          <div className="d-flex gap-3">

            <select class="form-select" size="20">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <span>{">"}</span>

            <div className="container" style={{fontSize: "12px", width:"500px"}}>
            <div style={style_list}>
                  <div>Item 3</div>
                  <div style={{display: "flex", gap: 3}}>
                  <input type="text" maxLength="3" style={style_input} />
                  <button>del</button>
                  </div>
                </div>
              <div style={style_list}>
                  <div>Item 3</div>
                  <div style={{display: "flex", gap: 3}}>
                  <input type="text" maxLength="3" style={style_input} />
                  <button>del</button>
                  </div>
                </div>
                <div style={style_list}>
                  <div>Item 3</div>
                  <div style={{display: "flex", gap: 3}}>
                  <input type="text" maxLength="3" style={style_input} />
                  <button>del</button>
                  </div>
                </div>
              {/* 添加更多的列表項 */}
            </div>

          </div>


        </div>
        <div class="modal-footer flex-row align-items-stretch justify-content-center w-100 gap-2 pb-3 border-top-0">
          <button type="button" class="btn  btn-primary">Save</button>
          <button type="button" class="btn  btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  </div>
  </div>)


};