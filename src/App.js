import Header from "./components/Header";
import PersonalData from "./containers/PersonalData";
import AcademicData from "./containers/AcademicData";
import CourseInfoData from "./containers/CourseInfoData";

function App() {
  return (
    <>
      <Header />
      <PersonalData />
      <AcademicData />
      <CourseInfoData />
    </>
  );
}

export default App;
