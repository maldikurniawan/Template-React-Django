import { CompCardContainer } from "../../components";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <CompCardContainer>
        <div className="font-medium">Article</div>
      </CompCardContainer>
      <CompCardContainer>
        <div>Article</div>
      </CompCardContainer>
    </div>
  );
};

export default DashboardPage;
