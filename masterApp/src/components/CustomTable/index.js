/*
 * @Description: 自定义Table组件
 * @Author: 郭军伟
 * @Date: 2020-03-30 10:19:55
 * @lastEditTime: Do not edit
 */

import { Table, Pagination } from 'antd';
import { Fragment } from 'react';

class CustomTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      dataSource = [],
      columns = [],
      rowSelection = {},
      rowKey = (record, key) => key,
      total = 0,
      rows = 10,
      page = 1,
      pageChangeFun = () => { }
    } = this.props
    let tableScrollWidth = 0;
    if (columns.every(item => item.width)) {
      tableScrollWidth = columns.map(item => item.width).reduce((pre, cur) => {
        return pre + cur;
      })
    }
    return (
      <Fragment>
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered
          rowKey={rowKey}
          rowSelection={rowSelection}
          scroll={{ x: `${tableScrollWidth}px` }}
          pagination={false}
        />
        <Pagination
          total={total}
          showTotal={total => `共 ${total} 条 第${page}页`}
          pageSize={rows}
          current={page}
          onShowSizeChange={(current, size) => pageChangeFun(1, size)}
          onChange={(page, pageSize) => pageChangeFun(page, pageSize)}
          showSizeChanger
          showQuickJumper
          style={{ margin: '20px 0' }}
        />
      </Fragment>
    )
  }
}

CustomTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  rowSelection: PropTypes.object,
  rowKey: PropTypes.func,
  total: PropTypes.number,
  rows: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pageChangeFun: PropTypes.func.isRequired
}

export default CustomTable;

