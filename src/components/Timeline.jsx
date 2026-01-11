import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import TimelineEntry from "./TimelineEntry";

export default function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Collect database information
  useEffect(() => {
    async function fetchTimeline() {
      try {
        const { data, error } = await supabase
          .from("timeline")
          .select("*")
          .order("event_date", { ascending: false, nullsFirst: false });
        if (error) throw error;
        setTimeline(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching timeline:", err.message);
      }
    }
    fetchTimeline();
  }, []);

  if (isLoading) {
    return (
      <span className="skeleton skeleton-text mx-auto my-auto">
        Timeline loading...
      </span>
    );
  } else {
    return (
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timeline.map((entry, index) => (
          <TimelineEntry
            key={entry.id}
            index={index}
            date={entry.event_date}
            title={entry.event_title}
            details={entry.event_details}
            imageUrl={entry.event_image_url}
          />
        ))}
      </ul>
    );
  }
}
