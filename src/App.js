import React, { useState } from 'react';
import {  Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import List from './components/List';
import EditExpense from './components/EditExpense';
import Home from './components/Home';
function App() {
    const [expenses, setExpenses] = useState([]);
    const [currentExpense, setCurrentExpense] = useState(null);

    const addExpense = (expense) => {
        setExpenses([...expenses, { ...expense, id: Date.now() }]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const editExpense = (updatedExpense) => {
        setExpenses(expenses.map(expense => (expense.id === updatedExpense.id ? updatedExpense : expense)));
    };

    return (
        <div>
            <nav className="bg-blue-900 p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white">Home</Link>
                    </li>
                    <li>
                        <Link to="/create" className="text-white">Create</Link>
                    </li>
                    <li>
                        <Link to="/list" className="text-white">List</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/create" element={<Create addExpense={addExpense} />} />
                <Route path="/list" element={<List expenses={expenses} onEdit={setCurrentExpense} onDelete={deleteExpense} />} />
                <Route path="/edit" element={<EditExpense expense={currentExpense} editExpense={editExpense} />} />
            </Routes>
        </div>
            
       
    );
}

export default App;

