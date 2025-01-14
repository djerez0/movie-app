"use client";

import * as React from "react";
import {styled} from "@mui/material/styles";
import Rating, {IconContainerProps} from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export const SoftRating = styled(Rating)(({theme}) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
        color: theme.palette.action.disabled
    }
}));

export const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />,
        label: "Very Dissatisfied"
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" fontSize="large" />,
        label: "Dissatisfied"
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" fontSize="large" />,
        label: "Neutral"
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" fontSize="large" />,
        label: "Satisfied"
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" fontSize="large" />,
        label: "Very Satisfied"
    }
};

export function IconContainer(props: IconContainerProps) {
    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}
