const items = [
  {
    id: 1,
    name: 'Thanh',
  },
  { id: 2, name: 'ngoc' },
]

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Hello, World',
  }
}
