import { LinkIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar';
import { useForm } from 'react-hook-form';

type FormData = {
    postTitle: string;
    postBody: string;
    postImage: string;
    subreddit: string;
};

function Postbox() {
  const { data: session } = useSession();
  const { register, handleSubmit, watch, formState: { errors } } =
    useForm<FormData>();

  return (
    <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
        <div className='flex items-center space-x-3'>
            <Avatar/>

            <input 
                {...register('postTitle', {required: true})}
                type="text"
                disabled={!session} 
                className='flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none'
                placeholder={ session ?
                    'Create a post by entering a title' :
                    'Sign in to post'
            }/>

            <PhotoIcon className={`h-6 text-gray-300 cursor-pointer`}/>
            <LinkIcon className={`h-6 text-gray-300 cursor-pointer`}/>
        </div>
    </form>
  )
}

export default Postbox;