import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditExpense = ({ expense, editExpense }) => {
    const [updatedExpense, setUpdatedExpense] = useState(expense);
    const navigate = useNavigate();

    useEffect(() => {
        if (expense) {
            setUpdatedExpense(expense);
        }
    }, [expense]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedExpense({ ...updatedExpense, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editExpense(updatedExpense);
        navigate('/list');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Expense</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Expense</label>
                        <input
                            type="text"
                            name="Expense"
                            value={updatedExpense.Expense}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Amount</label>
                        <input
                            type="number"
                            name="Amount"
                            value={updatedExpense.Amount}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="date"
                            name="Date"
                            value={updatedExpense.Date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                        Update Expense
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditExpense;
