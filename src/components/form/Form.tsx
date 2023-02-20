import React from "react";
import { useForm, Controller, FieldValues  } from "react-hook-form";
import {Box, Button, Input, TextField} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "./Form.constant";
import {styled} from "@mui/material/styles";
import {purple} from "@mui/material/colors";

const StyledButton = styled(Button)`
  margin-top: 5px;
`;


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
        <Box component="span" sx={{ p: 2, border: '1px dashed grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                <div className="form-control" style={{display:'flex', justifyContent:'center'}}>
                    <StyledButton color='primary' variant="contained" type='submit'>Submit</StyledButton>
                    {/*<button type="submit">Login</button>*/}
                </div>
            </form>
        </Box>


    );
}