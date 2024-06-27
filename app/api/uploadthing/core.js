import {createUploadthing} from 'uploadthing/next'
import { getServerSession } from 'next-auth'
import { authConfig } from '../auth/[...nextauth]/authConfig'

const uploadBuilder = createUploadthing()

//Auth function is to check on server session and return the user session
const auth = async () => {
    const session = await getServerSession(authConfig)
    return session
}

export const UTrouter = {
    imageUploader: uploadBuilder({image: {maxFileSize: '4MB'}})
    //Set permissions and file types fofr this FileRoute
    .middleware(async() => {
        //This code runs on your server before upload
        const session = await auth()

        //If you throw, the user will not be able to upload
        if (!session) throw new Error('Unauthorized')

        return {userEmail: session.user?.email}
    })
    .onUploadComplete(async({metadata, file}) => {
        //This code runs on the server after upload
        console.log('Upload complete for user: ', metadata.userEmail)
        console.log('File url: ', file.url)
        return {uploadedBy: metadata.userEmail}
    })
}
