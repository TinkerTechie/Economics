
export const statisticsEconometricsData = {
    id: "topic_stats_econometrics",
    title: "Statistics & Econometrics for Economics",
    sections: [
        {
            title: "Descriptive Statistics",
            content: "Tools to summarize and describe data features.",
            keyPoints: [
                "Mean, Median, Mode: Measures of central tendency.",
                "Variance and Standard Deviation: Measures of dispersion.",
                "Skewness: Measures asymmetry (Left-skewed vs Right-skewed).",
                "Kurtosis: Measures 'tailedness' (Leptokurtic, Platykurtic)."
            ]
        },
        {
            title: "Correlation vs Causation",
            content: "Understanding the relationship between two variables.",
            keyPoints: [
                "Correlation (ρ): r = Cov(X,Y) / (σx × σy). Ranges from -1 to 1.",
                "Positive correlation: Variables move together.",
                "Negative correlation: Variables move in opposite directions.",
                "Correlation does NOT imply causation."
            ]
        },
        {
            title: "Simple Linear Regression (OLS)",
            content: "Estimating the relationship between an independent variable (X) and dependent variable (Y).",
            keyPoints: [
                "Model: Y = β0 + β1X + ε.",
                "Ordinary Least Squares (OLS): Minimizes the sum of squared residuals.",
                "R-squared (R²): Proportion of variance in Y explained by X.",
                "Unbiasedness: E[β-hat] = β."
            ]
        },
        {
            title: "BLUE and Gauss-Markov Theorem",
            content: "Conditions under which OLS is the best estimator.",
            keyPoints: [
                "BLUE: Best Linear Unbiased Estimator.",
                "Best: Smallest variance among all linear unbiased estimators.",
                "Assumptions: Linearity, No Multicollinearity, No Autocorrelation, Homoskedasticity.",
                "If assumptions hold, OLS is the most efficient choice."
            ]
        },
        {
            title: "Violations of OLS Assumptions",
            content: "What happens when things go wrong.",
            keyPoints: [
                "Heteroskedasticity: Variance of error term is not constant. (Efficiency lost).",
                "Autocorrelation: Errors in one period affect the next. (Common in time series).",
                "Multicollinearity: X variables are highly correlated. (Standard errors inflate).",
                "Omitted Variable Bias: Leaving out a relevant factor shifts the results."
            ]
        },
        {
            title: "Inference and Testing",
            content: "Determining if results are statistically significant.",
            keyPoints: [
                "t-test: Tests significance of individual coefficients.",
                "F-test: Tests significance of the overall model.",
                "p-value: Probability of seeing results if null hypothesis is true (should be < 0.05).",
                "Confidence Interval: Range where true parameter likely lies."
            ]
        }
    ]
};
