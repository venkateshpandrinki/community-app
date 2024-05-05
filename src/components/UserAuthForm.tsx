'use client'
import { FC, HtmlHTMLAttributes, useState } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import {signIn} from "next-auth/react"
import { Icons } from './Icons'
import { useToast } from './ui/use-toast'


interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  
}

const UserAuthForm: FC<UserAuthFormProps> = ({className,...props}) => {
  const {toast} = useToast()
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const loginWithGoogle = async () =>{
    setIsLoading(true)
    try {
      
      await signIn('google')
    } catch (error) {
      //toast notification
      toast({
        title:'There was a problem',
        description:'There was an error loggging with Google',
        variant:'destructive'
      })
    }finally{
      setIsLoading(false)
    }
  }
  return <div
  className={cn('flex justify-center',className)}><Button size='sm' className=' w-full'
  onClick={loginWithGoogle}
  isLoading={isLoading}
  >
    {isLoading? null:<Icons.google className='h-4 w-4 mr-2 '/>}
    Google</Button></div>
}

export default UserAuthForm