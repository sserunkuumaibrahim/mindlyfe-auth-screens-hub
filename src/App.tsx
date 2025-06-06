import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import MFAVerify from "./pages/auth/MFAVerify";
import Dashboard from "./pages/Dashboard";
import WellnessAnalytics from "./pages/WellnessAnalytics";
import ProgressTracking from "./pages/ProgressTracking";
import NotificationsCenter from "./pages/NotificationsCenter";
import Community from "./pages/Community";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import UserProfile from "./pages/UserProfile";
import FollowManagement from "./pages/FollowManagement";
import ContentModeration from "./pages/ContentModeration";
import TherapistDiscovery from "./pages/teletherapy/TherapistDiscovery";
import SessionBooking from "./pages/teletherapy/SessionBooking";
import SessionHistory from "./pages/teletherapy/SessionHistory";
import VideoSession from "./pages/teletherapy/VideoSession";
import GroupSession from "./pages/teletherapy/GroupSession";
import TreatmentPlan from "./pages/teletherapy/TreatmentPlan";
import TherapistProfile from "./pages/teletherapy/TherapistProfile";
import ChatRoomsList from "./pages/chat/ChatRoomsList";
import ChatRoom from "./pages/chat/ChatRoom";
import CreateChatRoom from "./pages/chat/CreateChatRoom";
import ChatPartners from "./pages/chat/ChatPartners";
import ChatSettings from "./pages/chat/ChatSettings";
import Journal from "./pages/Journal";
import JournalWrite from "./pages/journal/JournalWrite";
import JournalAnalytics from "./pages/journal/JournalAnalytics";
import JournalHistory from "./pages/journal/JournalHistory";
import JournalPrompts from "./pages/journal/JournalPrompts";
import JournalPrivacy from "./pages/journal/JournalPrivacy";
import Resources from "./pages/Resources";
import LearningPaths from "./pages/resources/LearningPaths";
import ResourceViewer from "./pages/resources/ResourceViewer";
import SavedResources from "./pages/resources/SavedResources";
import ResourceProgress from "./pages/resources/ResourceProgress";
import ResourceSearch from "./pages/resources/ResourceSearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/auth/mfa-verify" element={<MFAVerify />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/analytics" element={<WellnessAnalytics />} />
          <Route path="/dashboard/progress" element={<ProgressTracking />} />
          <Route path="/dashboard/notifications" element={<NotificationsCenter />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/create" element={<CreatePost />} />
          <Route path="/community/post/:id" element={<PostDetails />} />
          <Route path="/community/profile/:anonymousId" element={<UserProfile />} />
          <Route path="/community/follows" element={<FollowManagement />} />
          <Route path="/community/moderation" element={<ContentModeration />} />
          <Route path="/teletherapy" element={<TherapistDiscovery />} />
          <Route path="/teletherapy/profile/:therapistId" element={<TherapistProfile />} />
          <Route path="/teletherapy/book/:therapistId" element={<SessionBooking />} />
          <Route path="/teletherapy/sessions" element={<SessionHistory />} />
          <Route path="/teletherapy/session/:sessionId" element={<VideoSession />} />
          <Route path="/teletherapy/group/:sessionId" element={<GroupSession />} />
          <Route path="/teletherapy/treatment/:therapistId" element={<TreatmentPlan />} />
          <Route path="/teletherapy/treatment/current" element={<TreatmentPlan />} />
          <Route path="/chat" element={<ChatRoomsList />} />
          <Route path="/chat/room/:roomId" element={<ChatRoom />} />
          <Route path="/chat/create" element={<CreateChatRoom />} />
          <Route path="/chat/partners" element={<ChatPartners />} />
          <Route path="/chat/settings" element={<ChatSettings />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/write" element={<JournalWrite />} />
          <Route path="/journal/analytics" element={<JournalAnalytics />} />
          <Route path="/journal/history" element={<JournalHistory />} />
          <Route path="/journal/prompts" element={<JournalPrompts />} />
          <Route path="/journal/privacy" element={<JournalPrivacy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/paths" element={<LearningPaths />} />
          <Route path="/resources/view/:id" element={<ResourceViewer />} />
          <Route path="/resources/saved" element={<SavedResources />} />
          <Route path="/resources/progress" element={<ResourceProgress />} />
          <Route path="/resources/search" element={<ResourceSearch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
