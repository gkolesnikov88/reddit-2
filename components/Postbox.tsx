import { LinkIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
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
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);
  const { register, handleSubmit, watch, formState: { errors } } =
    useForm<FormData>();

const onSubmit = handleSubmit( async (formData) => {
    console.log(formData);
    
})

  return (
    <form
        onSubmit={onSubmit} 
        className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
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

            <PhotoIcon 
                onClick={() => {setImageBoxOpen(!imageBoxOpen)}}
                className={`h-6 text-gray-300 cursor-pointer ${imageBoxOpen && 'text-blue-300'}`}/>
            <LinkIcon className={`h-6 text-gray-300 cursor-pointer`}/>
        </div>

        {!!watch('postTitle') && (
            <div className='flex flex-col px-2'>
                <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Body:</p>
                    <input
                        className='m-2 flex-1 bg-blue-50 p-2 outline-none' 
                        type="text" 
                        placeholder='Text (optional)'
                        {...register('postBody')}
                    />
                </div>
                
                <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Subreddit:</p>
                    <input
                        className='m-2 flex-1 bg-blue-50 p-2 outline-none' 
                        type="text" 
                        placeholder='i.e. reactjs'
                        {...register('subreddit', {required: true})}
                    />
                </div>

                { imageBoxOpen && 
                    <div className='flex items-center px-2'>
                        <p className='min-w-[90px]'>Image URL:</p>
                        <input
                            className='m-2 flex-1 bg-blue-50 p-2 outline-none' 
                            type="text" 
                            placeholder='Optional...'
                            {...register('postImage')}
                        />
                    </div>
                }

                { Object.keys(errors).length > 0 && (
                    <div className='space-y-2 p-2 text-red-500'>
                        {errors.postTitle?.type === 'required' && (
                            <p>A Post Title is required</p>
                        )}
                        {errors.subreddit?.type === 'required' && (
                            <p>A Subreddit is required</p>
                        )}
                    </div>
                )}

                {!!watch('postTitle') && 
                <button 
                    type='submit'
                    className='w-full rounded-full bg-blue-400 p-2 text-white'>
                    Create Post
                </button>}
            </div>
        )}
    </form>
  )
}

export default Postbox;