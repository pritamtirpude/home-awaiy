"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Title from "./title";

function Description({ description }: { description: string }) {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);

  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullDescriptionShown((prevState) => !prevState);
  };

  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.splice(0, 100).join(" ") + "..."
      : description;
  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="font-light leading-loose text-muted-foreground">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button variant="link" className="pl-0" onClick={toggleDescription}>
          {isFullDescriptionShown ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
}

export default Description;
