import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ProjectCards from "../components/ProjectCards";
import ProjectCardsSkeleton from "../components/ProjectCardsSkeleton";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Collect database information
  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false })
          .order("updated_at", { ascending: false });

        if (error) throw error;

        //Logic to sort which project appears first in the list
        const sortedProjects = data.sort((a, b) => {
          const dateA = new Date(a.updated_at || a.created_at);
          const dateB = new Date(b.updated_at || b.created_at);
          return dateB - dateA;
        });

        setProjects(sortedProjects);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err.message);
      }
    }
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <ProjectCardsSkeleton />
        <ProjectCardsSkeleton />
        <ProjectCardsSkeleton />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {projects.map((project) => (
          <ProjectCards
            key={project.id}
            imageUrl={project.image_url}
            title={project.title}
            description={project.description}
            techStack={project.tech_stack}
            dateUploaded={project.created_at}
            dateUpdated={project.updated_at}
            githubLink={project.github_link}
            liveLink={project.live_link}
          />
        ))}
      </div>
    );
  }
}
