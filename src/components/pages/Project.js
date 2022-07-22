import styles from '../pages/Project.module.css'

import {useParams} from 'react-router-dom' // para pegar o id do db
import { useState, useEffect } from 'react'

function Project() {

  const { id } = useParams() // linha 3 aqui

  const [project, setProject] = useState([])

  useEffect(() => {

    // resgatando o projeto do db com id
    fetch(`  http://localhost:50000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json())
    .then((data) => {
      setProject(data)
    })
    .catch((err) => console.log(err))
  }, [id])

  return(
    <div className={styles.project_container}>
      <p>{project.name}</p>
      
    </div>
  )
}

export default Project