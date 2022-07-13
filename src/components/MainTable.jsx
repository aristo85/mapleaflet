import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "react-resizable/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomData, setSelectedPoints } from "../redux/actions";

const MainTable = () => {
  const randData = useSelector((state) => state.dataPoints);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const colum = [
    {
      title: "Key",
      dataIndex: "key",
    },
    {
      title: "погрузки",
      dataIndex: "from",
      width: 200,
    },
    {
      title: "разгрузки",
      dataIndex: "to",
      width: 200,
    },
  ];
  const [data, setData] = useState([
    {
      key: "1",
      from: "Boran",
      to: "Boran",
    },
  ]);

  const columns = colum.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
    }),
  }));

  const handleRowClick = (selected) => {
    const findPair = randData.find((el) => el.startPoint.id === selected.id1);
    dispatch(
      setSelectedPoints([
        [findPair.startPoint.lat, findPair.startPoint.lon],
        [findPair.endPoint.lat, findPair.endPoint.lon],
      ])
    );
    setSelected(selected);
  };

  useEffect(() => {
    !randData && dispatch(fetchRandomData());
    if (randData) {
      const newTableData = randData.map((el, indx) => {
        return {
          key: indx + 1,
          from:
            el.startPoint.address.city + " - " + el.startPoint.address.street,
          to: el.endPoint.address.city + " - " + el.endPoint.address.street,
          id1: el.startPoint.id,
          id2: el.endPoint.id,
        };
      });
      setData(newTableData);
    }
  }, [randData]);

  return (
    <div className="dataTable">
      <Table
        columns={columns}
        pagination={false}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              handleRowClick(record);
            }, 
            className: `tableRow ${
              selected?.key === record.key ? "selectedRow" : ""
            }`,
          };
        }}
      />
    </div>
  );
};

export default MainTable;
