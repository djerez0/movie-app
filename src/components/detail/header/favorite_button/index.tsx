"use client";

import {IconButton, Tooltip} from "@mui/material";
import {IconHeart, IconHeartFilled} from "@tabler/icons-react";
import {addFavorite, getSession, isFavorite} from "app/app/utils";
import {SessionRequest} from "app/components/shared/session_request";
import {setSessionId, useSoftUIController} from "app/context";
import colors from "app/theme/base/palette";
import {useSearchParams} from "next/navigation";
import {FC, useCallback, useEffect, useState} from "react";

const FavoriteButton: FC<Pick<MovieDetail, "id">> = ({id}) => {
    const [open, setOpen] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [controller, dispatch] = useSoftUIController();
    const {session_id} = controller;
    const searchParams = useSearchParams();
    const requestToken = searchParams.get("request_token");
    const approved = searchParams.get("approved");

    const getSessionHandler = useCallback(async () => {
        if (session_id) return;
        if (approved === "true" && requestToken) {
            const result = await getSession(requestToken);
            if (result.success) {
                setSessionId(dispatch, result.session_id);
            }
        }
    }, [approved, requestToken, session_id, dispatch]);

    useEffect(() => {
        getSessionHandler();
    }, [getSessionHandler]);

    useEffect(() => {
        if (session_id) {
            isFavorite(id, session_id).then((res) => setFavorite(res.favorite));
        }
    }, [session_id, id]);

    return (
        <Tooltip title="Añadir a favoritos">
            <>
                <SessionRequest
                    onClose={() => setOpen(false)}
                    open={open}
                    redirect_to={window.location.href}
                />
                <IconButton
                    color="error"
                    onClick={
                        session_id
                            ? async () => {
                                  await addFavorite(id, !favorite, session_id);
                                  const add = await isFavorite(id, session_id);
                                  setFavorite(add.favorite);
                              }
                            : () => setOpen(true)
                    }
                >
                    {favorite ? (
                        <IconHeartFilled size={30} color={colors.error.main} />
                    ) : (
                        <IconHeart size={30} color={colors.error.main} />
                    )}
                </IconButton>
            </>
        </Tooltip>
    );
};

export default FavoriteButton;
