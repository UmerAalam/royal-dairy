import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  Server,
  Route as RouteIcon,
  Shield,
  Waves,
  Sparkles,
} from "lucide-react";
import HomePage from "../pages/HomePage.tsx";
export const Route = createFileRoute("/")({ component: App });

function App() {
  return HomePage();
}
