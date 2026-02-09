
import { coreQuestions } from './questions_core';
import { extraMicroQuestions } from './questions_extra_micro';
import { consumerTheoryQuestions } from './questions_consumer_theory';
import { demandElasticityQuestions } from './questions_demand_elasticity';
import { productionTheoryQuestions } from './questions_production_theory';
import { costTheoryQuestions } from './questions_cost_theory';
import { marketStructuresQuestions } from './questions_market_structures';
import { macroeconomicsQuestions } from './questions_macroeconomics';
import { islmQuestions } from './questions_islm';
import { islmNumericalQuestions } from './questions_islm_numerical';

export const questions = [
    ...coreQuestions,
    ...extraMicroQuestions,
    ...consumerTheoryQuestions,
    ...demandElasticityQuestions,
    ...productionTheoryQuestions,
    ...costTheoryQuestions,
    ...marketStructuresQuestions,
    ...macroeconomicsQuestions,
    ...islmQuestions,
    ...islmNumericalQuestions
];
