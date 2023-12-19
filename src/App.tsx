
import './App.css'
import { Header } from './components/Header/Header'

function App () {
  return (
    <div className='App'>
      <Header />
      <b>Hello world</b>
    </div>
  )
}

function InlineLexer(links, options) {
  marked.InlineLexer.call(this, links, options);
}
export default App
