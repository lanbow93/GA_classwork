import Receipt from "./Receipt";

function Receipts(props) {
  return props.receipts.map((receipt, index) => (
    <Receipt receipt={receipt} key={index} />
  ));
}

export default Receipts;
