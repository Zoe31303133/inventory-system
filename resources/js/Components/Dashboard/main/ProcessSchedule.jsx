import React,{Component, useEffect, useState} from 'react';
// import '@/drag_list';


export default function ProcssSchedule(){

      const fake_machineSchedule= [
            {
                machineID:"001",
                process:[
                    {
                        productName: "原味雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "義式雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "咖哩雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "台式雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "花雕雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "四川雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    }
                ]
            },
            {
                machineID:"002",
                process:[
                    {
                        productName: "原味雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "義式雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "咖哩雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "台式雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "花雕雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    },
                    {
                        productName: "四川雞胸肉",
                        quantity: 12,
                        unit: "kg",
                        duration: "01:00"
                    }
                ]
            }
                 ];
      const [machineSchedule, setMachineSchedule] = useState(fake_machineSchedule);
      const products = ["原味雞胸肉", "義式雞胸肉", "咖哩雞胸原味肉", "花雕原味雞胸肉", "原味泰式原味雞胸肉"];



      useEffect(()=>{
        console.log(machineSchedule);

        $( function() {
            $( ".schedule" ).sortable({
                items: ".ui-state-default:not(.ui-state-disabled)",
                update: function(event, ui ){
                    
                    var schedule = $(this).closest('.schedule');
                    var processes = $(schedule).find("div .ui-state-default");
                    var order = [];
                    $.each(processes,(key, value)=>{
                        order.push($(value).attr("index"));
                    })
                
                    var machineID = $(this).attr("machineID");
                    var updateSchedule = machineSchedule.map((i)=>{ return {...i}});
                    updateSchedule.forEach(
                        machine => {
                            if(machine.machineID==machineID)
                            {
                                var reorder = [];                
                                order.forEach((value)=>{
                                    reorder.push(machine.process[value]);
                                })
                                machine.process = reorder;
                                
                                return false;
                            }  
                        })
                    $(this).sortable('cancel');
                    setMachineSchedule(updateSchedule);
     
            }
        });

        
        $( "#schedule001 , #schedule002 " ).disableSelection();
        } );
                },[machineSchedule]);

      

     function editToggle() {
        $(".edit").toggle();
        var sortDisable = $(".draggable_table").sortable("option", "disabled");
        $(".draggable_table").sortable(sortDisable?"enable":"disable").disableSelection();  
     }

     function search(e, list){
        $(e.target).autocomplete({
            source: match(list, e.target.value)
        })
     }

     function match(list, keyword){

        var regexStart = new RegExp("^"+keyword+".*");
        var regexInside = new RegExp(".*"+keyword+".*");
        var matchStart = [];
        var matchInside = []
        
        list.forEach(str=>{
            if(regexStart.test(str)){
                matchStart.push(str);
            }
            else if(regexInside.test(str)){
                matchInside.push(str);
            }
        })
        return matchStart.concat(matchInside);
     }

     function addProcess(machineID){

        var schedule = $("#schedule"+machineID);
        var inputDOMs = $(schedule).find("input");

        var inputValue = {};
        $(inputDOMs).each(function(){
            inputValue[this.name]=this.value;
        });


        console.log(formatValidation(inputDOMs));

        var updateData = 
        {
            productName: inputValue["productName"],
            quantity: inputValue["quantity"],
            unit: "kg",
            duration: inputValue["duration"]
        }


        var updateSchedule = [...machineSchedule];
        updateSchedule.forEach(
            machine => {
                if(machine.machineID==machineID)
                {
                    machine.process.push(updateData);
                    return false;
                }  
            }
        )
       setMachineSchedule(updateSchedule);
       $(inputDOMs).val("");
     }

     function deleteProcess(machine, index){
        machine.process.splice(index, 1);
        console.log(machine);
     }

     function selectScheduleByDOM(childDOM)
     {
        return $(childDOM).closest(".schedule");
     }


     function formatValidation(inputDOMs){

        var valid = true;

        $(inputDOMs).each(function(){
                var column = this.name;
                var value = this.value;
                console.log(column);
                switch(column){
                    case "quantity":
                        if(!Number.isInteger(value*1)&&value>0&&value<1000)
                        {
                            $(this).val("");
                            $(this).focus();
                            valid=false;
                        }
                    break;
                }
    
            });
           
            return valid;
     }
    return <div className="col-md-9  ms-sm-auto col-lg-10 px-md-4 overflow-scroll">
             <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mt-5 mb-3 border-bottom">
                <div class="d-flex gap-5 justify-content-between">
                    <h1 class="h2">商品總覽</h1>   
                    <button className="btn btn-success" onClick={editToggle}>編輯</button>
                </div>   
            </div>
      
        <div>
           
            <div className="d-flex gap-3 small mt-3">
                {machineSchedule.map((machine)=>{

                    var startTime = new Time("08:00");

                    var machineName = (
                        <h5 className='text-center'>機台ID: {machine.machineID}</h5>
                    )

                    var scheduleHeader = (
                        <div className='border rounded-2 px-3 py-2 text-white' style={{"display": "flex", "background-color": "gray"}}>
                        <div style={{"flex": "2"}}>商品名稱</div>
                        <div style={{"flex": "1"}}>數量</div>
                        <div style={{"flex": "1"}}>時間</div>
                        <div style={{"flex": "1"}}></div>
                    </div>
                    )

                    var scheduleRow = machine.process.map((process, index)=>{
                        var processTime = stringToTime(process.duration);
                        startTime.hour +=  processTime.hour;
                        startTime.min +=  processTime.min;

                        return <div index={index} className="ui-state-default border rounded-2 px-3 py-1" style={{"display": "flex"}}>
                            <div style={{"flex": "2"}}>{process.productName}</div>
                            <div style={{"flex": "1"}}>{process.quantity+process.unit}</div>
                            <div className="duration" style={{"flex": "1"}}>{process.duration}</div>
                            <div className="finish"  style={{"flex": "1"}}>{startTime.toString}</div>
                            <button onClick={(e)=>{deleteProcess(machine, index)}}>刪</button>
                        </div>
                    })

                    function a(){
                        alert("a")
                    }
                   
                    var scheduleTable = (
                        <div id="sortable1" className="draggable_table gap-1" style={{"display": "flex", "flex-direction":"column"}}>
                        {scheduleHeader}
                        {scheduleRow}
                        </div>
                    )                    

                    var addScheduleInput = (  
                    <div className="edit addInput">
                        <div className="d-flex  mt-2 rounded-2 px-2 py-2" >
                            <div className='px-1' style={{"flex": "2"}}>
                            <input type="text" className='w-100' defaultValue="原味雞胸肉" name="productName" onKeyUp={(e)=>search(e, products)}></input>
                            </div>
                            <div className='px-1' style={{"flex": "1", }}>
                                <input type="text" className='w-100' defaultValue="12" name="quantity"></input>
                            </div>
                            <div className='px-1' style={{"flex": "1" }}>
                                <input type="time" className='w-100' defaultValue="01:00" name="duration"></input>
                            </div>
                        </div>
                    </div>)
                    
                    var addScheduleBtn = (
                        <div className='edit'>
                            <div className="d-flex justify-content-center">
                                <button className=" addBtn btn" onClick={(e)=>{addProcess(machine.machineID)}}>+ 新增</button>
                            </div>
                        </div>
                    )

                    return <div className="schedule" id={"schedule"+machine.machineID} machineID={machine.machineID} style={{"width": "350px", "font-size": "14px"}}>
                        {machineName}
                        {scheduleTable}
                        {addScheduleInput}
                        {addScheduleBtn}
                    </div>
                })}
            </div>
        </div>
    </div>
    
};
class Time
{
   constructor(timeStr){
      this.hour = stringToTime(timeStr).hour;
      this.min = stringToTime(timeStr).min;
   }
   
   get toString(){
       return this.hour.toString().padStart(2,"0") + ":" + this.min.toString().padStart(2,"0")
   }


   add()
   {
       this.hour++; this.min++;
       return this.toString;
   }
}

function stringToTime(string){

    var time =  string.split(":");
    var hour = parseInt(time[0]);
    var min = parseInt(time[1]);


    function hourTestify(hour){
            return Number.isInteger(hour) && hour>=-1 && hour<25;
        }

    function minTestify(min){
        return Number.isInteger(min) && min>=-1 && min<60;
    }

    if(hourTestify(hour))
    {
        var result = {};
        result.hour = hour;

        if(minTestify(min))
        {
            result.min = min; 
        }
    }
    else{
        return undefined;
    }

    return result;
}
