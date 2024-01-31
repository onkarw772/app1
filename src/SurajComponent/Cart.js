import React, { useState } from 'react'

export const Cart = () => {
    var demoData = [
        {
            ProductName: "Sugar",
            Mrp: 80,
            SalePrice: 70,
            Discount: 5,//5%
            Gst: 3,//3%
            Qty: 1,
        },
        {
            ProductName: "Salt",
            Mrp: 40,
            SalePrice: 30,
            Discount: 2,//2%
            Gst: 4, //4%
            Qty: 1,
        },
        {
            ProductName: "CookingOil",
            Mrp: 90,
            SalePrice: 80,
            Discount: 4,//5%
            Gst: 5,//5%
            Qty: 1,
        }
    ]

    const DisAmmount = (i) => {
        var total_ammount = (Number(demoData[i].Qty) * Number(demoData[i].SalePrice))
        var dis_value = ((Number(total_ammount) * Number(demoData[i].Discount)) / 100)

        return dis_value
    }
    const RemAmmount = (i) => {
        var total_ammount = (Number(demoData[i].Qty) * Number(demoData[i].SalePrice))
        var dis_value = ((Number(total_ammount) * Number(demoData[i].Discount)) / 100)

        return (total_ammount - dis_value)
    }
    const GstAmmount = (i) => {
        var total_ammount = (Number(demoData[i].Qty) * Number(demoData[i].SalePrice))
        var dis_value = ((Number(total_ammount) * Number(demoData[i].Discount)) / 100)
        var rem_ammount = (Number(total_ammount) - Number(dis_value))
        var gst_ammount = ((Number(rem_ammount) * Number(demoData[i].Gst)) / 100)
        return gst_ammount
    }
    const [total,settotal]=useState(0)
    
    const TotalAmmount = (i) => {
        var total_ammount = (Number(demoData[i].Qty) * Number(demoData[i].SalePrice))
        var dis_value = ((Number(total_ammount) * Number(demoData[i].Discount)) / 100)
        var rem_ammount = (Number(total_ammount) - Number(dis_value))
        var gst_ammount = ((Number(rem_ammount) * Number(demoData[i].Gst)) / 100)
       
        return Math.round(gst_ammount + rem_ammount)
    }
    function confirma() {
        alert("Purchase Success")
    }
    const [quantity,setqty]=useState(0)
    function plus(i) {
        setqty(quantity+1)
        demoData.splice(Number(i.target.value),1,
        {
            ProductName: "CookingOil",
            Mrp: 90,
            SalePrice: 80,
            Discount: 4,//5%
            Gst: 5,//5%
            Qty: 55,
        })
        console.log(demoData)
    }

    return (
        <div className='container'>
          
            <table border={1} className='cartTable'>
                <tr>
                    <td>No.</td>
                    <td>Product Name</td>
                    <td>Qty</td>
                    <td>MRP</td>
                    <td>Price</td>
                    <td>Discount</td>
                    <td>Discount Ammount</td>
                    <td>Remaining Ammount</td>
                    <td>GST</td>
                    <td>GST Ammount</td>
                    <td>Total</td>
                </tr>

                {
                    demoData.map((data, index) => (
                        <tr key={index}>
                            <td>{Number(index) + 1}</td>
                            <td>{data.ProductName}</td>
                            <td><button className='bg-secondary p-1'>-</button>{data.Qty}<button value={index} onClick={plus} className='bg-secondary p-1'>+</button></td>
                            <td>{data.Mrp}</td>
                            <td>{data.SalePrice}</td>
                            <td>{data.Discount}</td>
                            <td>{DisAmmount(index) + " रु"}</td>
                            <td>{RemAmmount(index) + " रु"}</td>
                            <td>{data.Gst}</td>
                            <td>{GstAmmount(index) + " रु"}</td>
                            <td>{TotalAmmount(index) + " रु"}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={11}>
                    <h2>Qty:{quantity}</h2>
                    <h2>bill:{total}</h2>
                  
                        <button onClick={confirma} className='bg-success p-2'>Confirm</button>
                    </td>
                </tr>

            </table>



        </div>
    )
}
