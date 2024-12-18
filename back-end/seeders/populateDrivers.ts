import Driver from '../models/Driver';

const seedDrivers = async () => {
  await Driver.bulkCreate([
    {
      nome: 'Homer Simpson',
      descricao: 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
      carro: 'Plymouth Valiant 1973 rosa e enferrujado',
      avaliacao: '2/5 Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
      taxa_km: 'R$2,50/km',
      km_minimo: 1,
    },
    {
      nome: 'Dominic Toretto',
      descricao: 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.',
      carro: 'Dodge Charger R/T 1970 modificado',
      avaliacao: '4/5 Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!',
      taxa_km: 'R$5,00/km',
      km_minimo: 5,
    },
    {
      nome: 'James Bond',
      descricao: 'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.',
      carro: 'Aston Martin DB5 clássico',
      avaliacao: '5/5 Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.',
      taxa_km: 'R$10,00/km',
      km_minimo: 10,
    },
  ]);
};

seedDrivers()
  .then(() => {
    console.log('Tabela Driver populada com sucesso!');
    process.exit();
  })
  .catch((err) => {
    console.error('Erro ao popular tabela Driver:', err);
    process.exit(1);
  });
