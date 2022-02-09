import React from "react";
import { useState,useEffect,useContext,useRef,useMemo } from "react";
import Modal from "./confirm";

const themes = {
    light:{
        color: "#000000",
        background: "#eeeeee",
        boarder:0,
    }
};

const ThemeContext = React.createContext(themes.light);

const HookPage = () =>{

    const[count,setCount] = useState(0);
    const[showModal,setShowModal] = useState(false);
    const[imgFile,setImgFile] = useState(null);

    const addVal = useRef(1);

    const handleClick = () => {
        console.log('-----------------------')
        console.log("addVal.current : ",addVal.current)
        setCount(count + addVal.current)
    }

    //값이 변화되지 않았을때 함수의 재호출을 방지함.
    //const countMeno = useMemo(() => handleClick(addVal),[addVal])


    // componentDidUpdate
    useEffect(() =>{
        document.title = `${count} 번을 클릭했습니다.`;
    }, [count])


    const theme = useContext(ThemeContext);


    return (
        <div>
            <div>
                <Modal
                />
            </div>
            <div>
                <p>click count : {count}</p>
                <button onClick={handleClick}
                    style={
                        {background: themes.background,
                        color: themes.color,
                        boarder: themes.boarder
                        }
                    }
                >click me</button>

            </div>



            
        </div>
    )
}

export default HookPage;