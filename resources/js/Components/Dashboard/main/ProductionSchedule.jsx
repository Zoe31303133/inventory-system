import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import  EditProdutionModal from '@/Components/EditProdutionModal';
import  DailyProduction from '@/Components/Dashboard/main/Production/DailyProduction';

export default function ProductionSchedule(){

    const [edit_mode, setEditMode] = useState(false);
    const [week_schedule,setWeekSchedule] = useState([]);
    

    useEffect(()=>{

        //axios fetch week_schedule
        var week_schedule = [
            {
                date: "2024/05/05",
                product_shcedule : 
                [
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    }
                ]
            },
            {
                date: "2024/05/05",
                product_shcedule : 
                [
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    }
                ]
            },
            {
                date: "2024/05/05",
                product_shcedule : 
                [
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    }
                ]
            },{
                date: "2024/05/05",
                product_shcedule : 
                [
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    }
                ]
            },{
                date: "2024/05/05",
                product_shcedule : 
                [
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    }
                ]
            },{
                date: "2024/05/05",
                product_shcedule : 
                [
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    }
                ]
            },{
                date: "2024/05/05",
                product_shcedule : 
                [
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    },
                    {
                        product_name :"A",
                        quantity : 20
                    }
                ]
            }
        ];

        setWeekSchedule(week_schedule);
  
    }, [])
    
    const query = function(){
        
    }

    const open_edit_form = function(){
        setEditMode(true);
    }

    const close_edit_form = function(){
        setEditMode(false);
    }


    return(
    <div className="col-md-9  ms-sm-auto col-lg-10 px-md-4 overflow-scroll">
        {edit_mode && <EditProdutionModal onClose={close_edit_form}></EditProdutionModal>}  
        <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mt-5 mb-3 border-bottom">
            <div class="d-flex gap-3"> 
                <h1 class="h2">週生產量計畫</h1>   
                <span>
                <input type="date" class="form-control" name="production_query_date" onChange={query}/>
                </span>
            </div>   
        </div>
        
        <div className="d-flex gap-3 small mt-3">

        {
            week_schedule.map((day_schedule)=>{
                return <DailyProduction onEditBtnClick={open_edit_form}></DailyProduction>
            })
        }

        </div>
    </div>)
}