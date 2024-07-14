

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ addExpense }) => {
    const [formData, setFormData] = useState({
        Expense: "",
        Amount: "",
        Date: "",
    });

    const { Expense, Amount, Date } = formData;
    
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlecreation = (e) => {
        e.preventDefault();
        if (!Expense || !Amount || !Date) {
            alert("Please fill out all fields.");
            return;
        }
        addExpense(formData);
        navigate("/list");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Create Expense
                </h1>
                <form onSubmit={handlecreation} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Enter Expense
                        </label>
                        <input
                            type="text"
                            name="Expense"
                            value={Expense}
                            onChange={handleChange}
                            placeholder="Enter details"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Enter Amount ($)
                        </label>
                        <input
                            type="number"
                            name="Amount"
                            value={Amount}
                            onChange={handleChange}
                            placeholder="Amount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Select Date
                        </label>
                        <input
                            type="date"
                            name="Date"
                            value={Date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;

