import { useState, useEffect } from "react";


const HeaderComp = (props) => {

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            const storageData = JSON.parse(localStorage.getItem('userInfo'));
            setUserInfo(storageData);
        }
    }, [])

    return (
        <div className="header">
            <div className="title">
                테드베어 쇼핑몰
            </div>
            {/* 
            <div className="userInfo">
                {userInfo.user_name}
            </div>
            */}
        </div>
    )
}

export default HeaderComp;