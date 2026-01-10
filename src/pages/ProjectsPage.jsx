import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ProjectCards from "../components/ProjectCards";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  //Collect database information
  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase.from("projects").select("*");
        if (error) throw error; // Handle errors
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err.message);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {projects.map((project) => (
        <ProjectCards
          key={project.id}
          imageUrl={project.image_url}
          title={project.title}
          description={project.description}
          techStack={project.tech_stack}
          dateUploaded={project.created_at}
        />
      ))}
    </div>
  );
}
