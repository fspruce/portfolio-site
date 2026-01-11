export default function TimelineEntry({
  index,
  date,
  title,
  details,
  imageUrl,
}) {
  const isFirst = index === 0;
  const isTimelineStart = index % 2 === 0;
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const daySuffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";

    return `${day}${daySuffix} ${month} ${year}`;
  }

  function formatDetails(details) {
    const detailsArray = details.split("//");
    console.log("Here");
    return (
      <div>
        {detailsArray.map((paragraph, index) => (
          <p key={index}>
            <br />
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  return (
    <li>
      {!isFirst && <hr />}{" "}
      {/* Render <hr /> only if it's not the first entry */}
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          (isTimelineStart ? "timeline-start md:text-end" : "timeline-end") +
          " mb-10 bg-base-200 p-10 lg:p-20 border border-base-300 rounded-4xl shadow-2xl max-w-[90%]"
        }
      >
        <time className="font-mono italic">{formatDate(date)}</time>
        <div className="text-lg font-black">{title}</div>
        {details.includes("//") ? formatDetails(details) : details}
        {imageUrl && (
          <div className="flex justify-center">
            <img src={imageUrl} alt={title} className="lg:max-w-[50%] mt-3" />
          </div>
        )}
      </div>
      <hr />
    </li>
  );
}
