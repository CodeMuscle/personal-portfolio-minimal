import Image from 'next/image';
import Link from 'next/link';

import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';

export default async function Home() {

  const projects = await getProjects();
  
  return(

    <div className="">
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m <span className="bg-gradient-to-r from-purple-400 via-purple-800 to-blue-600  bg-clip-text text-transparent">Naveen!</span></h1>

      <p className="mt-3 text-xl text-gray-600">
        Aloha! Check out my projects!
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>


    <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
      <Link href={`/projects/${project.slug}`} key={project._id} className="border border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-2 transition-all ease-in-out duration-100">
        {project.image && (
          <Image src={project.image} alt={project.name} width={750} height={300} className= "object-cover rounded-lg border border-gray-500" />
        )}
        <div className="font-extrabold bg-gradient-to-r from-purple-400 via-purple-800 to-blue-600 mt-3 bg-clip-text text-transparent">
          {project.name}
        </div>
      </Link>
      ))}
    </div>
  </div>

  )
 

}
