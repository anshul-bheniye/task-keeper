

export const AddTask = ({addTasks, setAddTasks, editTask, setEditTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const time = new Date();

    if(editTask.id){
      const checkFromList = addTasks.map((addTask)=>(
        addTask.id === editTask.id ? {id:editTask.id, name: editTask.name, date:`${time.toLocaleDateString()} — ${time.toLocaleTimeString()}`} : addTask
      ))
      setAddTasks(checkFromList)
      setEditTask({})
    }else{
      const makeTaskObj = {
        id: time.getMilliseconds(),
        name: e.target.input.value,
        date: `${time.toLocaleDateString()} — ${time.toLocaleTimeString()}`
      }
      setAddTasks([...addTasks, makeTaskObj]);
      setEditTask({})
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      name='input' 
      placeholder='Enter the task'
      autoComplete='off'
      maxLength={18}
      value={editTask.name || ''}
      onChange={(e)=> setEditTask({...editTask, name:e.target.value})}
      />
      <button type="submit">ADD</button>
      </form>
    </div>
  )
}
