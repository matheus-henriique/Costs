
import { useState, useEffect } from 'react'


import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

import styles from '../pages/Projects.module.css'


function Projects() {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)


  useEffect(() => {

    fetch('http://localhost:50000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setProjects(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, [])

  function removeProject(id) {

    fetch(`http://localhost:50000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((resp) => resp.json())
    .then((data) => {
      setProjects(projects.filter((project) => project.id !== id))
    })
    .catch(err => console.log(err))
  }

  return(
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      <div className={styles.projects_card}>
        {projects.length > 0 &&
            projects.map((project) => (  
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
              {!removeLoading && <Loading/>}
              {removeLoading && projects.length === 0 && (
                <p>Não há projetos cadastrados!</p>
              )}
      </div>
    </div>
  )
}

export default Projects 