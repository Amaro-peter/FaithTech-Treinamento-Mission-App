import HomePage from "./Pages/HomePage/HomePage"
import LandingPage from "./Pages/LandingPage/LandingPage"
import {Routes, Route} from 'react-router-dom'
import PageLayout from "./Layout/PageLayout/PageLayout"
import AuthDonorForm from "./Pages/AuthForms/AuthDonorPages/AuthDonorForm"
import AuthMissionaryForm from "./Pages/AuthForms/AuthMissionaryPages/AuthMissionaryForm"
import AuthSocialProjectForm from "./Pages/AuthForms/AuthSocialProjectPages/AuthSocialProjectForm"


function App () {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/donorSignPage" element={<AuthDonorForm />} />
          <Route path="/missionarySignPage" element={<AuthMissionaryForm />} />
          <Route path="/socialProjectSignPage" element={<AuthSocialProjectForm />} />
        </Routes>
      </PageLayout>  
    </>
  )
}

export default App
