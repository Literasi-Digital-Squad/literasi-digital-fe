'use client'
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function InputFoto({setImageInput, imageInput}) {
    const [image, setImage] = useState(null);

    const handleFileAccepted = (files) => {
        const file = files[0];
        setImage(URL.createObjectURL(file));
        setImageInput(file);
    };

    const onDrop = useCallback((acceptedFiles) => {
        if (handleFileAccepted) {
            handleFileAccepted(acceptedFiles);
        }
    }, [handleFileAccepted]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': [],
        },
        maxFiles: 1,
    });
    return (
        <>
            <div
                {...getRootProps()}
                className="border-dashed border-2 border-[#D1D1D1] p-8 text-center rounded-lg cursor-pointer flex flex-col items-center"
            >
                <input {...getInputProps()} />
                {image ? (
                    <img src={image} alt="" />
                ) : imageInput ? (
                    <img src={imageInput} alt="" />
                ) : (
                    <>
                        <div className='p-3 bg-[#ECF9FF] rounded-lg w-min'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 text-secondary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>

                        {isDragActive ? (
                            <p className='text-sm'>Drop file di sini...</p>
                        ) : (
                            <div className='text-sm'>
                                <p className='text-gray-600 break-all'><span className=' text-black'>Click to upload</span> or drag and drop
                                    Supports:PNG, JPG</p>
                                <p className=' text-[#89868D]'>(max, 800x400px)</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
