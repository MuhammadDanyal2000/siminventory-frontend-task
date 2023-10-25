
 'use client'

import { useEffect, useState } from 'react';
import CardItem from './components/CardItem'
import Button from './components/Button';
import Image from 'next/image';

export default function Home() {
  const [image, setImage] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<any>(null);

  useEffect(() => {
    if (!image) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(image);
  }, [image]);

  return (
    <main className="flex flex-col gap-4 justify-center items-center mt-4 sm:mt-8 w-[330px] sm:w-[400px] md:w-[500px] mx-auto">
      <h3 className='text-lg font-bold'>Comment Preview</h3>
      <CardItem image='ab' title='Michael Brown' description='Hello how are you doing this fine and lovely evening. I hope this message finds you well.' liked noOfLikes={4}/>
      {/* Circular select image input */}
      <div className="flex items-center w-24 md:w-28 h-24 md:h-28 mb-2 rounded-full relative cursor-pointer hover:opacity-90 mt-4 sm:mt-6">
        {previewUrl && (
          <Image
            height={0}
            width={0}
            className="object-cover !w-full !h-full rounded-full cursor-pointer"
            // src={previewUrl ? previewUrl : "/default-profile-pic.png"}
            src={previewUrl}
            alt="Profile"
          />
        )}
        <label htmlFor="profile-pic-upload">
          <div
            className={`absolute inset-0 rounded-full ${
              !previewUrl &&
              " bg-white"
            } flex items-center justify-center cursor-pointer font-semibold text-sm`}
          >
            {!previewUrl && (
              'Select Image'
            )}
          </div>
        </label>
        <input
          id="profile-pic-upload"
          name="ImageSelected"
          type="file"
          className="sr-only !cursor-pointer"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            setImage(e?.target?.files && e?.target?.files[0]);
          }}
        />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className=''>
          <label htmlFor="username" className='text-sm font-bold text-gray-600'>
            Username
          </label>
          <input type="text" id="username" name="username" className='w-full border border-none outline-none text-sm px-4 py-2 mt-2' placeholder='Enter username'/>
        </div>
        <div>
          <label htmlFor="comment" className='text-sm font-bold text-gray-600'>
            Comment
          </label>
          <input type="text" id="comment" name="comment" className='w-full border border-none outline-none text-sm px-4 py-2 mt-2' placeholder='Enter your comment'/>
        </div>
        <div>
          <label htmlFor="like-count" className='text-sm font-bold text-gray-600'>
            Like count
          </label>
          <div className='flex gap-4'>
            <input type="text" id="like-count" name="like-count" className='w-full border border-none outline-none text-sm px-4 py-2 mt-2' placeholder='Enter the like count'/>
            <div className='flex items-center self-center justify-self-center gap-1'>
              <input id='liked' name='liked' type="checkbox" title='Liked'/>
              <label htmlFor='liked' className='text-gray text-sm'>Liked</label>
            </div>
          </div>
        </div>
      </div>
      <Button className='text-light-blue !text-sm !rounded-none !w-full mt-4 !py-2 !text-center'>
        <div className='flex gap-1 justify-center'>
          <Image src='/assets/images/send.svg' width={0} height={0} alt='Generate Comment' className='h-4 w-4'/>
          <span>Generate Comment</span>
        </div>
      </Button>
    </main>
  )
}
