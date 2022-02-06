import { useState } from "react";
import InputGroupComp from "../components/form/inputGroup";
import ButtonComp from "../components/form/button";

const SignInPage = () => {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const handleChangeInput = (name, value) => {
        /*         console.log("name : " + name);
                console.log("value : " + value);
         */
        name === 'userId' ? setUserId(value) : name === 'userPwd' ? setUserPwd(value) : null

    }

    const handleSubmit = () => {
        console.log("userId : " + userId);
        console.log("userPwd : " + userPwd);
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