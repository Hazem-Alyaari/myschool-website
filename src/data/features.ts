import type {
  FeatureConnectionStep,
  FeatureGroup,
} from "@/types/feature";

/**
 * Verified Binaa School feature groups for the marketing Features page.
 * Every capability maps to routes/controllers present in the product repository.
 */
export const featureGroups = [
  {
    id: "students-admissions",
    anchor: "students-admissions",
    titleKey: "groups.studentsAdmissions.title",
    shortKey: "groups.studentsAdmissions.short",
    descriptionKey: "groups.studentsAdmissions.description",
    icon: "graduation-cap",
    screenshotKey: "students",
    screenshotAltKey: "groups.studentsAdmissions.screenshotAlt",
    capabilities: [
      {
        id: "admissions",
        titleKey: "groups.studentsAdmissions.capabilities.admissions.title",
        descriptionKey:
          "groups.studentsAdmissions.capabilities.admissions.description",
        icon: "user-plus",
      },
      {
        id: "records",
        titleKey: "groups.studentsAdmissions.capabilities.records.title",
        descriptionKey:
          "groups.studentsAdmissions.capabilities.records.description",
        icon: "users",
      },
      {
        id: "guardians",
        titleKey: "groups.studentsAdmissions.capabilities.guardians.title",
        descriptionKey:
          "groups.studentsAdmissions.capabilities.guardians.description",
        icon: "handshake",
      },
      {
        id: "student-portal",
        titleKey: "groups.studentsAdmissions.capabilities.studentPortal.title",
        descriptionKey:
          "groups.studentsAdmissions.capabilities.studentPortal.description",
        icon: "book-user",
      },
      {
        id: "guardian-portal",
        titleKey: "groups.studentsAdmissions.capabilities.guardianPortal.title",
        descriptionKey:
          "groups.studentsAdmissions.capabilities.guardianPortal.description",
        icon: "heart-handshake",
      },
    ],
  },
  {
    id: "academics",
    anchor: "academics",
    titleKey: "groups.academics.title",
    shortKey: "groups.academics.short",
    descriptionKey: "groups.academics.description",
    icon: "school",
    screenshotKey: "academics",
    screenshotAltKey: "groups.academics.screenshotAlt",
    capabilities: [
      {
        id: "structure",
        titleKey: "groups.academics.capabilities.structure.title",
        descriptionKey: "groups.academics.capabilities.structure.description",
        icon: "building-2",
      },
      {
        id: "curriculum",
        titleKey: "groups.academics.capabilities.curriculum.title",
        descriptionKey: "groups.academics.capabilities.curriculum.description",
        icon: "book-open",
      },
      {
        id: "schedule",
        titleKey: "groups.academics.capabilities.schedule.title",
        descriptionKey: "groups.academics.capabilities.schedule.description",
        icon: "calendar-days",
      },
      {
        id: "homework",
        titleKey: "groups.academics.capabilities.homework.title",
        descriptionKey: "groups.academics.capabilities.homework.description",
        icon: "pen-line",
      },
      {
        id: "teacher-workspace",
        titleKey: "groups.academics.capabilities.teacherWorkspace.title",
        descriptionKey:
          "groups.academics.capabilities.teacherWorkspace.description",
        icon: "user-cog",
      },
    ],
  },
  {
    id: "attendance-assessment",
    anchor: "attendance-assessment",
    titleKey: "groups.attendanceAssessment.title",
    shortKey: "groups.attendanceAssessment.short",
    descriptionKey: "groups.attendanceAssessment.description",
    icon: "clipboard-check",
    screenshotKey: "attendance",
    screenshotAltKey: "groups.attendanceAssessment.screenshotAlt",
    secondaryScreenshotKey: "seatNumbers",
    secondaryScreenshotAltKey: "groups.attendanceAssessment.seatNumbersAlt",
    capabilities: [
      {
        id: "attendance",
        titleKey: "groups.attendanceAssessment.capabilities.attendance.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.attendance.description",
        icon: "clipboard-list",
      },
      {
        id: "question-banks",
        titleKey:
          "groups.attendanceAssessment.capabilities.questionBanks.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.questionBanks.description",
        icon: "book-open",
      },
      {
        id: "digital-exams",
        titleKey:
          "groups.attendanceAssessment.capabilities.digitalExams.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.digitalExams.description",
        icon: "pen-line",
      },
      {
        id: "exam-papers",
        titleKey: "groups.attendanceAssessment.capabilities.examPapers.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.examPapers.description",
        icon: "file-text",
      },
      {
        id: "student-attempts",
        titleKey:
          "groups.attendanceAssessment.capabilities.studentAttempts.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.studentAttempts.description",
        icon: "book-user",
      },
      {
        id: "grading",
        titleKey: "groups.attendanceAssessment.capabilities.grading.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.grading.description",
        icon: "clipboard-check",
      },
      {
        id: "committees",
        titleKey: "groups.attendanceAssessment.capabilities.committees.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.committees.description",
        icon: "school",
      },
      {
        id: "certificates-reports",
        titleKey:
          "groups.attendanceAssessment.capabilities.certificatesReports.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.certificatesReports.description",
        icon: "file-badge",
      },
      {
        id: "analytics",
        titleKey: "groups.attendanceAssessment.capabilities.analytics.title",
        descriptionKey:
          "groups.attendanceAssessment.capabilities.analytics.description",
        icon: "chart-column",
      },
    ],
  },
  {
    id: "finance-accounting",
    anchor: "finance-accounting",
    titleKey: "groups.financeAccounting.title",
    shortKey: "groups.financeAccounting.short",
    descriptionKey: "groups.financeAccounting.description",
    icon: "wallet",
    screenshotKey: "finance",
    screenshotAltKey: "groups.financeAccounting.screenshotAlt",
    capabilities: [
      {
        id: "fees",
        titleKey: "groups.financeAccounting.capabilities.fees.title",
        descriptionKey:
          "groups.financeAccounting.capabilities.fees.description",
        icon: "receipt",
      },
      {
        id: "collections",
        titleKey: "groups.financeAccounting.capabilities.collections.title",
        descriptionKey:
          "groups.financeAccounting.capabilities.collections.description",
        icon: "wallet",
      },
      {
        id: "accounts",
        titleKey: "groups.financeAccounting.capabilities.accounts.title",
        descriptionKey:
          "groups.financeAccounting.capabilities.accounts.description",
        icon: "file-text",
      },
      {
        id: "accounting",
        titleKey: "groups.financeAccounting.capabilities.accounting.title",
        descriptionKey:
          "groups.financeAccounting.capabilities.accounting.description",
        icon: "landmark",
      },
      {
        id: "payroll",
        titleKey: "groups.financeAccounting.capabilities.payroll.title",
        descriptionKey:
          "groups.financeAccounting.capabilities.payroll.description",
        icon: "calculator",
      },
    ],
  },
  {
    id: "human-resources",
    anchor: "human-resources",
    titleKey: "groups.humanResources.title",
    shortKey: "groups.humanResources.short",
    descriptionKey: "groups.humanResources.description",
    icon: "briefcase",
    screenshotKey: "hr",
    screenshotAltKey: "groups.humanResources.screenshotAlt",
    capabilities: [
      {
        id: "employees",
        titleKey: "groups.humanResources.capabilities.employees.title",
        descriptionKey:
          "groups.humanResources.capabilities.employees.description",
        icon: "users",
      },
      {
        id: "staff-attendance",
        titleKey: "groups.humanResources.capabilities.staffAttendance.title",
        descriptionKey:
          "groups.humanResources.capabilities.staffAttendance.description",
        icon: "clipboard-list",
      },
      {
        id: "leave",
        titleKey: "groups.humanResources.capabilities.leave.title",
        descriptionKey: "groups.humanResources.capabilities.leave.description",
        icon: "calendar-days",
      },
      {
        id: "recruitment",
        titleKey: "groups.humanResources.capabilities.recruitment.title",
        descriptionKey:
          "groups.humanResources.capabilities.recruitment.description",
        icon: "user-plus",
      },
      {
        id: "self-service",
        titleKey: "groups.humanResources.capabilities.selfService.title",
        descriptionKey:
          "groups.humanResources.capabilities.selfService.description",
        icon: "user-cog",
      },
    ],
  },
  {
    id: "educational-supervision",
    anchor: "educational-supervision",
    titleKey: "groups.educationalSupervision.title",
    shortKey: "groups.educationalSupervision.short",
    descriptionKey: "groups.educationalSupervision.description",
    icon: "clipboard-list",
    screenshotKey: "supervision",
    screenshotAltKey: "groups.educationalSupervision.screenshotAlt",
    capabilities: [
      {
        id: "evaluations",
        titleKey:
          "groups.educationalSupervision.capabilities.evaluations.title",
        descriptionKey:
          "groups.educationalSupervision.capabilities.evaluations.description",
        icon: "clipboard-check",
      },
      {
        id: "visits",
        titleKey: "groups.educationalSupervision.capabilities.visits.title",
        descriptionKey:
          "groups.educationalSupervision.capabilities.visits.description",
        icon: "school",
      },
      {
        id: "feedback",
        titleKey: "groups.educationalSupervision.capabilities.feedback.title",
        descriptionKey:
          "groups.educationalSupervision.capabilities.feedback.description",
        icon: "messages",
      },
      {
        id: "teacher-view",
        titleKey: "groups.educationalSupervision.capabilities.teacherView.title",
        descriptionKey:
          "groups.educationalSupervision.capabilities.teacherView.description",
        icon: "eye",
      },
    ],
  },
  {
    id: "communication-operations",
    anchor: "communication-operations",
    titleKey: "groups.communicationOperations.title",
    shortKey: "groups.communicationOperations.short",
    descriptionKey: "groups.communicationOperations.description",
    icon: "messages",
    screenshotKey: "operations",
    screenshotAltKey: "groups.communicationOperations.screenshotAlt",
    capabilities: [
      {
        id: "notifications",
        titleKey:
          "groups.communicationOperations.capabilities.notifications.title",
        descriptionKey:
          "groups.communicationOperations.capabilities.notifications.description",
        icon: "bell",
      },
      {
        id: "conversations",
        titleKey:
          "groups.communicationOperations.capabilities.conversations.title",
        descriptionKey:
          "groups.communicationOperations.capabilities.conversations.description",
        icon: "messages",
      },
      {
        id: "documents",
        titleKey:
          "groups.communicationOperations.capabilities.documents.title",
        descriptionKey:
          "groups.communicationOperations.capabilities.documents.description",
        icon: "file-badge",
      },
      {
        id: "behavior",
        titleKey: "groups.communicationOperations.capabilities.behavior.title",
        descriptionKey:
          "groups.communicationOperations.capabilities.behavior.description",
        icon: "shield",
      },
      {
        id: "activities",
        titleKey:
          "groups.communicationOperations.capabilities.activities.title",
        descriptionKey:
          "groups.communicationOperations.capabilities.activities.description",
        icon: "calendar-days",
      },
    ],
  },
  {
    id: "voice-input",
    anchor: "voice-input",
    titleKey: "groups.voiceInput.title",
    shortKey: "groups.voiceInput.short",
    descriptionKey: "groups.voiceInput.description",
    icon: "mic",
    screenshotKey: "voice",
    screenshotAltKey: "groups.voiceInput.screenshotAlt",
    capabilities: [
      {
        id: "dictation",
        titleKey: "groups.voiceInput.capabilities.dictation.title",
        descriptionKey: "groups.voiceInput.capabilities.dictation.description",
        icon: "mic",
      },
      {
        id: "forms",
        titleKey: "groups.voiceInput.capabilities.forms.title",
        descriptionKey: "groups.voiceInput.capabilities.forms.description",
        icon: "pen-line",
      },
      {
        id: "arabic-english",
        titleKey: "groups.voiceInput.capabilities.arabicEnglish.title",
        descriptionKey:
          "groups.voiceInput.capabilities.arabicEnglish.description",
        icon: "messages",
      },
      {
        id: "insert-review",
        titleKey: "groups.voiceInput.capabilities.insertReview.title",
        descriptionKey:
          "groups.voiceInput.capabilities.insertReview.description",
        icon: "clipboard-check",
      },
    ],
  },
  {
    id: "transportation",
    anchor: "transportation",
    titleKey: "groups.transportation.title",
    shortKey: "groups.transportation.short",
    descriptionKey: "groups.transportation.description",
    icon: "bus",
    screenshotKey: "transportation",
    screenshotAltKey: "groups.transportation.screenshotAlt",
    capabilities: [
      {
        id: "vehicles",
        titleKey: "groups.transportation.capabilities.vehicles.title",
        descriptionKey:
          "groups.transportation.capabilities.vehicles.description",
        icon: "bus",
      },
      {
        id: "routes",
        titleKey: "groups.transportation.capabilities.routes.title",
        descriptionKey: "groups.transportation.capabilities.routes.description",
        icon: "route",
      },
      {
        id: "assignments",
        titleKey: "groups.transportation.capabilities.assignments.title",
        descriptionKey:
          "groups.transportation.capabilities.assignments.description",
        icon: "map-pin",
      },
      {
        id: "trips",
        titleKey: "groups.transportation.capabilities.trips.title",
        descriptionKey: "groups.transportation.capabilities.trips.description",
        icon: "calendar-days",
      },
      {
        id: "incidents",
        titleKey: "groups.transportation.capabilities.incidents.title",
        descriptionKey:
          "groups.transportation.capabilities.incidents.description",
        icon: "shield",
      },
      {
        id: "reports",
        titleKey: "groups.transportation.capabilities.reports.title",
        descriptionKey:
          "groups.transportation.capabilities.reports.description",
        icon: "chart-column",
      },
    ],
  },
  {
    id: "library",
    anchor: "library",
    titleKey: "groups.library.title",
    shortKey: "groups.library.short",
    descriptionKey: "groups.library.description",
    icon: "library",
    screenshotKey: "library",
    screenshotAltKey: "groups.library.screenshotAlt",
    capabilities: [
      {
        id: "books",
        titleKey: "groups.library.capabilities.books.title",
        descriptionKey: "groups.library.capabilities.books.description",
        icon: "book-open",
      },
      {
        id: "digital",
        titleKey: "groups.library.capabilities.digital.title",
        descriptionKey: "groups.library.capabilities.digital.description",
        icon: "library",
      },
      {
        id: "student-access",
        titleKey: "groups.library.capabilities.studentAccess.title",
        descriptionKey:
          "groups.library.capabilities.studentAccess.description",
        icon: "book-user",
      },
      {
        id: "catalog",
        titleKey: "groups.library.capabilities.catalog.title",
        descriptionKey: "groups.library.capabilities.catalog.description",
        icon: "file-text",
      },
      {
        id: "self-learning",
        titleKey: "groups.library.capabilities.selfLearning.title",
        descriptionKey:
          "groups.library.capabilities.selfLearning.description",
        icon: "graduation-cap",
      },
    ],
  },
  {
    id: "portals-admin",
    anchor: "portals-admin",
    titleKey: "groups.portalsAdmin.title",
    shortKey: "groups.portalsAdmin.short",
    descriptionKey: "groups.portalsAdmin.description",
    icon: "key-round",
    screenshotKey: "permissions",
    screenshotAltKey: "groups.portalsAdmin.screenshotAlt",
    capabilities: [
      {
        id: "dashboard",
        titleKey: "groups.portalsAdmin.capabilities.dashboard.title",
        descriptionKey:
          "groups.portalsAdmin.capabilities.dashboard.description",
        icon: "layout-dashboard",
      },
      {
        id: "permissions",
        titleKey: "groups.portalsAdmin.capabilities.permissions.title",
        descriptionKey:
          "groups.portalsAdmin.capabilities.permissions.description",
        icon: "key-round",
      },
      {
        id: "branches",
        titleKey: "groups.portalsAdmin.capabilities.branches.title",
        descriptionKey:
          "groups.portalsAdmin.capabilities.branches.description",
        icon: "building-2",
      },
      {
        id: "settings",
        titleKey: "groups.portalsAdmin.capabilities.settings.title",
        descriptionKey:
          "groups.portalsAdmin.capabilities.settings.description",
        icon: "user-cog",
      },
    ],
  },
] as const satisfies readonly FeatureGroup[];

/**
 * Conceptual connection across school operations — not an automated pipeline claim.
 */
export const featureConnectionSteps = [
  {
    id: "student",
    titleKey: "connection.steps.student.title",
    descriptionKey: "connection.steps.student.description",
    icon: "graduation-cap",
  },
  {
    id: "attendance",
    titleKey: "connection.steps.attendance.title",
    descriptionKey: "connection.steps.attendance.description",
    icon: "clipboard-list",
  },
  {
    id: "assessment",
    titleKey: "connection.steps.assessment.title",
    descriptionKey: "connection.steps.assessment.description",
    icon: "clipboard-check",
  },
  {
    id: "fees",
    titleKey: "connection.steps.fees.title",
    descriptionKey: "connection.steps.fees.description",
    icon: "wallet",
  },
  {
    id: "reporting",
    titleKey: "connection.steps.reporting.title",
    descriptionKey: "connection.steps.reporting.description",
    icon: "chart-column",
  },
] as const satisfies readonly FeatureConnectionStep[];

export const featureRoleKeys = [
  "administration",
  "teachers",
  "supervisors",
  "accountants",
  "hr",
  "students",
  "guardians",
] as const;
