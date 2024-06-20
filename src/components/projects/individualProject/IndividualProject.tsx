interface IndividualProjectProps {
  project: Project;
}

export default function IndividualProject({ project }: IndividualProjectProps) {
  return (
    <div className="rounded-3xl bg-gray p-8 flex flex-col gap-8">
      <div className="flex justify-center">
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-40 h-40 rounded-2xl bg-white"
        />
      </div>
      <section className="flex flex-col gap-2 items-center">
        <p className="text-2xl font-bold">{project.title}</p>
        <p className="text-center">{project.description}</p>
      </section>
    </div>
  );
}
