import React from 'react';

const StatsTab = ({ companyStats, tickerInfo }) => {

  if (!companyStats.data || !tickerInfo) return null;

  function itemCheck(item) {
    if (item === undefined) return '';
    else return item.fmt;
  }

  const { calendarEvents, defaultKeyStatistics, financialData } = companyStats.data;

  if (!calendarEvents || !defaultKeyStatistics || !financialData) return null;

  return (
    <div>

      <div className="section-heading blue-header">
        <h3>Valuation Measures</h3>
      </div>

      <div className="col-md-12">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Market Cap (intraday)</td>
              <td className="rightPull">{tickerInfo.marketCap}</td>
            </tr>
            <tr>
              <td className="leftPull">Enterprise Value</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.enterpriseValue)}</td>
            </tr>
            <tr>
              <td className="leftPull">Trailing P/E</td>
              <td className="rightPull">{tickerInfo.PERatio}</td>
            </tr>
            <tr>
              <td className="leftPull">Forward P/E</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.forwardPE)}</td>
            </tr>
            <tr>
              <td className="leftPull">Price/Sales (ttm)</td>
              <td className="rightPull">{tickerInfo.priceSaleRatio}</td>
            </tr>
            <tr>
              <td className="leftPull">Price/Book (mrq)</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.priceToBook)}</td>
            </tr>
            <tr>
              <td className="leftPull">Enterprise Value/Revenue</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.enterpriseToRevenue)}</td>
            </tr>
            <tr>
              <td className="leftPull">Enterprise Value/EBITDA</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.enterpriseToEbitda)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="section-heading blue-header">Financial Highlights</h3>
      <div className="col-md-12">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull table-bold">Fiscal Year</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Fiscal Year Ends</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.lastFiscalYearEnd)}</td>
            </tr>
            <tr>
              <td className="leftPull">Most Recent Quarter (mrq)</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.mostRecentQuarter)}</td>
            </tr>
            <tr>
              <td className="leftPull table-bold">Profitability</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Profit Margin</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.profitMargins)}</td>
            </tr>
            <tr>
              <td className="leftPull">Operating Margin (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.operatingMargins)}</td>
            </tr>
            <tr>
              <td className="leftPull table-bold">Management Effectiveness</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Return on Assets (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.returnOnAssets)}</td>
            </tr>
            <tr>
              <td className="leftPull">Return on Equity (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.returnOnEquity)}</td>
            </tr>
            <tr>
              <td className="leftPull table-bold">Income Statement</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Revenue (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.totalRevenue)}</td>
            </tr>
            <tr>
              <td className="leftPull">Revenue Per Share (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.revenuePerShare)}</td>
            </tr>
            <tr>
              <td className="leftPull">Quarterly Revenue Growth (yoy)</td>
              <td className="rightPull">{itemCheck(financialData.revenueGrowth)}</td>
            </tr>
            <tr>
              <td className="leftPull">Gross Profit (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.grossProfits)}</td>
            </tr>
            <tr>
              <td className="leftPull">EBITDA</td>
              <td className="rightPull">{itemCheck(financialData.ebitda)}</td>
            </tr>
            <tr>
              <td className="leftPull">Net Income Avi to Common (ttm)</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.netIncomeToCommon)}</td>
            </tr>
            <tr>
              <td className="leftPull">Diluted EPS (ttm)</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Quarterly Earnings Growth (yoy)</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.earningsQuarterlyGrowth)}</td>
            </tr>
            <tr>
              <td className="leftPull table-bold">Balance Sheet</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Total Cash (mrq)</td>
              <td className="rightPull">{itemCheck(financialData.totalCash)}</td>
            </tr>
            <tr>
              <td className="leftPull">Total Cash Per Share (mrq)</td>
              <td className="rightPull">{itemCheck(financialData.totalCashPerShare)}</td>
            </tr>
            <tr>
              <td className="leftPull">Total Debt (mrq)</td>
              <td className="rightPull">{itemCheck(financialData.totalDebt)}</td>
            </tr>
            <tr>
              <td className="leftPull">Total Debt/Equity (mrq)</td>
              <td className="rightPull">{itemCheck(financialData.debtToEquity)}</td>
            </tr>
            <tr>
              <td className="leftPull">Current Ratio (mrq)</td>
              <td className="rightPull">{itemCheck(financialData.currentRatio)}</td>
            </tr>
            <tr>
              <td className="leftPull">Book Value Per Share (mrq)</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.bookValue)}</td>
            </tr>
            <tr>
              <td className="leftPull table-bold">Cash Flow Statement</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Operating Cash Flow (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.operatingCashflow)}</td>
            </tr>
            <tr>
              <td className="leftPull">Levered Free Cash Flow (ttm)</td>
              <td className="rightPull">{itemCheck(financialData.freeCashflow)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="section-heading blue-header">Trading Information</h3>
      <div className="col-md-12">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Beta</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.beta)}</td>
            </tr>
            <tr>
              <td className="leftPull">52-Week Change</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">S&P500 52-Week Change</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.SandP52WeekChange)}</td>
            </tr>
            <tr>
              <td className="leftPull">52 Week High</td>
              <td className="rightPull">{tickerInfo.yearHigh}</td>
            </tr>
            <tr>
              <td className="leftPull">52 Week Low</td>
              <td className="rightPull">{tickerInfo.yearLow}</td>
            </tr>
            <tr>
              <td className="leftPull">50-Day Moving Average</td>
              <td className="rightPull">{tickerInfo.fiftyMovingAvg}</td>
            </tr>
            <tr>
              <td className="leftPull">200-Day Moving Average</td>
              <td className="rightPull">{tickerInfo.twoHundredMovingAvg}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="section-heading blue-header">Dividends & Splits</h3>
      <div className="col-md-12">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Forward Annual Dividend Rate</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Forward Annual Dividend Yield</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Trailing Annual Dividend Rate</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Trailing Annual Dividend Yield</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">5 Year Average Dividend Yield</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Payout Ratio</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Dividend Date</td>
              <td className="rightPull">{itemCheck(calendarEvents.dividendDate)}</td>
            </tr>
            <tr>
              <td className="leftPull">Ex-Dividend Date</td>
              <td className="rightPull">{itemCheck(calendarEvents.exDividendDate)}</td>
            </tr>
            <tr>
              <td className="leftPull">Last Split Factor (new per old)</td>
              <td className="rightPull">{defaultKeyStatistics.lastSplitFactor}</td>
            </tr>
            <tr>
              <td className="leftPull">Last Split Date</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.lastSplitDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="section-heading blue-header">Share Statistics</h3>
      <div className="col-md-12">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Avg Vol (3 month)</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Avg Vol (10 day)</td>
              <td className="rightPull"></td>
            </tr>
            <tr>
              <td className="leftPull">Shares Outstanding</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.sharesOutstanding)}</td>
            </tr>
            <tr>
              <td className="leftPull">Float</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.floatShares)}</td>
            </tr>
            <tr>
              <td className="leftPull">% Held by Insiders</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.heldPercentInsiders)}</td>
            </tr>
            <tr>
              <td className="leftPull">% Held by Institutions</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.heldPercentInstitutions)}</td>
            </tr>
            <tr>
              <td className="leftPull">Shares Short</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.sharesShort)}</td>
            </tr>
            <tr>
              <td className="leftPull">Short Ratio</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.shortRatio)}</td>
            </tr>
            <tr>
              <td className="leftPull">Short % of Float</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.shortPercentOfFloat)}</td>
            </tr>
            <tr>
              <td className="leftPull">Shares Short (prior month)</td>
              <td className="rightPull">{itemCheck(defaultKeyStatistics.sharesShortPriorMonth)}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default StatsTab;
