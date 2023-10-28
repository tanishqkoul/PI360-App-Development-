import React from 'react';
import { View, Text } from 'react-native';

// Import your components correctly
import LogoutScreen from './components/LogoutScreen';
import LoginScreen from './components/LoginScreen';
import ResearchPublicationsList from './components/Research/ResearchPublicationsList';
import ResearchPublicationDetails from './components/Research/ResearchPublicationDetails';
import IntellectualPropertyList from './components/IntellectualProperty/IntellectualPropertyList';
import IntellectualPropertyDetails from './components/IntellectualProperty/IntellectualPropertyDetails';
import ResearchProjectsList from './components/Research/ResearchProjectsList';
import ResearchProjectDetails from './components/Research/ResearchProjectDetails';
import ConsultancyList from './components/Consultancy/ConsultancyList';
import ConsultancyDetails from './components/Consultancy/ConsultancyDetails';
import BookPublicationsList from './components/BookPublication/BookPublicationsList';
import BookPublicationDetails from './components/BookPublication/BookPublicationDetails';
import ResearchGuidanceList from './components/Research/ResearchGuidanceList';
import ResearchGuidanceDetails from './components/Research/ResearchGuidanceDetails';
import AcademicResultList from './components/AcademicResult/AcademicResultList';
import AcademicResultDetails from './components/AcademicResult/AcademicResultDetails';

import {
  StaffDevelopmentTrainingList,
  StaffDevelopmentTrainingDetails,
  StaffDevelopmentWorkshopsList,
  StaffDevelopmentWorkshopDetails,
  StaffDevelopmentSeminarsList,
  StaffDevelopmentSeminarDetails,
  StaffDevelopmentConferencesList,
  StaffDevelopmentConferenceDetails,
  StaffDevelopmentExtensionLecturesList,
  StaffDevelopmentExtensionLectureDetails,
  StaffDevelopmentMembershipsList,
  StaffDevelopmentMembershipDetails,
  StaffDevelopmentEContentList,
  StaffDevelopmentEContentDetails,
} from './components/StaffDevelopment';

import StudentPlacementDetails from './components/StudentPlacement/StudentPlacementDetails';
import StudentPlacementList from './components/StudentPlacement/StudentPlacementList';
import StudentHigherStudiesList from './components/StudentPlacement/StudentHigherStudiesList';
import StudentHigherStudiesDetails from './components/StudentPlacement/StudentHigherStudiesDetails';
import StudentInternshipList from './components/StudentPlacement/StudentInternshipList';
import StudentInternshipDetails from './components/StudentPlacement/StudentInternshipDetails';


const App = () => {
  const researchPublicationId = 123; // Replace with the ID of the research publication you want to display

  return (
    <View style={styles.container}>
      <Text>Hi Tanishq, welcome to PI360 App Development</Text>
      <LoginScreen>
        <Text>Login Screen</Text>
      </LoginScreen>
      <LogoutScreen>
        <Text>Logout Screen</Text>
      </LogoutScreen>
      <ResearchPublicationsList>
        <Text>Research Publications List</Text>
      </ResearchPublicationsList>
      <ResearchPublicationDetails researchPublicationId={researchPublicationId}>
        <Text>Research Publication Details</Text>
      </ResearchPublicationDetails>
      <IntellectualPropertyList>
        <Text>Intellectual Property List</Text>
      </IntellectualPropertyList>
      <IntellectualPropertyDetails>
        <Text>Intellectual Property Details</Text>
      </IntellectualPropertyDetails>
      <ResearchProjectsList>
        <Text>Research Projects List</Text>
      </ResearchProjectsList>
      <ResearchProjectDetails> 
        <Text>Research Project Details</Text>
      </ResearchProjectDetails >
      <ConsultancyList > 
        <Text>Consultancy Services List</Text>
      </ConsultancyList > 
      <ConsultancyDetails>
        <Text>Consultancy Service Details</Text>
      </ConsultancyDetails>
      <BookPublicationsList >
        <Text>Book Publications List</Text>
      </BookPublicationsList >
      <BookPublicationDetails> 
        <Text>Book Publication Details</Text>
      </BookPublicationDetails> 
      <ResearchGuidanceList>
        <Text>Research Guidance List</Text>
      </ResearchGuidanceList>
      <ResearchGuidanceDetails>
        <Text>Research Guidance Details</Text>
      </ResearchGuidanceDetails> 
      <AcademicResultList> 
        <Text>Academic Result List</Text>
      </AcademicResultList> 
      <AcademicResultDetails>
        <Text>Academic Result Details</Text>
      </AcademicResultDetails>
      <StaffDevelopmentTrainingList>
        <Text>Staff Development Training List</Text>
      </StaffDevelopmentTrainingList>
      <StaffDevelopmentTrainingDetails>
        <Text>Staff Development Training Details</Text>
      </StaffDevelopmentTrainingDetails >
      <StaffDevelopmentWorkshopsList> 
        <Text>Staff Development Workshops List</Text>
      </StaffDevelopmentWorkshopsList> 
      <StaffDevelopmentWorkshopDetails>
        <Text>Staff Development Workshop Details</Text>
      </StaffDevelopmentWorkshopDetails>
      <StaffDevelopmentSeminarsList>
        <Text>Staff Development Seminars List</Text>
      </StaffDevelopmentSeminarsList>
      <StaffDevelopmentSeminarDetails>
        <Text>Staff Development Seminar Details</Text>
      </StaffDevelopmentSeminarDetails>
      <StaffDevelopmentConferencesList>
        <Text>Staff Development Conferences List</Text>
      </StaffDevelopmentConferencesList>
      <StaffDevelopmentConferenceDetails>
        <Text>Staff Development Conference Details</Text>
      </StaffDevelopmentConferenceDetails>
      <StaffDevelopmentExtensionLecturesList>
        <Text>Staff Development Extension Lectures List</Text>
      </StaffDevelopmentExtensionLecturesList>
      <StaffDevelopmentExtensionLectureDetails>
        <Text>Staff Development Extension Lecture Details</Text>
      </StaffDevelopmentExtensionLectureDetails>
      <StaffDevelopmentMembershipsList>
        <Text>Staff Development Memberships List</Text>
      </StaffDevelopmentMembershipsList>
      <StaffDevelopmentMembershipDetails>
        <Text>Staff Development Membership Details</Text>
      </StaffDevelopmentMembershipDetails>
      <StaffDevelopmentEContentList> 
        <Text>e-Content List</Text>
      </StaffDevelopmentEContentList> 
      <StaffDevelopmentEContentDetails>
        <Text>e-Content Details</Text>
      </StaffDevelopmentEContentDetails>
      <StudentPlacementList> 
        <Text>Student Placements</Text> 
      </StudentPlacementList> 
      <StudentPlacementDetails>
        <Text>Student Placement Details</Text>
      </StudentPlacementDetails>
      <Text>Student Higher Studies List</Text>
      <StudentHigherStudiesList>
        <Text>Student Higher Studies List</Text>
      </StudentHigherStudiesList>
      <StudentHigherStudiesDetails>
        <Text>Student Higher Studies Details</Text>
      </StudentHigherStudiesDetails>
      <StudentInternshipList>
        <Text>Student Internships List</Text>
      </StudentInternshipList>
      <StudentInternshipDetails>
      <Text>Student Internship Details</Text>
      </StudentInternshipDetails>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default App;
