import React from "react";
import { Card, Row } from "antd";

const Cards = ({currentBalance,income,expenses,showExpenseModal,showIncomeModal,cardStyle,reset}) =>  {
  return (
    <Row style={{display: "flex",flexWrap: "wrap",gap: "16px", justifyContent: "space-between"}}>
      <Card title="Current Balance" style={cardStyle}>
            < p style={{fontWeight:"400", fontSize:"1rem"}}>₹ {currentBalance}</p>
             <button className="btn btn-blue" onClick={reset}>Reset Balance</button>
        </Card>

        <Card title="Total Income" style={cardStyle}>
            <p style={{fontWeight:"400",fontSize:"1rem"}}>₹ {income}</p>
            <button className="btn btn-blue" onClick={showIncomeModal}>Add Income</button>
        </Card>

        <Card title="Total Expense" style={cardStyle}>
            <p style={{fontWeight:"400",fontSize:"1rem"}}>₹ {expenses}</p>
            <button className="btn btn-blue" onClick={showExpenseModal}>Add Expense</button>
        </Card>
    </Row>
  );
}

export default Cards;