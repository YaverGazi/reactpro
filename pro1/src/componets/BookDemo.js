//  import React, { useState } from 'react';

// function BookDemo() {
//     const [showForm, setShowForm] = useState(false);

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Tarayıcının varsayılan davranışını engelle
//         // Form işlemlerini gerçekleştir
 
//         // Verileri sunucuya gönderme veya başka bir işlem yapma
//     };

//     return (
//         <>
//             <div className='py-4'>
//               <button className='hidden lg:flex items-center bg-purple-900 hover:bg-purple-400 transition-all duration-300 rounded py-2 px-4 text-purple-100 hover:text-white ml-1' onClick={toggleForm}><span>Book Demo</span></button>
//             </div>
            
//             {showForm && (
//                 <div className="fixed top-0 left-0 w-[1300px] h-full flex items-center justify-around bg-white ">
//                     <div className="bg-white p-8 rounded shadow-lg w-[600px]">
//                         <h2 className="text-2xl font-bold mb-4">Book Demo</h2>
//                         <form onSubmit={handleSubmit} className=''>
//                             <div className="mb-2">
//                                 <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
//                                 <input type="text" id="name" name="name" className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
//                                 <input type="text" id="name" name="name" className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
//                                 <input type="email" id="email" name="email" className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
                       
//                             <div className="mb-2">
//                                 <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
//                                 <input type="" id="number" name="number" className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
//                                 <textarea id="message" name="message" rows="4" className="w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
//                             </div>
//                             <div className="flex justify-end mb-16">
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

// export default BookDemo;
import React, { useState, useRef } from 'react';

function BookDemo() {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Tarayıcının varsayılan davranışını engelle
        // Form işlemlerini gerçekleştir
 
        // Verileri sunucuya gönderme veya başka bir işlem yapma

        // Form submit olduğunda animasyonu kapat
        setShowForm(false);
    };

    const handleOutsideClick = (e) => {
        // Formın dışına tıklanıldığında animasyonu kapat
        if (!formRef.current.contains(e.target)) {
            setShowForm(false);
        }
    };

    return (
        <>
            <div className='py-4'>
                <button className='hidden lg:flex items-center bg-purple-900 hover:bg-purple-400 transition-all duration-300 rounded py-2 px-4 text-purple-100 hover:text-white ml-1' onClick={toggleForm}><span>Book Demo</span></button>
            </div>
            
            {showForm && (
                <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-white bg-opacity-75 " onClick={handleOutsideClick}>
                    <div className="bg-white p-8 rounded shadow-lg w-[600px]" ref={formRef}>
                        <h2 className="text-2xl font-bold mb-4">Book Demo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                                <input type="text" id="name" name="name" className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                                <input type="text" id="name" name="name" className="w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                <input type="email" id="email" name="email" className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                                <input type="tel" id="number" name="number" className=" w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                                <textarea id="message" name="message" rows="4" className="w-[300px] shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="flex justify-end mb-16">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default BookDemo;
