import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import '../styles/App.css'

import Main from './Main'
import Categories from './Categories'
import Category from './Category'
import Recipe from './Recipe'


function App() {
	return (
		<Router>
		<div>
			<div className='button'>
				<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/categories'}>Categories</NavLink></button>
				<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/category'}>Category</NavLink></button>
				<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/recipe'}>Recipe</NavLink></button>
			</div>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route exact path={'/categories'} element={<Categories />} />
					<Route exact path={'/category'} element={<Category />} />
					<Route exact path={'/recipe'} element={<Recipe />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
