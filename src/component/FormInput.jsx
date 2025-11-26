import React, { useState } from 'react'

const FormInput = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("")
    const [task, setTask] = useState([])

    // Handling Title Filed
    const handleInput = (val) => {
        setTitle(val);
    }

    // Handling Description Filed
    const handleDescription = (val) => {
        setDescription(val);
    }

    // Form Submit Filed
    const formHandler = (e) => {
        e.preventDefault();
        // console.log("Title:", title);
        // console.log("Description:", description);
        // const copyTask = [...task];
        // copyTask.push({ title, description });
        if (!title.trim() || !description.trim()) {
            alert('Please Fill both fiels');
            return;
        }
        else {
            setTask(prev => [...prev, { title, description }]);
            // setTask(copyTask);
            setTitle('');
            setDescription("");
            // console.log(copyTask);
        }


    }

    return (
        <div>
            <form onSubmit={formHandler} className='py-4'>
                <div className='mb-2'>
                    <input
                        className='py-2 text-white p-2 bg-transparent w-full border-2 border-gray-200 rounded'
                        type="text"
                        name='name'
                        value={title}
                        onChange={(e) => handleInput(e.target.value)}
                        placeholder='Enter Notes Heading'
                    />
                </div>
                <div>
                    <textarea
                        className='w-full text-white p-2 bg-transparent border-2 border-gray-200 rounded'
                        placeholder='Enter Details'
                        name="description"
                        id=""
                        value={description}
                        onChange={(e) => handleDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <button type='submit' className='py-3 w-full rounded-lg border-2 border-gray-200 bg-white'>Add Note</button>
                </div>
            </form>
            <div>
                <h1 className='font-bold text-2xl text-white py-5'>Your Notes</h1>
            </div>
            <div className='flex items-center gap-4 flex-wrap'>

                {task.length > 0 ? (
                    task.map((ele, index) => (
                        <div
                            key={index}
                            className='h-56 w-56 rounded-lg bg-white text-black p-2'
                        >
                            <p className='font-bold'>{ele.title}</p>
                            <p>{ele.description}</p>
                        </div>
                    ))
                ) : (
                    <div className='text-center w-full'>
                        <p className='text-white'>No Data Available</p>
                    </div>
                )}

            </div>

        </div>
    )
}

export default FormInput