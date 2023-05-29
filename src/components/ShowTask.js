
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
    <div>
      <ul>
        {addTasks.map((addTask)=>(
          <li key={addTask.id}>
            <p>
                <span className="name">{addTask.name}</span>
                <span className="time">{addTask.date}</span>
            </p>
            <i onClick={() => handleEdit(addTask.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(addTask.id)} className="bi bi-trash"></i>
        </li>
        ))}
      </ul>
    </div>
  )
}
