
import { useLoaderData } from "react-router-dom"
import FormComment from "../components/FormComment";

function ProjectPage() {
const projects = useLoaderData()

  

  return (
    <section>
      <h2 className="text-3xl">PAGE PROJET</h2>
      <h3> {projects.title} </h3>
      <p>Technos utilisées : {projects.stack}</p>
      <p> {projects.description} </p>
      <FormComment />
    </section>
  );
}

export default ProjectPage;
