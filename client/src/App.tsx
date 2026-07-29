import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { LiveChatWidget } from "./components/LiveChatWidget";
import { TawkToChat } from "./components/TawkToChat";
import { SEOSchemaMarkup } from "./components/SEOSchemaMarkup";
import { analytics } from "./lib/analytics";

// Initialize analytics on app load
analytics.trackEvent('page_load', { timestamp: new Date().toISOString() });

import Home from "@/pages/Home";
import VideoTestimonials from "@/pages/VideoTestimonials";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Treatments from "./pages/Treatments";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AyurvedaCures from "./pages/AyurvedaCures";
import AyurvediaBasics from "./pages/AyurvediaBasics";
import SubmitTestimonial from "./pages/SubmitTestimonial";
import PanchakarmaPrograms from "./pages/PanchakarmaPrograms";
import Analytics from "./pages/Analytics";
import EmailAutomation from "./pages/EmailAutomation";
import BookingSuccess from "./pages/BookingSuccess";
import SMSReminders from "./pages/SMSReminders";
import AppointmentManagement from "./pages/AppointmentManagement";

import Pricing from "./pages/Pricing";
import MyAppointments from "./pages/MyAppointments";
import Shop from "./pages/Shop";
import BookAppointment from "@/pages/BookAppointment";
import TreatmentDetail from "@/pages/TreatmentDetail";
import BlogPost from "@/pages/BlogPost";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/video-testimonials" component={VideoTestimonials} />
      <Route path="/treatments" component={Treatments} />
      <Route path={"/services"} component={Treatments} />
      <Route path={"/about"} component={About} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/ayurveda-cures"} component={AyurvedaCures} />
      <Route path={"/ayurveda-basics"} component={AyurvediaBasics} />
      <Route path="/submit-testimonial" component={SubmitTestimonial} />
      <Route path="/panchakarma-programs" component={PanchakarmaPrograms} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/email-automation" component={EmailAutomation} />
      <Route path="/booking-success" component={BookingSuccess} />
      <Route path="/sms-reminders" component={SMSReminders} />
      <Route path="/appointment-management" component={AppointmentManagement} />

      <Route path="/treatments/pricing" component={Pricing} />
      <Route path="/my-appointments" component={MyAppointments} />
      <Route path="/shop" component={Shop} />
      <Route path="/book-appointment" component={BookAppointment} />
      <Route path="/treatments/:slug" component={TreatmentDetail} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <SEOSchemaMarkup />
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppWidget />
          <LiveChatWidget />
          <TawkToChat />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
