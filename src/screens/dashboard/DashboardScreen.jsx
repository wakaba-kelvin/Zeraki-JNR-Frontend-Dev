import { Customer, Revenue, Sales, TargetReality, Visitors, TopProducts, VolumeService, Sidebar } from "../../components";
import Navbar from "../../components/Navbar/Navbar";
import { DashboardScreenWrap } from "./DashboardScreen.styles";

const DashboardScreen = () => {
  return (
    <DashboardScreenWrap className="content-area">
      <div className="area-row ar-one">
        <Sales />
        <Visitors />
      </div>
      <div className="area-row ar-two">
        <Revenue />
        <Customer />
        <TargetReality />
        <TopProducts />
        <VolumeService />
      </div>
    </DashboardScreenWrap>
  );
};

export default DashboardScreen;
