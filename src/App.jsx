import "./App.css"
import Dashboard from "./components/Dashboard" 
import Example from "./components/Header"
import Hero from "./components/Hero"
 const App = () => {
   return (
    <div className="container mx-auto">
    <h2 className="text-red-400">Welcome</h2>
    <Example/>
    <Hero/>
    <Dashboard/>
    </div>
   )
 }
 
 export default App