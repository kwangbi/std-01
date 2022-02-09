import Image from "next/image"


const GoodsCardComp = ({keyValue,data,clickCardCB,updateCD,deleteCB}) => {
    return (
        <li className="goods-card" 
            key={keyValue}
            onClick={clickCardCB}
        >
        <div className="card-head">
            <Image src={data.img_path} alt="" width={300} height={300}/>
        </div>
        <div className="card-body">
            <div className="brand-name">
                {data.brand_name}
            </div>
            <div className="goods-name">
                {data.goods_name}
            </div>
            <div className="goods-price">
                <span className="won">{data.goods_price} 원</span>
            </div>
        </div>

        <div className="card-foot">
            <button className="add-button"
                    onClick={updateCD}
            >수정</button>
            <button className="delete-button"
                    onClick={deleteCB}
            >삭제</button>
        </div>        
    </li>
    )
}

export default GoodsCardComp;