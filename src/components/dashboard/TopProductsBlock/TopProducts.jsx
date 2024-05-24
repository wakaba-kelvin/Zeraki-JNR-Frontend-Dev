import { TOP_PRODUCTS_DATA } from "../../../data/mockData";
import { BlockTitle } from "../../../styles/global/default";
import Invoices from "../../Invoices/Invoices"
import { TopProductsWrap } from "./TopProducts.styles";

const TopProducts = () => {
  return (
    <TopProductsWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Invoices Due</h3>
        </BlockTitle>
      </div>
      <div className="tbl-products">
       <Invoices/>
      </div>
    </TopProductsWrap>
  );
};

export default TopProducts;
