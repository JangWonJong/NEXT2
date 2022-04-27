import UserLogin from "@/components/user/userLogin"
import { useSelector } from "react-redux"


const UserLoginPage =()=> {
    const form = useSelector()
    return(<UserLogin onSubmit={onSubmit} onChange={onChange} form={form}/>

    )
}

export default UserLoginPage