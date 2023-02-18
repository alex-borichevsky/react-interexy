import React, { useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepOrange, green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchUsers} from "../store/reducers/ActionCreator";


const StyledCard = styled(Card)`
//margin: 5px;
`;


type dataFromApi = {
    name: string;
    id: number;
    image: string;
    gender: string;
    created: string;
    status: string;
};
export const FunctionComponent1: React.FC = () => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)


    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const memoCards = useMemo(() => {
        return users.map(card => {
            return (
                <StyledCard key={card.name}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">

                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={card.name}
                        subheader={card.created}
                    />
                    <CardMedia

                        component="img"
                        height="194"
                        image={card.image}
                        alt={card.name}
                    />
                    <CardContent>
                        <Typography>
                            {card.name}
                            <br />
                            {card.gender}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Chip label={card.status} color={
                            setColor(card.status)}
                        />
                    </CardActions>
                </StyledCard>
            );
        })
    }, [users])


    return (
        <div style={{
            padding:'50px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>{users.length ? memoCards : "Ups..."}</div>
    );

    function setColor(status: string): "success" | "primary" | "warning" | "default" | "secondary" | "error" | "info" | undefined{
        switch(status) {
            case 'Alive':
                return "success";
            case 'Dead':
                return "error";
            default:
                return "warning";
        }
    }
};
export default FunctionComponent1;