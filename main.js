import { TaskApp } from "./components/TaskApp.js";

const App = () => {
    return React.createElement('div', {className: 'app'}, React.createElement(TaskApp));
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(React.createElement(App))