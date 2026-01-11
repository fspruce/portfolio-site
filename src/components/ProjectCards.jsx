import { useGetCurrentTheme } from "../hooks/getCurrentTheme";

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
  const currentTheme = useGetCurrentTheme();
  const techList = techStack ? techStack.split("/") : [];
  const daysForNewPost = 14; // Set this as the number of days for a post to be classed as new
  const uploadDate = new Date(dateUploaded);
  const updateDate = new Date(dateUpdated);

  function isNewPost(date) {
    const today = new Date();
    const postDate = date === "upload" ? uploadDate : updateDate;
    const postTimeDiff = today - postDate;
    return postTimeDiff <= daysForNewPost * 86400000;
  }

  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day.toString().length === 1 ? "0" + day : day}-${month.toString().length === 1 ? "0" + month : month}-${year}`;
  }

  return (
    <div
      className={
        (currentTheme !== "default"
          ? "bg-base-300 "
          : "bg-primary-content text-primary ") + "card shadow-sm"
      }
    >
      <figure className="h-70 w-full rounded-md">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <div className="card-title">
          <h2 className="card-title">
            {title}
            {isNewPost("upload") && (
              <div className="badge badge-success">NEW</div>
            )}
            {isNewPost("update") && (
              <div className="badge badge-info">UPDATED</div>
            )}
          </h2>
        </div>
        <p>{description}</p>

        <div className="card-actions justify-center lg:justify-between m-3">
          <a
            className={
              (currentTheme === "dark"
                ? "btn-primary "
                : currentTheme === "light"
                  ? "btn-secondary "
                  : "btn-accent ") + "btn"
            }
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub deployment link"
          >
            GitHub Repo
          </a>
          {liveLink && (
            <a
              className={
                (currentTheme === "dark"
                  ? "btn-secondary "
                  : currentTheme === "light"
                    ? "btn-accent "
                    : "btn-secondary-content ") + "btn"
              }
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live deployment link"
            >
              Live Deployment
            </a>
          )}
        </div>

        <div className="card-actions my-3 justify-center lg:justify-end">
          {techList.map((tech) => (
            <div
              className="badge-error p-2 text-primary-content badge"
              key={tech}
            >
              {tech}
            </div>
          ))}
        </div>

        <div>
          <p>
            Last Updated:{" "}
            {dateUpdated ? formatDate(updateDate) : formatDate(uploadDate)}
          </p>
        </div>
      </div>
    </div>
  );
}
