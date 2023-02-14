import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { orderData } from "../../sample-data/order";
import ActionBtn from "../ActionBtn/ActionBtn";
import ModalMain from "../Modal/Modal";

export default function StudentPannelOrder(props) {
  const { SearchBar } = Search;
  const order = ['a'];
  const [modalShow, setModalShow] = React.useState(false);

  const columns = [
    {
      dataField: "id",
      text: "Sr.",
      formatter: (cell, row, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      dataField: "pkgType",
      text: "Pakage Type",
      formatter: (cell, row, index) => {
        return <span>{ }</span>;
      },
    },
    {
      dataField: "pkgId",
      text: "Order ID",
      formatter: (cell, row, index) => {
        return <span>{ }</span>;
      },
    },
    {
      dataField: "payment",
      text: "Payment Status",
      formatter: (cell, row, index) => {
        return <span>{ }</span>;
      },
    },
    {
      dataField: "action",
      text: "View Receipt",
      formatter: (cell, row, index) => {
        return (
          <span className="d-flex justify-content-center">
            <button className="e-btn" onClick={() => setModalShow(true)}>
              View
            </button>
          </span>
        );
      },
    },
  ];

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem(localStorage.key('id')));

  useEffect(() => {
    fetch(`https://inspiretostudy.up.railway.app/api/v1/mypackage/${userId.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('My Package---->', data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="p-3 py-1 w-100  mb-5 containerWithShadow">
        <ToolkitProvider keyField="id" data={order} columns={columns} search>
          {(props) => (
            <div className="container">
              <BootstrapTable keyField="id" data={order} columns={columns} />
            </div>
          )}
        </ToolkitProvider>
      </div>
    </>
  );
}
