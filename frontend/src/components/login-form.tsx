import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios"
import {  toast } from 'sonner'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import { REFRESH_TOKEN,ACCESS_TOKEN } from "@/auth/constant"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  let navigate = useNavigate();

  const [username,setUsername] = useState<string|undefined>()
  const [password,setPassword] = useState<string|undefined>()
  const onSubmit = async(e: any) => {
    e.preventDefault()
    if(username !=undefined && password != undefined){
      console.log(username,password)
      await axios.post(`${import.meta.env.VITE_API_URL}/api/token/`,{
        username:username,
        password:password
      }).then((res) => {
        console.log(res.data)
        if(res.status == 200){
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
          localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
          localStorage.setItem('user', JSON.stringify(jwtDecode(res.data.access)));
          navigate('/')
          toast.success("Login successful")
        }

        
      })
      .catch((err) => {
        if(err.status == 401){
          toast.error("Invalid credentials")
        }else{
          toast.error("Something went wrong")
        }
      })

     

    }else{
      toast.warning("Please enter username and password")
    }


  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Username</Label>
                <Input
                  placeholder="Enter your username"
                  required
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Enter the password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
               
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
