import './App.css'

const Card = ({ title }) => {
  return (
    <div className='card' >
      <h2>{title}</h2>
    </div>
  )
}

function App() {

  return (
    <div className="card-container">
      <Card title="Star War" />
      <Card title="Avatar" />
      <Card title="The Lion king" />
    </div>
  )
}

export default App
