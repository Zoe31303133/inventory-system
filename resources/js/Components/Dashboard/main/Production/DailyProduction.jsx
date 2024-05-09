import React from "react";
//{日期, {品名，數量}}

export default function DailyProduction({onEditBtnClick}){

    const style_container={
        width: "300px",
        height: "500px",
        margin: "10px 5px",
        backgroundColor: "#F8F8FF",
        padding: "10px",
        boxSizing: "border-box",
        fontSize: "11px",
        textAlign: "center",
        border: "solid 1px lightgray"
    }

    const style_ul = {
        height: "80%",
        listStyleType: "none",
        padding: "5px 10px",
        overflow: "scroll"
    }

    const style_li = {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px"
    }

    const style_button = {
        backgroundColor: "gray",
        border: "none",
        color: "white",
        padding: "5px 10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "14px",
        marginRight: "10px",
        cursor: "pointer",
        borderRadius: "5px",
    }

    const product_shcedule = {
        date: "2024/05/05",
        product_shcedule : 
        [
            {
                product_name :"A",
                quantity : 20
            },
            {
                product_name :"A",
                quantity : 20
            },
            {
                product_name :"A",
                quantity : 20
            },
            {
                product_name :"A",
                quantity : 20
            },
            {
                product_name :"A",
                quantity : 20
            }
        ]
    }

    return (
        <div class="container" style={style_container}>
            <p>{product_shcedule.date}</p>
            <ul style={style_ul}>
            {
                product_shcedule.product_shcedule.map((product)=>{
                return (
                    <li style={style_li}><span>{product.product_name}</span><span>{product.quantity}</span></li>
                )})
            }
            </ul>
            <div class="button-area" >
            {/* 如果日期大於今天 */}
                <button style={style_button} onClick={onEditBtnClick}>修改</button>
            </div>
        </div>
    )
}