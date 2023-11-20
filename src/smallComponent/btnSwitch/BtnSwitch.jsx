import s from "./BtnSwitch.module.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ChangeWhenArr } from "../../store/PopularSlice";
import { useDispatch } from "react-redux";
import IOSSwitch from "./IOSSwitch";

const BtnSwitch = () => {
    const dispatch = useDispatch();

    // const IOSSwitch = styled(({ onChange, ...props }) => (
    //     <Switch
    //         focusVisibleClassName=".Mui-focusVisible"
    //         disableRipple
    //         onChange={onChange}
    //         {...props}
    //     />
    // ))(({ theme }) => ({
    //     width: 82,
    //     height: 26,
    //     padding: 0,
    //     "& .MuiSwitch-switchBase": {
    //         padding: 0,
    //         margin: 2,
    //         transitionDuration: "300ms",
    //         "&.Mui-checked": {
    //             transform: "translateX(56px)",
    //             color: "#fff",
    //             "& + .MuiSwitch-track": {
    //                 backgroundColor:
    //                     theme.palette.mode === "dark" ? "#2ECA45" : "purple",
    //                 opacity: 1,
    //                 border: 0,
    //             },
    //             "&.Mui-disabled + .MuiSwitch-track": {
    //                 opacity: 0.5,
    //             },
    //         },
    //         "&.Mui-focusVisible .MuiSwitch-thumb": {
    //             color: "#33cf4d",
    //             border: "6px solid black",
    //         },
    //         "&.Mui-disabled .MuiSwitch-thumb": {
    //             color:
    //                 theme.palette.mode === "light"
    //                     ? theme.palette.grey[100]
    //                     : theme.palette.grey[600],
    //         },
    //         "&.Mui-disabled + .MuiSwitch-track": {
    //             opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    //         },
    //     },
    //     "& .MuiSwitch-thumb": {
    //         boxSizing: "border-box",
    //         width: 22,
    //         height: 22,
    //     },
    //     "& .MuiSwitch-track": {
    //         borderRadius: 26 / 2,
    //         backgroundColor: theme.palette.mode === "light" ? "red" : "#39393D",
    //         opacity: 1,
    //         transition: theme.transitions.create(["background-color"], {
    //             duration: 500,
    //         }),
    //     },
    // }));

    return (
        <div className={s.btn_switch_container}>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
            >
                <Typography className={s.btn_switch_text}>Week</Typography>
                <FormControlLabel
                    control={
                        <IOSSwitch
                            sx={{ m: 2 }}
                            defaultChecked
                            onChange={() => {
                                dispatch(ChangeWhenArr("a"));
                                console.log("work");
                            }}
                        />
                    }
                />
                <Typography className={s.btn_switch_text}>Day</Typography>
            </Stack>
        </div>
    );
};

export default BtnSwitch;
