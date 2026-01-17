
import React from 'react';
import Layout from './components/Layout';
import ReportingForm from './components/ReportingForm';

const App: React.FC = () => {
  const handleReportSubmitted = (reportId: string) => {
    // In a full application, we might redirect the user to a 'My Reports' list
    // or show a notification. For the MVP citizen reporting screen, we just log it.
    console.log("Report successfully stored in Firestore:", reportId);
  };

  return (
    <Layout>
      <ReportingForm onReportSubmitted={handleReportSubmitted} />
    </Layout>
  );
};

export default App;
