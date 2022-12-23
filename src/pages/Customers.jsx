import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Search, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent id='gridcomp-customer' dataSource={customersData} allowPaging allowSorting toolbar={['Search','Delete']} width="auto" editSettings={{ allowDeleting: true, allowEditing: true }}>
        <ColumnsDirective>
          {customersGrid.map((item,index) =>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services ={[ Selection, Sort, Filter, Page, Edit, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Customers