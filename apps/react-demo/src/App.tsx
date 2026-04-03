import { MyComponent } from '@mediq/react-library'
import './App.css'

function App() {
  return (
    <main style={{
      maxWidth: '720px',
      margin: '0 auto',
      padding: '3rem 1.25rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>React Demo with Stencil Wrapper</h1>
      <p>
        This component is authored in Stencil and consumed through the generated
        React wrapper package.
      </p>
      <MyComponent first="Mediq" middle="UI" last="Team" />
    </main>
  )
}

export default App
