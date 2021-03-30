import { Console } from 'console';
import ClientHttpResitory from './cliente-http.repository';
import { ClientHttpResitoryImpl } from './cliente-http.repository.impl';

describe('ClientHttpResitoryImpl', () => {
  let clientHttpResitory: ClientHttpResitory;
  beforeEach(async () => {
    clientHttpResitory = new ClientHttpResitoryImpl();
  });

  it('should be defined', async () => {
    const data = {
      to: '554498682502',
      message: 'vai loco Minha mensagem HA HA HA HA HA...',
    };

    expect(clientHttpResitory).toBeDefined();

    clientHttpResitory
      .send(data)
      .then((response) => {
        console.log('NOZES');
        console.log(response);
      })
      .catch((error) => {
        console.log('MERDA');
        console.log(error);
      });
  });
});
