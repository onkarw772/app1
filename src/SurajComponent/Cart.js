import React, { useState } from 'react'

export const Cart = (props) => {
    const [d1, setd1] = useState([])
  
    const DisAmmount = (i) => {
        var total_ammount = (Number(props.pd[i].qty) * Number(props.pd[i].price))
        var dis_value = ((Number(total_ammount) * Number(props.pd[i].Discount)) / 100)

        return dis_value
    }
    const RemAmmount = (i) => {
        var total_ammount = (Number(props.pd[i].qty) * Number(props.pd[i].price))
        var dis_value = ((Number(total_ammount) * Number(props.pd[i].Discount)) / 100)

        return (total_ammount - dis_value)
    }
    const GstAmmount = (i) => {
        var total_ammount = (Number(props.pd[i].qty) * Number(props.pd[i].price))
        var dis_value = ((Number(total_ammount) * Number(props.pd[i].Discount)) / 100)
        var rem_ammount = (Number(total_ammount) - Number(dis_value))
        var gst_ammount = ((Number(rem_ammount) * Number(props.pd[i].Gst)) / 100)
        return gst_ammount
    }
    const [total, settotal] = useState(0)

    const TotalAmmount = (i) => {
        var total_ammount = (Number(props.pd[i].qty) * Number(props.pd[i].price))
        var dis_value = ((Number(total_ammount) * Number(props.pd[i].Discount)) / 100)
        var rem_ammount = (Number(total_ammount) - Number(dis_value))
        var gst_ammount = ((Number(rem_ammount) * Number(props.pd[i].Gst)) / 100)
        return (gst_ammount + rem_ammount)
    }
    function confirma() {
        alert("Purchase Success")
    }
    const [quantity, setqty] = useState(0)
    const [t1, sett1] = useState(0)

    function plus(i) {
        setqty(quantity + 1)
        props.pd.splice(Number(i.target.value), 1,
            {
                ProductName: "CookingOil",
                Mrp: 90,
                price: 80,
                Discount: 4,//5%
                Gst: 5,//5%
                qty: 55,
            })
        console.log(props.pd)

        for (var j of props.pd) {

            sett1(Number(t1) + Number(props.pd[j].price))
            alert(Number(props.pd[j].price))
        }

    }
    function mius() {
        setd1([props.pd])
        console.log(props.pd);
    }

    return (
        <div className='container'>

            <table border={1} className='cartTable text-center'>
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
                    props.pd.map((data, index) => (
                        <tr>
                            <td>{Number(index) + 1}</td>
                            <td>{data.title}</td>
                            <td>{data.qty}</td>
                            <td>{data.Mrp}</td>
                            <td>{data.price}</td>
                            <td>{data.Discount}</td>
                            <td>{DisAmmount(index)}</td>
                            <td>{RemAmmount(index)}</td>
                            <td>{data.Gst}</td>
                            <td>{GstAmmount(index)}</td>
                            <td>{TotalAmmount(index)}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={11}>
                        <h2>Qty:{props.qty}</h2>
                        <h2>bill:{props.total}</h2>

                        <button onClick={confirma} className='bg-success p-2'>Confirm</button>
                    </td>
                </tr>

            </table>



        </div>
    )
}
