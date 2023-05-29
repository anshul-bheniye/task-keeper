
export const ShowTask = ({addTasks, setAddTasks, editTask, setEditTask}) => {
  const handleEdit = (id) => {
    const searchTaskIdFromList = addTasks.find((addTask)=> addTask.id === id);
    setEditTask(searchTaskIdFromList)
  }


  const handleDelete = (id) => {
    const keepOnEqual = addTasks.filter((addTask)=> addTask.id !== id);
    setAddTasks(keepOnEqual);
  }

  return (
    <div className='showTask'>
      <div className='container-head'>
        <p className='make-btn'  onClick= { ()=>{ setAddTasks('') } } >Clear All</p>
        <p>{addTasks.length}</p>
      </div>
      <ul className='container-body'>
        {addTasks && addTasks.map((addTask)=>(
          <li key={addTask.id}>
            <div className='group'>
                <span className='name'>{addTask.name}</span>
                <div className='icon'>
                  <i onClick={() => handleEdit(addTask.id)} className='bi bi-pencil-square'></i>
                  <i onClick={() => handleDelete(addTask.id)} className='bi bi-trash'></i>
                </div>
            </div>
            <small className='time'>{addTask.date}</small>
        </li>
        ))}
      </ul>
    </div>
  )
}
