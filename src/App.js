import Header from "./components/Header";
import PersonalData from "./containers/PersonalData";
import AcademicData from "./containers/AcademicData";
import CourseInfoData from "./containers/CourseInfoData";
import ProInfoData from "./containers/ProInfoData";
import PCDInfo from "./containers/PCDInfo";

function App() {
  return (
    <>
      <Header />
      <PersonalData />
      <AcademicData />
      <CourseInfoData />
      <ProInfoData />
      <PCDInfo />
    </>
  );
}

export default App;
