import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Edit, Search, Toolbar, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      <GridComponent id='gridcomp-employees' dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width="auto">
        <ColumnsDirective>
          {employeesGrid.map((item,index) =>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services ={[ Resize, Sort, ContextMenu, Filter, Page, Edit, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Employees