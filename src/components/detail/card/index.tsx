import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import {SoftBox} from "app/components/shared/soft_box.ts";
import {SoftTypography} from "app/components/shared/soft_typography";

function StatisticsCard({
    bgColor,
    title,
    count,
    percentage,
    icon,
    direction
}: {
    bgColor: keyof ValidColors;
    title: {
        fontWeight: "light" | "regular" | "medium" | "bold";
        text: string;
    };
    count: string | number;
    percentage: {
        color: keyof ValidColors;
        text: string | number;
    };
    icon: {
        color: keyof ValidColors;
        component: React.ReactNode;
    };
    direction: "right" | "left";
}) {
    return (
        <Card>
            <SoftBox bgColor={bgColor} variant="gradient">
                <SoftBox p={2}>
                    <Grid container alignItems="center">
                        {direction === "left" ? (
                            <Grid item>
                                <SoftBox
                                    variant="gradient"
                                    bgColor={bgColor === "white" ? icon.color : "white"}
                                    color={bgColor === "white" ? "white" : "dark"}
                                    width="3rem"
                                    height="3rem"
                                    borderRadius="md"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    shadow="md"
                                >
                                    <Icon fontSize="small" color="inherit">
                                        {icon.component}
                                    </Icon>
                                </SoftBox>
                            </Grid>
                        ) : null}
                        <Grid item xs={8}>
                            <SoftBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                                <SoftTypography
                                    variant="button"
                                    color={bgColor === "white" ? "text" : "white"}
                                    opacity={bgColor === "white" ? 1 : 0.7}
                                    textTransform="capitalize"
                                    fontWeight={title.fontWeight}
                                >
                                    {title.text}
                                </SoftTypography>
                                <SoftTypography
                                    variant="h5"
                                    fontWeight="bold"
                                    color={bgColor === "white" ? "dark" : "white"}
                                >
                                    {count}{" "}
                                    <SoftTypography
                                        variant="button"
                                        color={percentage.color}
                                        fontWeight="bold"
                                    >
                                        {percentage.text}
                                    </SoftTypography>
                                </SoftTypography>
                            </SoftBox>
                        </Grid>
                        {direction === "right" ? (
                            <Grid item xs={4}>
                                <SoftBox
                                    variant="gradient"
                                    bgColor={bgColor === "white" ? icon.color : "white"}
                                    color={bgColor === "white" ? "white" : "dark"}
                                    width="3rem"
                                    height="3rem"
                                    marginLeft="auto"
                                    borderRadius="md"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    shadow="md"
                                >
                                    <Icon fontSize="small" color="inherit">
                                        {icon.component}
                                    </Icon>
                                </SoftBox>
                            </Grid>
                        ) : null}
                    </Grid>
                </SoftBox>
            </SoftBox>
        </Card>
    );
}

StatisticsCard.defaultProps = {
    bgColor: "white",
    title: {
        fontWeight: "medium",
        text: ""
    },
    percentage: {
        color: "success",
        text: ""
    },
    direction: "right"
};

export default StatisticsCard;
