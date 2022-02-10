import { useState, useCallback } from "react"
import Input from "../components/inputGroupComp";


const useCallbackPage = () => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');

    // const handleChangeInput = useCallback((e) => {
    //     const [name, value] = e.target;
    //     name === 'name' ? setName(value)
    //         : name === 'id' ? setId(value)
    //             : setPhone(value)
    // }, [name, id, phone])

    const handleChangeInput = useCallback((e) => {
        const { name, value } = e.target;
        name === 'name' ? setName(value)
            : name === 'id' ? setId(value)
                : setPhone(value)
    }, [name, id, phone])

    return (
        <div>
            <Input
                label="이름"
                type="text"
                value={name}
                name="name"
                changeCB={handleChangeInput}
            />
            <Input
                label="아이디"
                type="text"
                value={id}
                name="id"
                changeCB={handleChangeInput}
            />
            <Input
                label="전화번호"
                type="text"
                value={phone}
                name="phone"
                changeCB={handleChangeInput}
            />
        </div>
    )
}

export default useCallbackPage