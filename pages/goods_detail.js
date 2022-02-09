import {useRouter} from "next/router"
import { useEffect } from "react"
import axios from "axios"
import Header from "../components/layout/header"

const GoodsDetailsPage = (props) =>{
    console.log("props : ",props)
    //console.log("idx : " + props.query.goodsIdx)
    const router = useRouter()
    console.log("useRouter : ",router)

    // const getGoodsDetail = (idx) => {
    //     axios({
    //         url:"",
    //         method: "get"
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // useEffect(() => {
    //     console.log(props.query.goodsIdx)
    //     getGoodsDetail(props.query.goodsIdx)
    // },[])


    return (
        <div className="goods-detail-container">
            <Header
                page='goods_detail'
            />

        </div>
    )
}

GoodsDetailsPage.getInitialProps = async context => {
    const {query} = context;

    //ssr여부 확인
    console.log(context ? {from:'server'} : {from: 'client'})

    return {query}
}

export default GoodsDetailsPage