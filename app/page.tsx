import Image from 'next/image';

import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';

export default async function Home() {

  const projects = await getProjects();
  
  return(

    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m <span className="bg-gradient-to-r from-purple-400 via-purple-800 to-blue-600  bg-clip-text text-transparent">Ganesh!</span></h1>
    {projects.map((project) => (
    <div key={project._id}>
      {project.name}
    </div>
    ))}
  </div>

  )
 

}
