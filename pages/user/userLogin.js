import UserLogin from "@/components/user/userLogin"
import { userLogin } from "@/modules/user"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'

const UserLoginPage =()=> {
    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault()
        const {userid, password} = form
        dispatch(userLogin({userid, password}))
    }
    const onChange = e => {
        e.preventDefault()
    }
    return(<UserLogin onSubmit={onSubmit} onChange={onChange} form={form}/>

    )
}

export default UserLoginPage