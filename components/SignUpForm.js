'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { createUser } from "@/app/lib/actions/user.action"
import toast from "react-hot-toast"

export default function SignUpForm() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const user = await createUser({
                email: email,
                name: name,
                password: password
            })

            if (user) {
                const res = await signIn('credentials', {
                    email,
                    password,
                    redirect: false
                })

                if(res.status === 200){
                    toast.success('Sign Up Successfull')
                    router.push('/profile')
                }
            }
        } catch (error) {
            toast.error('Sign Up Failed: This email is already registered')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="space-y-2">
                <label className="label" htmlFor="name">Name</label>
                <input id='name' value={name} onChange={e => setName(e.target.value)} className="input input-bordered w-full" type="text" placeholder="James Weasley" required />
            </div>
            <div className="space-y-2">
                <label className="label" htmlFor="email">Email</label>
                <input id='email' value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered w-full" type="text" placeholder="Enter your email address" required />
            </div>
            <div className="space-y-2">
                <label className="label" htmlFor="password">Password</label>
                <input id='password' value={password} onChange={e => setPassword(e.target.value)} className="input input-bordered w-full" type="password" placeholder="Enter password" required minLength={6} />
            </div>

            <button className="btn btn-primary btn-block mt-4">Sign Up</button>
        </form>
    )
}
