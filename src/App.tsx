import Collapse from './components/collapse/Collapse.tsx'
import './App.css'

function App() {

  return (
    <Collapse collapsedLabel="Показать текст">
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a officia, sapiente totam impedit expedita nostrum aliquam unde ex facere vitae non soluta illum tempore reiciendis repellendus alias ducimus harum?
      </div>
    </Collapse>
  )
}

export default App
