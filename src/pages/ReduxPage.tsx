import {useEffect} from "react";
import {fetchUsers} from "../store/reducers/ActionCreator";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export function ReduxPage (){
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)


    useEffect(() => {
        dispatch(fetchUsers());
    }, [])


    return (
        <div>
            {JSON.stringify(users)}
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {/*<h1>{count}</h1>*/}
            {/*<button  style={styledButton} onClick={() => dispatch(increment(10))}>Increment</button>*/}
        </div>
    );
}