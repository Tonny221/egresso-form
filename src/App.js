import Header from "./components/Header";
import PersonalData from "./containers/PersonalData";
import AcademicData from "./containers/AcademicData";
import CourseInfoData from "./containers/CourseInfoData";
import ProInfoData from "./containers/ProInfoData";
import PCDInfo from "./containers/PCDInfo";
import { Box, Button } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <PersonalData />
      <AcademicData />
      <CourseInfoData />
      <ProInfoData />
      <PCDInfo />
      <>
        <Button variant="contained" sx={{width: '6rem', marginBottom: '2rem'}}>Enviar</Button>
      </>
    </Box>
  );
}

export default App;
