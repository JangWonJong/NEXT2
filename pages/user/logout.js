import { addUser } from '@/store';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/reducers/user';
export default function Logout(){
    const dispatch = useDispatch()
    return <form onSubmit={
        e => {
            e.preventDefault()
            dispatch(addUser(user))
        }
    }
    >
        <button type="submit">로그아웃</button>
    </form>
}    
   