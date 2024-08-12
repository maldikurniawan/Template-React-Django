import { CompCardContainer } from "../../components";
import LineChart from "../../charts/LineChart"
import BarChart from "../../charts/BarChart"
import PieChart from "../../charts/PieChart"
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <CompCardContainer>
          <div className="font-medium">Article</div>
        </CompCardContainer>
        <CompCardContainer>
          <div>Article</div>
        </CompCardContainer>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default DashboardPage;
