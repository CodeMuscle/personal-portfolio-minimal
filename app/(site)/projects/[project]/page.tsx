import { getProject } from "@/sanity/sanity-utils";
import Link from "next/link";

import { PortableText } from '@portabletext/react';
import Image from "next/image";


type Props = {
    params: {
        project: string,
    };
}


export default async function Project({params}: Props){

    const slug = params.project;

    const project  = await getProject(slug);

    return(
        <div className="">
            <header className="flex justify-between items-center">
                <h1 className="font-extrabold text-4xl bg-gradient-to-r from-purple-400 via-purple-800 to-blue-600  bg-clip-text text-transparent drop-shadow">{project.name}</h1>
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className=" hover:underline hover:underline-offset-2 bg-gray-100 font-bold rounded-lg text-gray-500 px-4 py-3 border border-gray-200">View Project</Link>
            </header>

            {/* Content */}
            <div className="text-lg text-gray-700 mt-8 gap-2"><PortableText value={project.content} /></div>


            {/* Image */}
            <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-5 border-2 border-gray-700 object-cover rounded-lg" />
        </div>
    )
}