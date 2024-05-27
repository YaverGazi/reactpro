import React, { useState,useRef } from 'react';

function Getstart() {
    const [showForm, setShowForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef(null);
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Tarayıcının varsayılan davranışını engelle
        // Form işlemlerini gerçekleştir
        console.log("Username:", username);
        console.log("Password:", password);
        // Verileri sunucuya gönderme veya başka bir işlem yapma
        setShowForm(false); // Form submit olduğunda animasyonu kapat
    };

    const handleFormToggle = () => {
        setShowForm(prevState => !prevState);
    };

    return (
        <>
            <div className='py-4'>
              <button className=' lg:flex items-center bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded py-2 px-4 hover:text-white ml-2 ' onClick={handleFormToggle}><span>Get Start</span></button>
            </div>
            
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-around bg-white ">
                    <div className="bg-white p-8 rounded shadow-lg w-[600px]">
                        <h2 className="text-2xl font-bold mb-4">Log in</h2>
                        <form ref={formRef} onSubmit={handleSubmit} className=''>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">username:</label>
                                <input type="text" id="name" name="name" value={username} onChange={handleUsernameChange}  className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">password:</label>
                                <input type="password" id="password" name="password"  value={password} onChange={handlePasswordChange} className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                          
                            <div className="flex justify-end">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                            </div>
                        </form>
                    </div>
               
                </div>
            )}
        </>
    );
}

export default Getstart;
