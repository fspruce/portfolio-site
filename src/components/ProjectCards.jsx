export default function ProjectCards({
  imageUrl,
  title,
  description,
  techStack,
  dateUploaded,
  dateUpdated,
  githubLink,
  liveLink,
}) {
  const techList = techStack ? techStack.split("/") : [];
  const daysForNewPost = 14; // Set this as the number of days for a post to be classed as new
  console.log(liveLink, githubLink);
  function isNewPost(date) {
    const today = new Date();
    const postDate = new Date(date);
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
          {isNewPost(dateUploaded) && (
            <div className="badge badge-secondary">NEW</div>
          )}
          {isNewPost(dateUpdated) && (
            <div className="badge badge-secondary">UPDATED</div>
          )}
        </h2>
        <p>{description}</p>

        <div className="card-actions justify-between">
          <a
            className="btn"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub deployment link"
          >
            GitHub Repo
          </a>
          {liveLink && (
            <a
              className="btn"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live deployment link"
            >
              Live Deployment
            </a>
          )}
        </div>

        <div className="card-actions mt-3 justify-end">
          {techList.map((tech) => (
            <div className="badge badge-secondary" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
