import { useState } from 'react'

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'fullstack', description: 'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.' },
  { id: 2, title: 'Weather dashboard',  category: 'frontend',    description: 'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.' },
  { id: 3, title: 'Task management app',  category: 'webapp',    description: 'Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.' },
  { id: 4, title: 'Creative portfolio',  category: 'design',    description: 'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.' }
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >All projects</button>
        <button
          className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('frontend')}
        >Frontend</button>
        <button
          className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setActiveFilter('fullstack')}
        >Fullstack</button>
        <button
          className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
          onClick={() => setActiveFilter('design')}
        >Design</button>
        <button
          className={`filter-btn ${activeFilter === 'webapp' ? 'active' : ''}`}
          onClick={() => setActiveFilter('webapp')}
        >Web app</button>
      </div>

      <div className="projects-grid">
        {visibleProjects.map(p => (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects