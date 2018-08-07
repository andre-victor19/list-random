import React from 'react';
import { BootstrapTable } from 'react-bootstrap-table';

export default props => (
  <BootstrapTable
    data={props.data}
    csvFileName={props.csvFileName}
    ref={props.ref}
    height={props.height}
    search={props.search}
    searchPlaceholder={props.searchPlaceholder}
    scrollTop={props.scrollTop}
    cellEdit={props.cellEdit}
    deleteRow={props.deleteRow}
    selectRow={props.selectRow}
    pagination={!props.noPagination}
    ignoreSinglePage
    condensed
    hover
    multiColumnSearch
    exportCSV={props.exportCSV ? props.exportCSV : false}
    insertRow={props.insertRow ? props.insertRow : false}
  >
    {props.children}
  </BootstrapTable>
);
