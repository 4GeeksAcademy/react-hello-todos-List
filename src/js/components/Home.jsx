import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea,setTarea] = useState("");
	const [listaTarea,setListaTarea]=useState([]);

	function handleTareasAñadir (event){
		event.preventDefault();
		let tareaActual = tarea;
		setListaTarea(prev=>[...prev,tareaActual])
	}

	function handleTareasBorrar (indexItem){
		setListaTarea(prev=>prev.filter((prev,index)=>index!==indexItem));

	}


	return (
		<div className="text-center m-5">
			<form class="mb-3" onSubmit={(e)=>handleTareasAñadir(e)}>
				<label 
				for="tareas" 
				class="form-label"
				
				>Tareas</label>
				<input 
				type="text" 
				class="form-control" 
				id="tareas" 
				placeholder="Sacar la basura"
				value={tarea}
				onChange={(e)=>setTarea(e.target.value)}
				
				/>
			<div class="col-auto">
    			<button 
				type="submit" 
				class="btn btn-primary mb-3"
				>Confirmar Tarea</button>
  			</div>			
				</form>
				
				{
					listaTarea.map((item,index)=>{
						return(
							<div className="mb-3">
								<span>{item}</span>
								<button className="btn btn-primary" onClick={()=>handleTareasBorrar(index)}>Borrar tarea</button>
							</div>
						)
					}
				)
				}
			
		</div>
	);
};

export default Home;