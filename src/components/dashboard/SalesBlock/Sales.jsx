import { useState, useEffect } from 'react';
import { Icons } from "../../../assets/icons";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { SalesBlockWrap } from "./Sales.styles";

const SalesBlock = () => {
  const [collections, setCollections] = useState(0);
  const [signups, setSignups] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [bouncedCheques, setBouncedCheques] = useState(0);

  useEffect(() => {
    // Fetch data for collections, signups, total revenue, and bounced cheques
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data for collections
      const collectionsResponse = await fetch('http://localhost:3000/Schools');
      const collectionsData = await collectionsResponse.json();
      console.log("Hello",collectionsData);
      // Calculate total collections
      const totalCollections = collectionsData.reduce((total, collection) => total + parseInt(collection.amount), 0);
      setCollections(totalCollections);

      // Fetch data for signups (assuming it's a separate endpoint)
      const signupsResponse = await fetch('http://localhost:3000/Schools');
      const signupsData = await signupsResponse.json();
      setSignups(signupsData.length);

      // Fetch data for invoices to calculate total revenue
      const invoicesResponse = await fetch('http://localhost:3000/Invoice');
      const invoicesData = await invoicesResponse.json();
      const totalRev = invoicesData.reduce((total, invoice) => total + parseInt(invoice.amountDue), 0);
      setTotalRevenue(totalRev);

      // Fetch data for bounced cheques
      const bouncedChequesResponse = await fetch('http://localhost:3000/BouncedCheques');
      const bouncedChequesData = await bouncedChequesResponse.json();
      setBouncedCheques(bouncedChequesData.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SalesBlockWrap>
      <div className="block-head">
        <div className="block-head-l">
          <BlockTitle className="block-title">
            <h3>Today&apos;s Sales</h3>
          </BlockTitle>
          <p className="text">Sales Summary</p>
        </div>
        <div className="block-head-r">
          <button type="button" className="export-btn">
            <img src={Icons.ExportDark} alt="" />
            <span className="text">Export</span>
          </button>
        </div>
      </div>
      <BlockContentWrap>
        <div className="cards">
          <div className="card-item card-misty-rose">
            <div className="card-item-icon">
              <img src={Icons.CardSales} alt="" />
            </div>
            <div className="card-item-value">${collections}</div>
            <p className="card-item-text text">Collections</p>
          </div>
          <div className="card-item card-latte">
            <div className="card-item-icon">
              <img src={Icons.CardOrder} alt="" />
            </div>
            <div className="card-item-value">{signups}</div>
            <p className="card-item-text text">Sign ups</p>
          </div>
          <div className="card-item card-nyanza">
            <div className="card-item-icon">
              <img src={Icons.CardProduct} alt="" />
            </div>
            <div className="card-item-value">${totalRevenue}</div>
            <p className="card-item-text text">Total revenue</p>
          </div>
          <div className="card-item card-pale-purple">
            <div className="card-item-icon">
              <img src={Icons.CardCustomer} alt="" />
            </div>
            <div className="card-item-value">{bouncedCheques}</div>
            <p className="card-item-text text">Bounced Cheques</p>
          </div>
        </div>
      </BlockContentWrap>
    </SalesBlockWrap>
  );
};

export default SalesBlock;
