import Header from "./components/Header";
import PersonalData from "./containers/PersonalData";
import AcademicData from "./containers/AcademicData";
import CourseInfoData from "./containers/CourseInfoData";
import ProInfoData from "./containers/ProInfoData";

function App() {
  return (
    <>
      <Header />
      <PersonalData />
      <AcademicData />
      <CourseInfoData />
      <ProInfoData />
    </>
  );
}

export default App;
