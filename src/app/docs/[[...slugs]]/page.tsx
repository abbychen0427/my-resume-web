import React from "react";

const DocsDetail = ({ params }: { params: { slugs: string[] } }) => {
  if (params.slugs?.length === 2) {
    return (
      <h1>
        doc page of feature {params.slugs[0]} and concept {params.slugs[1]}
      </h1>
    );
  } else if (params.slugs?.length === 1) {
    return <h1>doc page of feature {params.slugs[0]}</h1>;
  }
  return <div>DocsDetail Page</div>;
};

export default DocsDetail;
