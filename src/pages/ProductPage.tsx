import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {useProducts} from "../hooks/product";
import {IProduct} from "../model";
import Loader from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import Product from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";
export function ProductPage() {
    const {modal, open, close} = useContext(ModalContext);
    // const [modal, setModal] = useState(true);
    const {products, error, loading, addProduct} = useProducts();

    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    }

    return(
        <div className="container">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(product => <Product product={product} key={product.id}/>)}
            {modal && <Modal onClose={close} title='Create new product'>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            <button onClick={open} style={{position: "fixed", background: "red", borderRadius: "10px", bottom: "5px", right: "5px", padding: "10px"}}>+</button>
        </div>
    );
}