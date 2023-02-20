import React from "react";
import { useForm, Controller, FieldValues  } from "react-hook-form";
import {Input, TextField} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "./Form.constant";


export default function Form() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({mode: 'all', resolver: yupResolver(schema)});

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset();
    };
    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div  className="form-control">
                    <Controller
                        render={({ field }) => (
                            <TextField
                                helperText={errors.email ? `${errors.email.message}`: ''}
                                autoComplete="off"
                                variant="outlined"
                                label="Login"
                                error={errors.email ? true : false}
                                {...field} />
                        )}
                        name="email"
                        control={control}
                        defaultValue=""

                    />
                </div>
                <div className="form-control">
                    <Controller
                        render={({ field }) => (
                            <TextField
                                helperText={errors.password ? `${errors.password.message}`: ''}
                                autoComplete="off"
                                variant="outlined"
                                label="Password"
                                error={errors.password ? true : false}
                                {...field} />
                        )}
                        name="password"
                        control={control}
                        defaultValue=""

                    />

                </div>
                <div className="form-control">
                    <label ></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}