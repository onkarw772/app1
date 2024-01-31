import React from 'react'

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



    return (
        <div>
            <table id='cart_table'>
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
                        <tr>
                            <td>{Number(index) + 1}</td>
                            <td>{data.ProductName}</td>
                            <td><button>-</button>{data.Qty}<button>+</button></td>
                            <td>{data.Mrp}</td>
                            <td>{data.SalePrice}</td>
                            <td>{data.Discount}</td>
                            <td>{data.Gst}</td>
                            <td>{data.Qty}</td>
                        </tr>
                    ))
                }

            </table>



        </div>
    )
}
