
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
import { multiplierAcceleratorQuestions } from './questions_multiplier_accelerator';
import { growthModelsQuestions } from './questions_growth_models';
import { inflationPhillipsQuestions } from './questions_inflation_phillips';
import { indianEconomyQuestions } from './questions_indian_economy';
import { indianEconomyFiscalNumericals } from './questions_indian_economy_fiscal';
import { indianEconomyPovertyNumericals } from './questions_indian_economy_poverty';
import { advancedToughQuestions } from './questions_advanced_tough';
import { mockHardQuestions } from './questions_mock_hard';
import { sectionTestQuestions } from './questions_section_tests';
import { weakAreaQuestions } from './questions_weak_areas';

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
    ...islmNumericalQuestions,
    ...multiplierAcceleratorQuestions,
    ...growthModelsQuestions,
    ...inflationPhillipsQuestions,
    ...indianEconomyQuestions,
    ...indianEconomyFiscalNumericals,
    ...indianEconomyPovertyNumericals,
    ...advancedToughQuestions,
    ...mockHardQuestions,
    ...sectionTestQuestions,
    ...weakAreaQuestions
];
