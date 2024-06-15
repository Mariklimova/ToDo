import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { iTask } from "../../Interfaces";


function Home() {

    const [task, setTask] = useState<iTask[]>([]);
    const inp = useRef<HTMLInputElement>(null)

    const deleteItem = (id: number) => setTask(task.filter((el) => el.id !== id));
    const addItem = () => setTask([...task, { id: Math.floor(Math.random() * 999), todo: inp.current?.value, completed: false, userId: 152 }]);
    const getItems = async () => {
        const response = await axios.get('https://dummyjson.com/todos');
        setTask(response.data.todos)
    }

    useEffect(() => {
        getItems()
    }, [])

    return <>

        {task.map((el:iTask, i:number) => <div key={i}>{el.todo}<button onClick={() => deleteItem(el.id)}>del</button></div>)}

        <input type="text" ref={inp} />
        <button onClick={addItem}>Add</button>
    </>


}

export default Home;