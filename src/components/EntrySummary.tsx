import React from 'react';
import EntrySummaryChart from './BalanceSummary/EntrySummaryChart';
import EntrySummaryList from './BalanceSummary/EntrySummaryList';

import  Container from '../components/Container';

const entriesGrouped = [
  {key: '1', description: 'Alimentação', amount: 201},
  {key: '2', description: 'Combustível', amount: 12},
  {key: '3', description: 'Aluguel', amount: 120},
  {key: '4', description: 'Lazer', amount: 250},
  {key: '5', description: 'Outros', amount: 1200},
];

const EntrySummary = () => {
  return (
    <Container title="Categorias" actionLabelText="Últimos 7 dias" actionButtonText="Ver mais">
      
      <EntrySummaryChart />
      <EntrySummaryList />
     
    </Container>
  );
};



export default EntrySummary;
