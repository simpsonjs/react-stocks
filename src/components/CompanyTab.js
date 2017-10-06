import React from 'react';

const CompanyTab = ({ companyInfo }) => {

  if (!companyInfo.data) return null;

  function execs() {
    return companyInfo.data.companyOfficers.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.title}</td>
          <td>{item.totalPay ? item.totalPay.fmt : 'N/A'}</td>
          <td>{item.exercisedValue ? item.exercisedValue.fmt : 'N/A'}</td>
          <td>{item.age}</td>
        </tr>
      );
    });
  }

  return (
    <div>

      <div className="section-heading">
        <h3 className="blue-header">Company profile</h3>
      </div>

      <div className="col-md-6">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Address</td>
              <td className="rightPull">{companyInfo.data.address1}</td>
            </tr>
            <tr>
              <td className="leftPull">City</td>
              <td className="rightPull">{companyInfo.data.city}</td>
            </tr>
            <tr>
              <td className="leftPull">State</td>
              <td className="rightPull">{companyInfo.data.state}</td>
            </tr>
            <tr>
              <td className="leftPull">Zip</td>
              <td className="rightPull">{companyInfo.data.zip}</td>
            </tr>
            <tr>
              <td className="leftPull">Country</td>
              <td className="rightPull">{companyInfo.data.country}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-md-6">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Phone</td>
              <td className="rightPull">{companyInfo.data.phone}</td>
            </tr>
            <tr>
              <td className="leftPull">Website</td>
              <td className="rightPull">{companyInfo.data.website}</td>
            </tr>
            <tr>
              <td className="leftPull">Industry</td>
              <td className="rightPull">{companyInfo.data.industry}</td>
            </tr>
            <tr>
              <td className="leftPull">Sector</td>
              <td className="rightPull">{companyInfo.data.sector}</td>
            </tr>
            <tr>
              <td className="leftPull">Full time employees</td>
              <td className="rightPull">{companyInfo.data.fullTimeEmployees}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="section-heading blue-header">Description</h3>
        <p className="section-heading">{companyInfo.data.longBusinessSummary}</p>
      </div>

      <h3 className="section-heading blue-header">Key Executives</h3>
      <div className="col-md-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Pay</th>
              <th>Execised</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {execs()}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default CompanyTab;
