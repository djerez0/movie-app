import {getDetail} from "app/app/utils";
import {DetailComponent} from "app/components/detail/detail";
import {HeaderDetail} from "app/components/detail/header";
import Poster from "app/components/detail/poster";
import {SoftBox} from "app/components/shared/soft_box.ts";
import {Metadata} from "next";

export const revalidate = 3600;

export async function generateMetadata({searchParams}: DetailProps): Promise<Metadata> {
    const {id} = searchParams;

    const data = await getDetail(id);

    return {
        title: `Movie App | ${data.title}`,
        description: data.overview,
        openGraph: {
            images: [data.backdrop_path]
        }
    };
}

export default async function Detail(props: DetailProps) {
    const {id} = props.searchParams;
    const data = await getDetail(id);

    return (
        <SoftBox>
            <Poster {...data} />
            <HeaderDetail {...data} />
            <DetailComponent {...data} />
        </SoftBox>
    );
}
