/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io'
            }
        ]
    },
    env: {
        MONGODB_URI: "mongodb+srv://floriansaraka:Noniawhy8GEApJDL@cluster0.sgovp5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "h9LmZn8dUnLDvjX/vRSxZX70vGU0stcZg58ff42Wgrs=",
        UPLOADTHING_SECRET: "sk_live_3fa698a4d9ffef522b766b08d14a9ecbbc955cf627977dda741feff58b1f9e96",
        UPLOADTHING_APP_ID: "j2sbnk6yvy"

    }
};

export default nextConfig;
