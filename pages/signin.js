import { useState } from "react";
import InputGroupComp from "../components/form/inputGroup";
import ButtonComp from "../components/form/button";
import axios from "axios";
import Router from "next/router";


const SignInPage = () => {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [userInfo, setUserInfo] = useState({
        userId: "",
        userPwd: ""
    })

    const handleChangeInput = (name, value) => {
        name === 'userId' ? setUserId(value) : name === 'userPwd' ? setUserPwd(value) : null
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log("userId : " + userId);
        console.log("userPwd : " + userPwd);
        if (!userId) { return alert('아이디를 입력하세요') }
        if (!userPwd) { return alert('비밀번호를 입력하세요') }

        // fetch('apiURL', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': '*/*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(userId)
        // })
        //     .then(res => {
        //         console.log(res)
        //         return res.json();
        //     }).then(responseJson => {
        //         console.log(responseJson)
        //         //const result = responseJson.data.result;
        //     }).catch(err => {
        //         console.log('err : ' + err)
        //     })

        axios({
            url: "/signin",
            method: "post",
            data: {
                user_id: userId,
                user_pwd: userPwd
            }
        }).then(res => {
            console.log(res.data);
            // console.log(res.data)
            // const result = res.data.result;
            // localStorage.setItem('userInfo', JSON.stringify(result))
            // Router.push('/main')
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            const storageData = JSON.parse(localStorage.getItem('userInfo'));
            console.log('storageData', storageData);
            Router.push('/main');
        }).catch(err => {
            console.log(err);
            // console.log(err.response.status)
            // const status = err.response.status;
            // if (status === 401) {
            //     return alert('비밀번호가 유효하지 않습니다.');
            // }
            // if (status === 404) {
            //     return alert('페이지를 찾을 수 없습니다.');
            // }
        })

    }


    return (
        <div className="signin-container">
            <div className="wrapper">
                <div className="signin-box">
                    <div className="box-header">
                        <p className="box-title">로그인</p>
                    </div>
                    <div className="box-body">
                        <InputGroupComp
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={handleChangeInput}
                        />
                        <InputGroupComp
                            type="password"
                            name="userPwd"
                            value={userPwd}
                            onChange={handleChangeInput}
                        />
                        {/*                         
                        <div className="input-group">
                            <label>아이디</label>
                            <input type="text" placeholder="아이디를 입력해 주세요"></input>
                        </div>
                        <div className="input-group">
                            <label>비밀번호</label>
                            <input type="password" placeholder="비밀번호를 입력해 주세요"></input>
                        </div>
                        */}
                    </div>
                    <div className="box-footer">
                        <ButtonComp
                            onClick={handleSubmit}
                        >
                            로그인하기
                        </ButtonComp>
                        {/* <button className="btn-submit">로그인하기</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;