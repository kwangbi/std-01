import Router from "next/router"
import { useState, useEffect } from "react"
import StarBox from "../components/form/star"
import Header from "../components/layout/header"

const goodsArray = [
    {
        img_path: "/images/teddy.jpg",
        brand_name: "테디베어",
        catetory_name: "인형",
        goods_name: "곰인형",
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
        goods_name: "곰인형",
        goods_price: "10000",
        goods_idx: 2,
        brand_idx: 1,
        category_idx: 1,
        rating: 4
    }, {
        img_path: "/images/teddy.jpg",
        brand_name: "테디베어",
        catetory_name: "인형",
        goods_name: "곰인형2",
        goods_price: "10000",
        goods_idx: 3,
        brand_idx: 1,
        category_idx: 1,
        rating: 5
    }
]


const MainPage = () => {
    const [goodsList, setGoodsList] = useState(goodsArray);
    const [searchValue, setSearchValue] = useState('');
    const [userInfo, setUserInfo] = useState({});

    const handleClick = (idx) => {
        Router.push({ pathname: 'goods_detail', query: { 'goodsIdx': idx } });
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
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
                            <img src="/images/search.png" alt="search-icon" />
                            <input className="search-input"
                            />
                        </div>
                    </div>

                    <div className="goods-list">
                        <ul>

                            <div className="card-head">
                                <img src="/images/teddy.jpg" />
                            </div>
                            <div className="card-body">
                                <div className="brand-name">
                                    111111
                                </div>
                                <div className="goods-name">
                                    222222
                                </div>
                                <div className="goods-price">
                                    <span className="won"> 원</span>
                                </div>


                            </div>

                            <div className="card-foot">
                                <button className="add-button"
                                >수정</button>
                                <button className="delete-button"
                                >삭제</button>
                            </div>

                        </ul>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainPage