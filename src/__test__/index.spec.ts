import app from '../app';

const server = app();

test('Should pass in terminal', () => {

});

test('Should get a 200 OK', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/',
  });
  console.log(response);
  expect(response.statusCode).toBe(200);
});