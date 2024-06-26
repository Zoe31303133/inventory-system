import React,{Component, useEffect, useRef, useState} from 'react';
// import '@/drag_list';

class Machine{
    constructor(id, state){
        this.id = id;
        this.state = state;
        this.tasks = [];
        this.endTime = 0;
    }

    pushTask(task){
        this.tasks.push(task);
    }

    insertTask(task, index){

    }

    removeTask(index){
        this.tasks.splice(index,1);
    }
}

class Task{
    constructor(productName, duration, type){
        this.productName = productName;
        this.duration = duration;
        this.type = type;
    }
}

class TaskSchedule{
    constructor(){
        this.machineList = {};
    }

    addMachine(machine){
        this.machineList[machine.id]=machine;
    }

    removeMachine(machineID){
        delete this.machineList[machineID];
    }
}

export default function ProcssSchedule(){

    const [editMode, setEditMode] = useState(false);
    const [taskSchedule, setTaskSchedule]= useState(); 
    const dragOut = useRef();
    const dragIn = useRef();

    const priority = ['蛋糕','餅乾'];

    // sorting by priority and handle -1 return when type not be found in priority list.
    function task_balance(arr, k){
        var result = Array(k).fill().map(()=>[]);
        var sum = Array(k).fill("00:00");

        arr.sort((a,b)=>
        (priority.indexOf(a.type)==-1 ? priority.length:priority.indexOf(a.type)) -
        (priority.indexOf(b.type)==-1 ? priority.length:priority.indexOf(b.type))
    )

        arr.sort((a,b)=>b.duration>a.duration?true:false);
        console.log((arr));
        
        arr.forEach((a)=>{
          var minSum = sum.reduce((a,b)=>{return a<b?a:b});
          var index = sum.indexOf(minSum);

          sum[index]= new Time(sum[index]).add(new Time(a.duration));
          result[index].push(a);

        })
        
        result.forEach((schedule)=>{
            schedule.sort((a,b)=>
                    (priority.indexOf(a.type)==-1 ? priority.length:priority.indexOf(a.type)) -
                    (priority.indexOf(b.type)==-1 ? priority.length:priority.indexOf(b.type))
                )
        })

        return result;
        }

    // DB date
    const DB_machines = [
        {id: "001", state:"aviliable"},
        {id: "002", state:"aviliable"},
        {id: "003", state:"aviliable"},
        {id: "004", state:"unaviliable"}
    ] ;

    const DB_tasks = [
        {productName:"巧克力蛋糕", type:"蛋糕", duration:"03:00"},
        {productName:"芋頭蛋糕", type:"蛋糕", duration:"02:00"},
        {productName:"咖啡蛋糕", type:"蛋糕", duration:"01:00"},
        {productName:"草莓蛋糕", type:"蛋糕", duration:"01:00"},
        {productName:"香草餅乾", type:"餅乾", duration:"01:00"},
        {productName:"紅茶餅乾", type:"餅乾", duration:"01:00"},
        {productName:"抹茶餅乾", type:"餅乾", duration:"01:00"},
        {productName:"巧克力餅乾", type:"餅乾", duration:"01:00"},
        {productName:"咖啡餅乾", type:"餅乾", duration:"02:00"},
    
    ];

    useEffect(()=>{
        
        let taskSchedule = new TaskSchedule();

        DB_machines.forEach((machine)=>{
            var newMachine = new Machine(machine.id, machine.state);
            taskSchedule.addMachine(newMachine);
        })

        let aviliable_machines =  DB_machines.filter((machine)=>{return machine.state=="aviliable"});
        let aviliable_machine_num = aviliable_machines.length;
        
        console.log(aviliable_machine_num);
        let t =task_balance(DB_tasks,aviliable_machine_num);


        for(let i =0; i<aviliable_machine_num; i++)
        {
            let machineID = aviliable_machines[i].id;
            let machine = taskSchedule.machineList[machineID];
            machine.tasks = t[i];
        }

        setTaskSchedule(taskSchedule);
        
    }, [])

    const handle_save = function(){
        alert("請問確定要儲存嗎？")
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

     function addProcess(event, machineID){

        event.preventDefault();

        var inputs = new FormData(event.target);
        inputs = Object.fromEntries(inputs.entries());

        var newTask = new Task(inputs.productName, inputs.duration);

        var schedule = {...taskSchedule};
        schedule.machineList[machineID].pushTask(newTask);
    
        setTaskSchedule(schedule);
    
        
     }

     function deleteProcess(machineID, index){

        
            var schedule = {...taskSchedule};
            schedule.machineList[machineID].removeTask(index);
            setTaskSchedule(schedule);
        

     }

     function dragStart(machineID, index){
        console.log(machineID,index);
        dragOut.current = {machineID:machineID, index:index};
     }

     function dragEnter(e, machineID, index){
        e.stopPropagation();
        dragIn.current = {machineID:machineID, index:index};
     }

     function dragEnd(){
        var schedule = {...taskSchedule};
        var remove_taskList = schedule.machineList[dragOut.current.machineID].tasks;
        var insert_taskList = schedule.machineList[dragIn.current.machineID].tasks;
        var draggedTarget = remove_taskList.splice(dragOut.current.index, 1)[0];

        if(dragIn.current.index==-1)
        {
            insert_taskList.push(draggedTarget)
        }
        else if(dragIn.current.index>-1)
        {
            insert_taskList.splice(dragIn.current.index, 0, draggedTarget);
        }
        
        setTaskSchedule(schedule);
     }

     function dragOnSpace(machineID){
        dragIn.current = {machineID:machineID, index:-1};
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
                <div class="d-flex gap-5">
                <div class="d-flex gap-3"> 
                    <h1 class="h2">日機台排程</h1>   
                    <span>
                    <input type="date" class="form-control" name="production_query_date" onChange={query}/>
                    </span>
                </div>   
                {
                    editMode?
                    (<div className='d-flex gap-3'>
                        <button className="btn btn-success" onClick={handle_save}>儲存</button>
                        <button className="btn btn-danger" onClick={()=>{setEditMode(false)}}>取消</button>
                     </div>
                    ):
                    (<button className="btn btn-secondary" onClick={()=>{setEditMode(true)}}>編輯</button>)
                }
                    
                </div>   
            </div>
      
        <div>
           
            <div className="d-flex gap-3 small mt-3">

                {taskSchedule && Object.keys(taskSchedule.machineList).map((machineID)=>{
                    
                    var machine = taskSchedule.machineList[machineID];
                    var tasks = machine.tasks;
                    var startTime = new Time("08:00");

                    var machineName = (
                        <h5 className='text-center'>機台ID: {machineID}</h5>
                    )

                    if(machine.state == "unaviliable")
                    {
                        return <div className="schedule" id={"schedule"+machine.machineID} machineID={machine.machineID} style={{"width": "350px", "font-size": "14px"}}>
                                    {machineName}
                                    <div className='text-center bg-danger-subtle text-danger'>停用</div>
                               </div>
                    }


                    var scheduleHeader = (
                        <div className='border rounded-2 px-3 py-2 text-white' style={{"display": "flex", backgroundColor:editMode?"#CD853F":"gray"}}>
                        <div style={{"flex": "2"}}>商品名稱</div>
                        <div style={{"flex": "1"}}>時長</div>
                        <div style={{"flex": "1"}}>結束時間</div>
                    </div>
                    )

                    var scheduleRow = tasks.map((task, index)=>{
                        var taskTime = stringToTime(task.duration);
                        startTime.hour +=  taskTime.hour;
                        startTime.min +=  taskTime.min;

                        return <div index={index} 
                        className="ui-state-default border rounded-2 px-3 py-1" 
                        style={{"display": "flex", cursor:editMode&&"move", backgroundColor:editMode&&"#FFF8DC"}} 
                        draggable={editMode}
                        onDragStart={e=>dragStart(machineID, index)}
                        onDragEnter={e=>dragEnter(e, machineID, index)} 
                        onDragEnd={dragEnd}>
                        
                            <div style={{"flex": "2"}}>{task.productName}</div>
                            <div className="duration" style={{"flex": "1"}}>{task.duration}</div>
                            <div className="finish"  style={{"flex": "1"}}>{startTime.toString}</div>
                            {/* <button className="btn btn-sm border-danger-subtle text-danger" onClick={(e)=>{deleteProcess(machineID, index)}}>刪除</button> */}
                        </div>
                    })
                   
                    var scheduleTable = (
                        <div className=" gap-1" style={{"display": "flex", "flex-direction":"column", "min-height": "150px"}}
                        onDragEnter={(e)=>dragOnSpace(machineID)}>
                        {scheduleHeader}
                        {scheduleRow}
                        </div>
                    )                    

                    return <div className="schedule" id={"schedule"+machine.machineID} machineID={machine.machineID} style={{"width": "350px", "font-size": "14px"}}>
                        {machineName}
                        {scheduleTable}
                        <form onSubmit={(e)=>{addProcess(e, machineID)}}>
                        </form>
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


   add(time)
   {
       this.hour+= time.hour; this.min+=time.min;
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
