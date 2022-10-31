import React, {useState} from 'react'
import "./product.css"

function Product(props) {
    const { name, icon, price, total, setTotal } = props;
    const [select, setSelect] = useState(false)    
    const adjustedPrice = price.toFixed(2).toString().replace(".", ",")

    function getTotal() {
        const isSelect = !select;
        if (isSelect) setTotal(total + price);
        else setTotal(total - price )
    
        setSelect(isSelect)
    }

    function checkSelected() {
        let classes = "product";
        if (select) {
            classes = "product selected";
        }
        return classes;
        }

    return (
        <div className={checkSelected()} onClick={getTotal}>
            {icon} {name} - R$ {adjustedPrice}
        </div>
    );
}

export default Product
