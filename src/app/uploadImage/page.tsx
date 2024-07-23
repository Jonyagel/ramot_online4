"use client";
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';
import { sources } from 'next/dist/compiled/webpack/webpack';
import { useState } from 'react';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
    const [fileName, setFileName] = useState(null);

    const handleUpload = (result:any) => {
        if (result.event === 'success') {
            const publicId = result.info.public_id;
            // Extract the file name from the public_id
            const fileName = publicId.split('/').pop(); // Extracts the file name
            console.log('Uploaded file name:', fileName);
            setFileName(fileName);
        }
    };

    return (
        <div>
            <CldImage
                src="car2_rv6atp" // Use this sample image or upload your own via the Media Explorer
                width="500" // Transform the image: auto-crop to square aspect_ratio
                height="500"
                crop={{
                    type: 'auto',
                    source: true
                }}
                alt='hello'
                // priority
            />



            <CldUploadButton className='btn btn-info' uploadPreset="my_upload_test" onSuccess={handleUpload}
                options={{ sources: ['local'] }} // לאפשר העלאה מקובץ מקומי בלבד
            />
        </div>
    );
}