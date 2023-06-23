import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';

type Props = {
    params: { slug: string }
}


export default async function Page ({ params }: Props){
    const page = await getPage(params.slug);

    return(
        <div>
            <h1 className="font-extrabold text-4xl bg-gradient-to-r from-purple-400 via-purple-800 to-blue-600  bg-clip-text text-transparent drop-shadow">{page.title}</h1>

            <div className="text-lg text-gray-700 mt-10">
                <PortableText value={page.content} />
            </div>
        </div>
    )


}