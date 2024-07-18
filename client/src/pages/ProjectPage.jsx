import { useLoaderData } from "react-router-dom";
import FormComment from "../components/FormComment";

function ProjectPage() {
  const projects = useLoaderData();

  return (
    <section className="px-5">
      <h2 className="text-3xl">PAGE PROJET</h2>
      <img src={`/src/assets/images/${projects.image_url}`} alt={projects.title} className="w-96 h-60 object-cover object-top"/>
      <h3> {projects.title} </h3>
      <p>Technos utilisées : {projects.stack}</p>
      <p> {projects.description} </p>
      <FormComment />
    </section>
  );
}

export default ProjectPage;
