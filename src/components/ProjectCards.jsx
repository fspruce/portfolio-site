export default function ProjectCards({
  imageUrl,
  title,
  description,
  techStack,
  dateUploaded,
}) {
  const techList = techStack ? techStack.split("/") : [];
  const daysForNewPost = 14; // Set this as the number of days for a post to be classed as new

  function isNewPost() {
    const today = new Date();
    const postDate = new Date(dateUploaded);
    const postTimeDiff = today - postDate;
    return postTimeDiff <= daysForNewPost * 86400000;
  }

  return (
    <div className={"card text-primary bg-primary-content shadow-sm"}>
      <figure className="h-48 w-full rounded-md">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNewPost() && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{description}</p>
        {techList.map((tech) => (
          <div className="card-actions justify-end" key={tech}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
