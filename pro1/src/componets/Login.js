// import React, { useState } from 'react';

// function Login() {
//     const [showForm, setShowForm] = useState(false);

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     return (
//         <>
//             <div className='py-4'>
//               <button className='hidden lg:flex items-center bg-purple-100 hover:bg-purple-700 transition-all duration-300 rounded py-2 px-4 text-purple-800 hover:text-white  ml-52' onClick={toggleForm}><span>Login</span></button>
//             </div>
            
//             {showForm && (
//                 <div className="fixed top-0 left-0 w-[1300px] h-full flex items-center justify-around bg-white ">
//                     <div className="bg-white p-8 rounded shadow-lg w-[600px]">
//                         <h2 className="text-2xl font-bold mb-4">Log in</h2>
//                         <form className=''>
//                             <div className="mb-4">
//                                 <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">username:</label>
//                                 <input type="text" id="name" name="name" className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">password:</label>
//                                 <input type="email" id="email" name="email" className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
                          
//                             <div className="flex justify-end">
//                                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='w-[400px] mr-52'>
//                       <h1 className='text-purple-700  text-4xl font-bold mb-4'>Join us</h1>
//                       <h2>We are building the new Internet</h2>
// <p>We will happily arrange a demonstration of our solutions, tailored according to your use-case.</p></div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Login;
// 
import React, { useState, useRef } from 'react';

function Login() {
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
                <button className='hidden lg:flex items-center bg-purple-100 hover:bg-purple-700 transition-all duration-300 rounded py-2 px-4 text-purple-800 hover:text-white  ml-52' onClick={handleFormToggle}><span>Login</span></button>
            </div>
            
            {showForm && (
                <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-white bg-opacity-75 ">
                    <div className="bg-white p-8 rounded shadow-lg w-[600px]">
                        <h2 className="text-2xl font-bold mb-4">Log in</h2>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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

export default Login;

// import React, { useState, useEffect } from 'react';

// function Login() {
//     const [showForm, setShowForm] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault(); // Tarayıcının varsayılan davranışını engelle
//         // Form işlemlerini gerçekleştir
//         console.log("Username:", username);
//         console.log("Password:", password);
//         // Verileri sunucuya gönderme veya başka bir işlem yapma
//     };

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (!e.target.closest('.fixed')) {
//                 setShowForm(false);
//             }
//         };
    
//         window.addEventListener('click', handleClickOutside);
    
//         return () => {
//             window.removeEventListener('click', handleClickOutside);
//         };
//     }, [showForm]); // showForm bağımlılığını ekleyelim
    

//     return (
//         <>
//             <div className='py-4'>
//                 <button className='hidden lg:flex items-center bg-purple-100 hover:bg-purple-700 transition-all duration-300 rounded py-2 px-4 text-purple-800 hover:text-white  ml-52' onClick={toggleForm}><span>Login</span></button>
//             </div>
            
//             {showForm && (
//                 <div className="fixed top-0 left-0 w-[1300px] h-full flex items-center justify-around bg-white ">
//                     <div className="bg-white p-8 rounded shadow-lg w-[600px]">
//                         <h2 className="text-2xl font-bold mb-4">Log in</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
//                                 <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
//                                 <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='w-[400px] mr-52'>
//                         <h1 className='text-purple-700  text-4xl font-bold mb-4'>Join us</h1>
//                         <h2>We are building the new Internet</h2>
//                         <p>We will happily arrange a demonstration of our solutions, tailored according to your use-case.</p>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Login;
