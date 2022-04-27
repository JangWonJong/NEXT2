import UserJoin from '@/components/user/UserJoin'
import { userJoin } from '@/modules/user'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserJoinPage = () => {
    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault()
        const {userid, name, email, password, phone, birth, adress} = form
        dispatch(userJoin({userid, name, email, password, phone, birth, adress}))
    }
    const onChange = e => {
        e.preventDefault()
    }

    return(<UserJoin  onSubmit={onSubmit} onchange={onchange} form={form}/>)
}

export default UserJoinPage