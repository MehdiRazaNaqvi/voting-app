import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Vote from "./App"
import Nic from "./nic"

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/voting-app" element={<Nic />} />
                    <Route path="/voting-app/vote" element={<Vote />} />
                </Routes>
            </Router>   
        </div>
    )
}


export default App