import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {useProducts} from "../hooks/product";
import {IProduct} from "../model";
import Loader from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import Product from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {cloneData} from "react-chartjs-2/dist/utils";
import {modalSLice} from "../store/reducers/ModalSlice";
export function ProductPage() {
    // const {modal, open, close} = useContext(ModalContext);
    const dispatch = useAppDispatch();
    const {rule} = modalSLice.actions;
    const {modal} = useAppSelector(state => state.modalReducer);


    const {products, error, loading, addProduct} = useProducts();

    const createHandler = (product: IProduct) => {
        dispatch(rule(false))
        addProduct(product);
    }

    return(
        <div className="container">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(product => <Product product={product} key={product.id}/>)}
            {modal && <Modal onClose={() => dispatch(rule(false))} title='Create new product'>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            <button onClick={() => dispatch(rule(true))} style={{position: "fixed", background: "red", borderRadius: "10px", bottom: "5px", right: "5px", padding: "10px"}}>+</button>
        </div>
    );
}