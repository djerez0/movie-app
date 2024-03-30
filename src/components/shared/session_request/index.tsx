import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {FC} from "react";
import {SoftButton} from "../soft_button";
import {getRequestToken} from "app/app/utils";

export const SessionRequest: FC<{open: boolean; onClose: () => void; redirect_to: string}> = ({
    onClose,
    redirect_to,
    open
}) => {
    const getSession = async () => {
        const requestToken = await getRequestToken();
        window.open(
            `https://www.themoviedb.org/authenticate/${requestToken.request_token}?redirect_to=${redirect_to}`,
            "_self"
        );
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Autenticación</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Debes crear una sesión para agregar a favoritos, deseas continuar?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <SoftButton variant="gradient" color="warning" onClick={onClose}>
                    Cancelar
                </SoftButton>
                <SoftButton variant="gradient" color="success" onClick={getSession}>
                    Continuar
                </SoftButton>
            </DialogActions>
        </Dialog>
    );
};
