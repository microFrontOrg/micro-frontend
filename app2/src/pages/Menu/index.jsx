import { Form, Button, Row } from 'antd'
import { FieldFormWithCol, Container, ButtonWrap } from '@/components'
import { filterInvalidValue } from '@/utils/filters'

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
}

function Menu (props) {
  const { form } = props
  const fields = [
    {
      type: 'input',
      id: 'name',
      col: 8,
      formItem: { label: '菜单名称', ...formItemLayout }
    },
    {
      type: 'input',
      id: 'path',
      col: 8,
      formItem: { label: '菜单路径', ...formItemLayout }
    },
    {
      type: 'number',
      id: 'order',
      col: 8,
      formItem: { label: '菜单排序', ...formItemLayout }
    }
  ]

  function getData () {
    form.validateFields((error, values) => {
      console.log(filterInvalidValue(values))
    })
  }

  return (
    <Container>
      <Form>
        <Row>
          {fields.map(field => {
            return <FieldFormWithCol {...field} key={field.id} form={form} />
          })}
        </Row>
        <RowStyle>
          <ButtonWrap>
            <Button onClick={getData} type='primary'>
              查询
            </Button>
            <Button onClick={getData} type='primary'>
              重置
            </Button>
            <Button onClick={getData} type='primary'>
              导出
            </Button>
          </ButtonWrap>
        </RowStyle>
      </Form>
    </Container>
  )
}

export default Form.create()(Menu)

const RowStyle = styled(Row)`
  text-align: center;
`
