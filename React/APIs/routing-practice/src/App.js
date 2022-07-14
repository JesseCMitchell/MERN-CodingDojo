import './App.css';
import { Router } from '@reach/router';

import Home from "./components/Home"


function App() {
return (
	<div className="App bg-light p-3 text-center">
	<Router>
		<Home path="/home" />
		<Home path="/:wordOrNumber" />
		<Home path="/:wordOrNumber/:fontColor/:backgroundColor" />
	</Router>    
	</div>
);
}

export default App;
