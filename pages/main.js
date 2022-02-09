import Router from "next/router"
import { useState, useEffect } from "react"
import StarBox from "../components/form/star"
import Header from "../components/layout/header"
import Image from "next/image"
import axios from "axios"
import GoodsCardComp from "../components/GoodsCard"

const goodsArray = [
    {
        img_path: "/images/teddy.jpg",
        brand_name: "테디베어",
        catetory_name: "인형",
        goods_name: "귀여운 곰인형",
        goods_price: "10000",
        goods_idx: 1,
        brand_idx: 1,
        category_idx: 1,
        rating: 3.5
    },
    {
        img_path: "/images/teddy.jpg",
        brand_name: "테디베어",
        catetory_name: "인형",
        goods_name: "많이 귀여운 곰인형",
        goods_price: "10000",
        goods_idx: 2,
        brand_idx: 1,
        category_idx: 1,
        rating: 4
    }, {
        img_path: "/images/teddy.jpg",
        brand_name: "테디베어",
        catetory_name: "인형",
        goods_name: "엄청 귀여운 곰인형",
        goods_price: "10000",
        goods_idx: 3,
        brand_idx: 1,
        category_idx: 1,
        rating: 5
    }
]


const MainPage = () => {
    const [goodsList, setGoodsList] = useState(goodsArray);
    const [searchVal, setSearchVal] = useState('');
    const [userInfo, setUserInfo] = useState({});

    const handleClick = (idx) => {
        Router.push('/goods/' + idx);
        //Router.push({ pathname: 'goods_detail', query: { 'goodsIdx': idx } });
    }

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setSearchVal(value);
    }

    // const getGoodsList = () => {
    //     axios({
    //         url : "http://localhost:3000/goods",
    //         method: "get"
    //     })
    //     .then(res =>{
    //         console.log(res);
    //         const result = res.data.result;
    //         setGoodsList(result);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }

    // useEffect(() =>{
    //     // if(!localStorage.getItem('userId')){
    //     //     Router.push('/signin');
    //     // }else{
    //     //     const storageData = JSON.parse(localStorage.getItem('userId'));
    //     //     setUserInfo(storageData);
    //     // }

    //     getGoodsList();
    // },[])

    // 등록
    const handleAdd = () => {
        console.log("add");
        let newObj = {
            img_path: "/images/teddy.jpg",
            brand_name: "테디베어",
            catetory_name: "인형",
            goods_name: "곰인형2",
            goods_price: "10000",
            goods_idx: 4,
            brand_idx: 1,
            category_idx: 1,
            rating: 5            
        }

        setGoodsList(
            goodsList.concat(newObj)
        )

    }

    // 수정
    const handleUpdate = (idx) => {
        console.log("idx : " + idx)
        const newName = "이름 바꾸기";
        const newPrice = "20000";

        setGoodsList(
            goodsList.map(item => 
                item.goods_idx === idx ? {
                    ...item,
                    goods_name: newName,
                    goods_price: newPrice
                }
                : item
            )

        )
    }


    // 삭제
    const handleDelete = (idx) => {
        setGoodsList(
            goodsList.filter(item => item.goods_idx != idx)
        )
    }



    return (
        <div className="main-container">
            <div className="wrapper">
                <Header
                    page='main'
                />
                <div className="contents">
                    <div className="search">
                        <div className="input-group">
                            <Image src="/images/search.png" alt="search-icon" width={20} height={20}/>
                            <input className="search-input"
                                value={searchVal}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="goods-list">
                        <ul>
                            {
                                goodsList &&
                                goodsList
                                .filter(item => item.goods_name.includes(searchVal))
                                .map((item,index) => (
                                    <GoodsCardComp
                                        key={'goods-list-' + index}
                                        data = {item}
                                        clickCardCB={() => handleClick(item.goods_idx)}
                                        updateCD={() => handleUpdate(item.goods_idx)}
                                        deleteCB={() => handleDelete(item.goods_idx)}
                                    />
                                ))
                            }
                        </ul>
                        <div>
                            <button className="add-button" onClick={() => handleAdd()}>등록</button>
                        </div>                    

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage