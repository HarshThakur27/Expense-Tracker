
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const List = ({ expenses, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (expense) => {
        onEdit(expense);
        navigate("/edit");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Expense List
                </h1>
                {expenses.length === 0 ? (
                    <p className="text-gray-600 text-center">No data available</p>
                ) : (
                    <div className="space-y-4">
                        {expenses.map((expense, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <p className="text-gray-700">
                                        <strong>Expense:</strong> {expense.Expense}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Amount:</strong> ${expense.Amount}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Date:</strong> {expense.Date}
                                    </p>
                                </div>
                                <div className="flex space-x-2">
                                    <button 
                                        onClick={() => handleEdit(expense)}
                                        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => onDelete(expense.id)}
                                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="text-center mt-6">
                    <Link to="/create">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                            Add More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default List;

