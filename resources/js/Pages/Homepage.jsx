import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    console.log(props)
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-500 text-white text-zxl'>
            <Head title={props.title} />
            <h1>{props.description}</h1>
        </div>
    )
}