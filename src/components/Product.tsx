import {IProduct} from "../model";
import {useState} from "react";

interface ProductProps{
    product: IProduct;
}

const wrapperStyle= {
    display: 'flex',
    justifyContent: 'center'
}

const imgStyle = {
    height: '100px',
    width: '200px'
}

const divStyle = {
    width: '200px',
    border: '2px solid grey',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center'
}

export default function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnBgClassName = details ? {background: 'yellow'} : {background: 'blue'};


    return (

    <div style={wrapperStyle}>
        <div style={divStyle}>
            <p style={{fontWeight: 'bold'}}>{product.title}</p>
            <img style={imgStyle} src={product.image}/>
            <span>{product.price}</span>
            <button style={btnBgClassName} onClick={() => setDetails((prev)=> !prev)}>
                {details?"Hide details":"Show details"}
            </button>
            {details && <div>
                {product.description}
            </div>}
            <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>

        </div>
    </div>

);
}