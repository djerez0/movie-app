import {SoftBox} from "app/components/shared/soft_box.ts";
import {SoftTypography} from "app/components/shared/soft_typography";
import {FC} from "react";

export const DetailItem: FC<{label: string; payload: string}> = ({label, payload}) => {
    return (
        <SoftBox mt={1}>
            <SoftTypography variant="h6">
                <strong>{label}</strong>: {payload}
            </SoftTypography>
        </SoftBox>
    );
};
