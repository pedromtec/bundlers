import { TaskApp } from "./components/TaskApp";

const App = () => {
    return <div className='app'><TaskApp /></div>
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)