import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [users, setUsers] = useState([]);

    const validate = () => {
        if (name.trim().length < 3) {
            alert("Ism 3 ta belgidan uzunroq bo'lishi kerak!");
            return false;
        }
        if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(email)) {
            alert("Email noto'g'ri formatda kiritilgan!");
            return false;
        }
        if (!age || age <= 0) {
            alert("Yosh 0 dan katta bo'lishi kerak!");
            return false;
        }
        return true;
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const newUser = { id: Date.now(), email, name, age };
        setUsers([...users, newUser]);

        setEmail("");
        setName("");
        setAge("");
    };

    const handleDelete = (id) => {
        if (window.confirm("Rostan ham shu foydalanuvchini o'chirasizmi?")) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    return (
        <div className="max-w-[500px] mx-auto border shadow-md rounded-md mt-11 p-5">
            <form className="text-center bg-blue-700" onSubmit={handleSave}>
                <div>
                    <input
                        className="w-[90%] rounded-md mt-5 p-3 outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Ism..."
                    />
                </div>
                <div>
                    <input
                        className="w-[90%] rounded-md mt-5 p-3 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email..."
                    />
                </div>
                <div>
                    <input
                        className="w-[90%] rounded-md mt-5 p-3 outline-none"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        placeholder="Yosh..."
                    />
                </div>
                <button
                    className="w-[90%] bg-blue-500 mb-11 text-white py-2 px-4 rounded-md mt-5 hover:bg-blue-600"
                    type="submit"
                >
                    Saqlash
                </button>
            </form>
            <h2 className="text-xl text-white mt-5">Foydalanuvchilar ro'yxati:</h2>
            <ul className="mt-5 space-y-3">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="p-3 bg-white rounded-md flex justify-between items-center"
                    >
                        <div>
                            <p>
                                <span className='text-black font-bold'>Ism:</span> {user.name}
                            </p>
                            <p>
                                <span className='text-black font-bold'>Email:</span> {user.email}
                            </p>
                            <p>
                                <span className='text-black font-bold'>Yosh:</span> {user.age}
                            </p>
                        </div>
                        <button
                            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                            onClick={() => handleDelete(user.id)}
                        >
                            O'chirish
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Form;
