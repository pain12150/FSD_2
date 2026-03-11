import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from 'react-router-dom'
import './App.css'

const courses = [
  {
    id: 'cs101',
    title: 'Introduction to Computer Science',
    description: 'Basics of programming, algorithms, and problem-solving with Python.',
    instructor: 'Prof. Alice Smith',
    credits: 4,
    duration: '12 weeks',
  },
  {
    id: 'math201',
    title: 'Linear Algebra',
    description: 'Matrix theory, vector spaces, eigenvalues, and applications.',
    instructor: 'Dr. Juan Martinez',
    credits: 3,
    duration: '10 weeks',
  },
  {
    id: 'eng301',
    title: 'English Literature',
    description: 'Study of major works from Shakespeare to modern prose.',
    instructor: 'Dr. Laura Chong',
    credits: 3,
    duration: '10 weeks',
  },
  {
    id: 'hist150',
    title: 'World History',
    description: 'Global civilizations, revolutions, and cultural change.',
    instructor: 'Prof. Omar Khan',
    credits: 3,
    duration: '12 weeks',
  },
  {
    id: 'bio110',
    title: 'General Biology',
    description: 'Cell structure, genetics, evolution, and ecology.',
    instructor: 'Dr. Sara Lee',
    credits: 4,
    duration: '12 weeks',
  },
]

function Home() {
  return (
    <div className="page">
      <h1>University Portal</h1>
      <p>Welcome to the student portal. Navigate using the menu above.</p>
    </div>
  )
}

function Courses() {
  return (
    <div className="page">
      <h2>Courses</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`} className="course-link">
              <strong>{course.title}</strong>
            </Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CourseDetail() {
  const { courseId } = useParams()
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    return (
      <div className="page">
        <h2>Course not found</h2>
        <p>No course was found with id "{courseId}".</p>
        <Link to="/courses">Back to courses</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <ul>
        <li>
          <strong>Instructor:</strong> {course.instructor}
        </li>
        <li>
          <strong>Credits:</strong> {course.credits}
        </li>
        <li>
          <strong>Duration:</strong> {course.duration}
        </li>
      </ul>
      <Link to="/courses">Back to courses</Link>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <header className="topnav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/courses" className="nav-item">
          Courses
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
