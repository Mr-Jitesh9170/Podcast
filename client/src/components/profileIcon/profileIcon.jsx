import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Circuler } from '../circuler/circuler';
import { RiAccountPinCircleFill } from "react-icons/ri";
import { OpenContext, UserContext } from '../../context/context';
import "./profileIcon.scss"

export const ProfileIcon = () => {
    const { isUser } = useContext(UserContext)
    const { openAuthTab } = useContext(OpenContext)
    return (
        <>
            {
                isUser ?
                    (
                        <Link to={"/podcast/profile"} style={{ textDecoration: "none" }} >
                            <Circuler />
                        </Link >
                    ) :
                    (
                        <div className="accountIcon" onClick={openAuthTab}>
                            <RiAccountPinCircleFill color="#cc83ff" size={27} />
                            <span >Login</span>
                        </div>
                    )
            }
        </>
    )
}
