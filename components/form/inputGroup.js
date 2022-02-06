const InputGroupComp = (props) => {

    const getLabelName = (data) => {
        if (data === 'userId') {
            return '아이디'
        } else {
            return '비밀번호'
        }
    }


    return (
        <div className="input-group">
            <label>
                {/* {props.name === 'userId' ? '아이디' : props.name === 'userPwd' ? '비밀번호' : null} */}
                {getLabelName(props.name)}
            </label>
            <input type={props.type}
                placeholder={props.name === 'userId' ? '아이디를 입력해 주세요' : props.name === 'userPwd' ? '비밀번호를 입력해 주세요' : null}
                value={props.value}
                name={props.name}
                onChange={e => props.onChange(e.target.name, e.target.value)}
            ></input>
        </div>
    )
}

export default InputGroupComp;