import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Treatments from "./pages/Treatments";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AyurvedaCures from "./pages/AyurvedaCures";
import AyurvediaBasics from "./pages/AyurvediaBasics";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/treatments"} component={Treatments} />
      <Route path={"/services"} component={Treatments} />
      <Route path={"/about"} component={About} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/ayurveda-cures"} component={AyurvedaCures} />
      <Route path={"/ayurveda-basics"} component={AyurvediaBasics} />
      <Route path={"/404"} component={NotFound} />
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
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
